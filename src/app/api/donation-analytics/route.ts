import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const [rubRows] = await db.query<any[]>(`
      SELECT SUM(amount) AS total_amount
      FROM payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
      AND currency = 'RUB'
    `)

    const [usdRows] = await db.query<any[]>(`
      SELECT SUM(amount) AS total_amount
      FROM payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
      AND currency = 'USD'
    `)

    const [rcGivenRows] = await db.query<any[]>(`
      SELECT
        SUM(
          JSON_EXTRACT(metadata, '$.amount_rc')
        ) AS total_amount
      FROM payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH);
    `)

    const [rcSpentRows] = await db.query<any[]>(`
      SELECT SUM(amount) * -1 AS total_amount
      FROM log_donate
      WHERE date >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
    `)

    const [rcBalanceRows] = await db.query<any[]>(`
      SELECT SUM(donation_balance) AS total_amount
      FROM user_donation_balance
    `)

    return NextResponse.json({
      rub: rubRows[0]?.total_amount || 0,
      usd: usdRows[0]?.total_amount || 0,
      rcGiven: rcGivenRows[0]?.total_amount || 0,
      rcSpent: rcSpentRows[0]?.total_amount || 0,
      rcBalance: rcBalanceRows[0]?.total_amount || 0,
    })
  } catch (err) {
    console.error('MYSQL ERROR:', err)
    return NextResponse.json({ error: 'DB error' }, { status: 500 })
  }
}
