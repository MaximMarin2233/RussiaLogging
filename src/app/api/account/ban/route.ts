import { NextRequest, NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'
import { getUser } from '@/lib/getUser'

export async function POST(req: NextRequest) {
  try {

    const user = await getUser()

    const db = dbConnections[user.server]

    const adminCharId = user.char_id
    const adminName = user.char_name

    const { player_char_id, reason, time } = await req.json()

    if (!player_char_id || !reason || !time) {
      return NextResponse.json(
        { error: 'Missing parameters' },
        { status: 400 }
      )
    }

    await db.query(
      `
      INSERT INTO admin_ban
      SET
        admin_char_id = ?,
        player_char_id = ?,
        reason = ?
      `,
      [adminCharId, player_char_id, reason]
    )

    await db.query(
      `
      UPDATE admins
      SET admin_bans = admin_bans + 1
      WHERE admin_char_id = ?
      LIMIT 1
      `,
      [adminCharId]
    )

    await db.query(
      `
      INSERT INTO ban_list
      SET
        char_id = ?,
        time = NOW(),
        ban_time = NOW() + INTERVAL ? SECOND,
        reason = ?,
        admin_name = ?
      `,
      [player_char_id, time, reason, adminName]
    )

    return NextResponse.json({
      success: true,
      player_char_id
    })

  } catch (err: any) {

    console.error('BAN API ERROR:', err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )

  }
}