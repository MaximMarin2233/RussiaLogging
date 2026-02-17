import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

const PERIODS: Record<string, string> = {
  day: '1 DAY',
  week: '7 DAY',
  month: '1 MONTH'
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const period = searchParams.get('period') || 'month'
  const interval = PERIODS[period] || '1 MONTH'

  try {
    const db = dbConnections[1] // launcher хост

    const [income] = await db.query<any[]>(`
      SELECT 
        DATE(paid_at) AS date,
        SUM(amount_rc) AS total
      FROM launcher.payments
      WHERE paid_at >= DATE_SUB(CURDATE(), INTERVAL ${interval})
      GROUP BY DATE(paid_at)
      ORDER BY DATE(paid_at)
    `)

    const [spend] = await db.query<any[]>(`
      SELECT 
        DATE(date) AS date,
        SUM(amount) AS total
      FROM launcher.log_donate
      WHERE date >= DATE_SUB(CURDATE(), INTERVAL ${interval})
      GROUP BY DATE(date)
      ORDER BY DATE(date)
    `)

    return NextResponse.json({
      income: income.map(r => ({
        date: r.date,
        total: Number(r.total || 0),
      })),
      spend: spend.map(r => ({
        date: r.date,
        total: Number(r.total || 0),
      })),
    })

  } catch (e) {
    console.error('DB ERROR:', e)
    return NextResponse.json({ error: 'db error' }, { status: 500 })
  }
}
