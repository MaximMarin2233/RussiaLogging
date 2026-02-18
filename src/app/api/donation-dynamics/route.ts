import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)

    const period = searchParams.get('period') || 'month'
    const days = period === 'week' ? 7 : 30

    const db = dbConnections[0]

    const [rows] = await db.query<any[]>(`
      SELECT
        DATE(paid_at) AS date,
        SUM(amount) AS total
      FROM launcher.payments
      WHERE paid_at >= DATE_SUB(CURDATE(), INTERVAL ${days} DAY)
        AND currency = 'RUB'
      GROUP BY DATE(paid_at)
      ORDER BY date ASC
    `)

    return NextResponse.json(
      rows.map(r => ({
        date: r.date,
        total: Number(r.total || 0),
      }))
    )

  } catch (err) {
    console.error('MYSQL ERROR:', err)
    return NextResponse.json({ error: 'DB error' }, { status: 500 })
  }
}
