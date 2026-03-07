import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'
import { getUser } from '@/lib/getUser'

export async function POST() {
  try {
    const user = await getUser()

    if (!user?.char_id || !user?.server) {
      return NextResponse.json({ error: 'Пользователь не авторизован' }, { status: 401 })
    }

    const db = dbConnections[user.server]

    await db.query(
      `DELETE FROM inventory_part_inventory WHERE char_id = ?`,
      [user.char_id]
    )

    return NextResponse.json({ success: true, message: 'Инвентарь очищен' })
  } catch (err: any) {
    console.error('CLEAR INVENTORY API ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}