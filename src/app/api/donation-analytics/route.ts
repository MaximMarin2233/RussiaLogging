import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const [rubRows] = await db.query<any[]>(`
      SELECT SUM(amount) AS total
      FROM payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
      AND currency = 'RUB'
    `)

    const [rcGivenRows] = await db.query<any[]>(`
      SELECT SUM(
        JSON_EXTRACT(description, '$.amount_rc')
      ) AS total
      FROM payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
    `)

    const [rcSpentRows] = await db.query<any[]>(`
      SELECT SUM(amount) * -1 AS total
      FROM log_donate
      WHERE date >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
    `)

    const [rcBalanceRows] = await db.query<any[]>(`
      SELECT SUM(donation_balance) AS total
      FROM user_donation_balance
    `)

    return NextResponse.json({
      rub: Number(rubRows[0]?.total || 0),
      rcGiven: Number(rcGivenRows[0]?.total || 0),
      rcSpent: Number(rcSpentRows[0]?.total || 0),
      rcBalance: Number(rcBalanceRows[0]?.total || 0),
    })
  } catch (err) {
    console.error('MYSQL ERROR:', err)
    return NextResponse.json({ error: 'DB error' }, { status: 500 })
  }
}
