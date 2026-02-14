import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

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
    const [income] = await db.query<any[]>(`
      SELECT 
        DATE(paid_at) AS date,
        SUM(amount_rc) AS total
      FROM payments
      WHERE paid_at >= DATE_SUB(CURDATE(), INTERVAL ${interval})
      GROUP BY DATE(paid_at)
      ORDER BY DATE(paid_at)
    `)

    const [spend] = await db.query<any[]>(`
      SELECT 
        DATE(date) AS date,
        SUM(amount) AS total
      FROM log_donate
      WHERE date >= DATE_SUB(CURDATE(), INTERVAL ${interval})
      GROUP BY DATE(date)
      ORDER BY DATE(date)
    `)

    return NextResponse.json({
      income,
      spend
    })
  } catch (e) {
    console.error('DB ERROR:', e)
    return NextResponse.json({ error: 'db error' }, { status: 500 })
  }
}
