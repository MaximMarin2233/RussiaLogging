import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const name = searchParams.get('name')

    if (!name) {
      return NextResponse.json({ error: 'Missing name parameter' }, { status: 400 })
    }

    console.log(`➡️ NAME: ${name}`)

    // --- 1. launcher DB: получаем char_id и server ---
    const launcherDb = dbConnections[0]
    console.log('➡️ QUERY launcher.log_characters')
    const [chars]: any = await launcherDb.query(
      `SELECT char_id, server FROM launcher.log_characters WHERE name = ?`,
      [name]
    )

    if (!chars || !chars.length) {
      return NextResponse.json({ error: 'Character not found' }, { status: 404 })
    }

    const char = chars[0]
    const { char_id, server } = char
    console.log('CHAR RESULT:', chars)
    console.log('FOUND:', char)

    // --- 2. serverX DB: получаем действия ---
    const serverDb = dbConnections[server]
    if (!serverDb) {
      return NextResponse.json({ error: 'Invalid server DB' }, { status: 400 })
    }

    console.log(`➡️ QUERY server${server}.log_action`)
    const [rows]: any = await serverDb.query(
      `
      SELECT
        la.id,
        la.date,
        lac.text AS category_name,
        lar.text AS reason_name,
        la.char_id,
        la.to_char_id,
        la.cash_value,
        la.cash_after,
        la.bank_value,
        la.bank_after,
        la.donate_value,
        la.donate_after
      FROM server${server}.log_action la
      LEFT JOIN server${server}.log_action_category lac ON la.category_id = lac.category_id
      LEFT JOIN server${server}.log_action_reason lar ON la.reason_id = lar.reason_id
      WHERE la.char_id = ?
      ORDER BY la.date DESC
      LIMIT 100
      `,
      [char_id]
    )

    console.log('ROWS RESULT:', rows.length)

    // --- 3. пробрасываем имя игрока из launcher ---
    const logs = rows.map((row: any) => ({
      ...row,
      player_name: name
    }))

    return NextResponse.json({ logs })
  } catch (err: any) {
    console.error('ROUTE ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
