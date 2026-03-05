import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function POST(req: Request) {
  try {

    const { login, password } = await req.json()

    if (!login || !password) {
      return NextResponse.json(
        { error: 'Введите логин и пароль' },
        { status: 400 }
      )
    }

    const mainDb = dbConnections[0]

    const [userRows]: any = await mainDb.query(
      `
      SELECT
        user_id
      FROM
        launcher.users
      WHERE
        username = ?
        AND password = ?
      LIMIT 1
      `,
      [login, password]
    )

    if (userRows.length === 0) {
      return NextResponse.json(
        { error: 'Неверный логин или пароль' },
        { status: 401 }
      )
    }

    const user_id = userRows[0].user_id

    const [charRows]: any = await mainDb.query(
      `
      SELECT
        char_id,
        name,
        server
      FROM
        launcher.log_characters
      WHERE
        char_act_id = ?
      LIMIT 1
      `,
      [user_id]
    )

    if (charRows.length === 0) {
      return NextResponse.json(
        { error: 'Персонаж не найден' },
        { status: 404 }
      )
    }

    const char_id = charRows[0].char_id
    const char_name = charRows[0].name
    const server = charRows[0].server

    const serverDb = dbConnections[server]

    const [adminRows]: any = await serverDb.query(
      `
      SELECT
        admin_level
      FROM
        server${server}.admins
      WHERE
        admin_char_id = ?
      LIMIT 1
      `,
      [char_id]
    )

    if (adminRows.length === 0) {
      return NextResponse.json(
        { error: 'Вы не являетесь администратором' },
        { status: 403 }
      )
    }

    const admin_level = adminRows[0].admin_level

    return NextResponse.json({
      success: true,
      user: {
        user_id,
        char_id,
        char_name,
        server,
        admin_level
      }
    })

  } catch (err: any) {

    console.error('LOGIN API ERROR:', err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )

  }
}