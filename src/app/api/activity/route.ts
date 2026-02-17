import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[1]

    const [servers] = await db.query<any[]>(`
      SELECT id, online_players
      FROM launcher.server_online
      ORDER BY id ASC
    `)

    const [admins] = await db.query<any[]>(`
      SELECT date, name, rank
      FROM launcher.log_online_admins
      ORDER BY id ASC
      LIMIT 4
    `)

    return NextResponse.json({
      servers,
      admins,
    })
  } catch (error) {
    console.error('DB error:', error)
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}
