import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const [servers] = await db.query<any[]>(`
      SELECT id, online_players
      FROM server_online
      ORDER BY id ASC
    `)

    const [admins] = await db.query<any[]>(`
      SELECT date, name, rank
      FROM log_online_admins
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
