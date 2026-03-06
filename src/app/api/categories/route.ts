import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {
  try {
    const db = dbConnections[0]

    const [rows]: any = await db.query(
      `
      SELECT
          type,
          item_id,
          name,
          price,
          total_count,
          total_count * price AS total_price
      FROM
      (
          SELECT
              type,
              item_id,
              name,
              price,
              COUNT(*) AS total_count,
              ROW_NUMBER() OVER (PARTITION BY type ORDER BY COUNT(*) DESC) AS r
          FROM
              launcher.log_top_items
          WHERE
              date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
          GROUP BY
              type,
              item_id
      ) list
      WHERE
          r = 1
      ORDER BY
          total_count DESC
      LIMIT 3
      `
    )

    const categories = rows.map((item: any) => ({
      type: item.type,
      item_id: item.item_id,
      name: item.name,
      price: item.price,
      total_count: item.total_count,
      total_price: item.total_price
    }))

    return NextResponse.json({
      total: categories.length,
      categories
    })

  } catch (err: any) {
    console.error('CATEGORIES API ERROR:', err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}