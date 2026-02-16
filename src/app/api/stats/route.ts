import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const server = Number(searchParams.get('server') || 1)

    if (server < 1 || server > 6) {
      return NextResponse.json({ error: 'Invalid server' }, { status: 400 })
    }

    const [moneyRows] = await db.query<any[]>(`
      SELECT cash + bank + business AS total_amount
      FROM log_all_money
      WHERE server = ?
      ORDER BY date DESC
      LIMIT 1
    `, [server])

    const [playersRows] = await db.query<any[]>(`
      SELECT count AS total_amount
      FROM log_online_players
      WHERE server = ?
      ORDER BY date DESC
      LIMIT 1
    `, [server])

    const [adminsRows] = await db.query<any[]>(`
      SELECT COUNT(*) AS total
      FROM log_online_admins
      WHERE server = ?
    `, [server])

    return NextResponse.json({
      totalMoney: moneyRows[0]?.total_amount || 0,
      onlinePlayers: playersRows[0]?.total_amount || 0,
      onlineAdmins: adminsRows[0]?.total || 0,
      server,
    })
  } catch (error) {
    console.error('DB error:', error)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
