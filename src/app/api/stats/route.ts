import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const server = Number(searchParams.get('server') || 1)

    if (server < 1 || server > 6) {
      return NextResponse.json({ error: 'Invalid server' }, { status: 400 })
    }

    const db = dbConnections[0]

    const [moneyRows] = await db.query<any[]>(`
      SELECT cash + bank + business AS total_amount
      FROM launcher.log_all_money
      WHERE server = ?
      ORDER BY date DESC
      LIMIT 1
    `, [server])

    const [playersRows] = await db.query<any[]>(`
      SELECT count AS total_amount
      FROM launcher.log_online_players
      WHERE server = ?
      ORDER BY date DESC
      LIMIT 1
    `, [server])

    const [adminsRows] = await db.query<any[]>(`
      SELECT COUNT(*) AS total
      FROM launcher.log_online_admins
      WHERE server = ?
    `, [server])

    return NextResponse.json({
      server,
      totalMoney: Number(moneyRows[0]?.total_amount || 0),
      onlinePlayers: Number(playersRows[0]?.total_amount || 0),
      onlineAdmins: Number(adminsRows[0]?.total || 0),
    })

  } catch (error) {
    console.error('DB error:', error)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
