import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[0]

    const [rubRows] = await db.query<any[]>(`
      SELECT SUM(amount) AS total
      FROM launcher.payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
        AND currency = 'RUB'
    `)

    const [rcGivenRows] = await db.query<any[]>(`
      SELECT SUM(
        JSON_UNQUOTE(JSON_EXTRACT(description, '$.amount_rc'))
      ) AS total
      FROM launcher.payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
    `)

    const [rcSpentRows] = await db.query<any[]>(`
      SELECT SUM(amount) * -1 AS total
      FROM launcher.log_donate
      WHERE date >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
    `)

    const [rcBalanceRows] = await db.query<any[]>(`
      SELECT SUM(donation_balance) AS total
      FROM launcher.user_donation_balance
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
