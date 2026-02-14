import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const server = Number(searchParams.get('server') || 1)

    if (server < 1 || server > 5) {
      return NextResponse.json({ error: 'Invalid server' }, { status: 400 })
    }

    const schema = 'launcher'

    const [rubRows] = await db.query<any[]>(`
      SELECT SUM(amount) AS total_amount
      FROM ${schema}.payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
        AND currency = 'RUB'
        AND server = ?
    `, [server])

    const [rcGivenRows] = await db.query<any[]>(`
      SELECT SUM(
        CAST(
          COALESCE(
            JSON_UNQUOTE(JSON_EXTRACT(metadata, '$.amount_rc')),
            JSON_UNQUOTE(JSON_EXTRACT(description, '$.amount_rc'))
          ) AS UNSIGNED
        )
      ) AS total_amount
      FROM ${schema}.payments
      WHERE paid_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
        AND server = ?
    `, [server])

    const [rcSpentRows] = await db.query<any[]>(`
      SELECT SUM(amount) * -1 AS total_amount
      FROM ${schema}.log_donate
      WHERE date >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
        AND server = ?
    `, [server])

    const [rcBalanceRows] = await db.query<any[]>(`
      SELECT SUM(donation_balance) AS total_amount
      FROM ${schema}.user_donation_balance
      WHERE server = ?
    `, [server])

    return NextResponse.json({
      rub: Number(rubRows[0]?.total_amount) || 0,
      rcGiven: Number(rcGivenRows[0]?.total_amount) || 0,
      rcSpent: Number(rcSpentRows[0]?.total_amount) || 0,
      rcBalance: Number(rcBalanceRows[0]?.total_amount) || 0,
      server,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'DB error' }, { status: 500 })
  }
}
