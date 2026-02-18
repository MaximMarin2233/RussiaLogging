import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

function replaceTemplate(text: string, row: any) {
  if (!text) return ''

  return text.replace(/\{(.*?)\}/g, (_, key) => {
    const value = row[key]

    if (value === null || value === undefined) return '-'

    if (key === 'date') {
      return new Date(value).toLocaleString('ru-RU', { hour12: false })
    }

    return String(value)
  })
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const name = searchParams.get('name')

    if (!name) {
      return NextResponse.json({ error: 'Missing name parameter' }, { status: 400 })
    }

    const launcherDb = dbConnections[0]

    const [chars]: any = await launcherDb.query(
      `SELECT char_id, server FROM launcher.log_characters WHERE name = ?`,
      [name]
    )

    if (!chars?.length) {
      return NextResponse.json({ error: 'Character not found' }, { status: 404 })
    }

    const { char_id, server } = chars[0]

    const serverDb = dbConnections[server]
    if (!serverDb) {
      return NextResponse.json({ error: 'Invalid server DB' }, { status: 400 })
    }

    const [rows]: any = await serverDb.query(
      `
      SELECT
        la.*,
        lac.text AS category_name,
        lar.text AS reason_name
      FROM server${server}.log_action la
      LEFT JOIN server${server}.log_action_category lac 
        ON la.category_id = lac.category_id
      LEFT JOIN server${server}.log_action_reason lar 
        ON la.reason_id = lar.reason_id
      WHERE la.char_id = ?
      ORDER BY la.date DESC
      LIMIT 100
      `,
      [char_id]
    )

    const logs = rows.map((row: any) => {

      const extendedRow = {
        ...row,
        player_name: name,
        to_player_name: row.to_player_name || row.to_char_id
      }

      return {
        ...row,
        server,
        player_name: name,
        reason_name: replaceTemplate(row.reason_name, extendedRow)
      }
    })

    return NextResponse.json({ logs })

  } catch (err: any) {
    console.error('ROUTE ERROR:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
