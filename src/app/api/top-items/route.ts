import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {

    const db = dbConnections[0]

    const [rows]: any = await db.query(
      `
SELECT
  date,
  MAX(name) AS name,
  MAX(currency) AS currency,
  MAX(price) AS price,
  MAX(type) AS type,
  item_id,
  COUNT(*) AS total_count,
  SUM(price) AS total_price
FROM
  launcher.log_top_items
WHERE
  date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
GROUP BY
  item_id
ORDER BY
  total_count DESC
LIMIT 10
`
    )

    const items = rows.map((item: any) => ({
      date: item.date,
      item_id: item.item_id,
      name: item.name,
      currency: item.currency,
      price: item.price,
      type: item.type,
      total_count: item.total_count,
      total_price: item.total_price
    }))

    return NextResponse.json({
      total: items.length,
      items
    })

  } catch (err: any) {

    console.error('TOP ITEMS API ERROR:', err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}