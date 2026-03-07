import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[0]

    const [rows]: any = await db.query(`
      SELECT
        multiplier
      FROM
        launcher.donation_multiplier
      LIMIT 1
    `)

    const multiplier = rows?.[0]?.multiplier ?? 1

    return NextResponse.json({
      multiplier
    })

  } catch (err: any) {
    console.error('DONATION RATE API ERROR:', err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}