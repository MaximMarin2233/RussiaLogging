import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'
import { getUser } from '@/lib/getUser'

export async function GET() {
  try {
    const user = await getUser()

    const db = dbConnections[user.server]
    const charId = user.char_id

    const [maxSlotsRows]: any = await db.query(
      `
      SELECT
        char_add_inv_slots + 25 AS max_slots
      FROM server1.characters
      WHERE char_id = ?
      `,
      [charId]
    )

    const maxSlots = maxSlotsRows?.[0]?.max_slots || 0

    const [totalItemsRows]: any = await db.query(
      `
      SELECT 
        COUNT(*) AS total_amount
      FROM server1.inventory_part_inventory
      WHERE char_id = ?
      `,
      [charId]
    )

    const totalItems = totalItemsRows?.[0]?.total_amount || 0

    const [itemsRows]: any = await db.query(
      `
      SELECT
        ipi.item_id,
        ipi.item_count,
        li.text
      FROM server1.inventory_part_inventory ipi
      LEFT JOIN server1.log_inventory_items li
        ON ipi.item_id = li.id
      WHERE ipi.char_id = ?
      ORDER BY ipi.item_index ASC
      `,
      [charId]
    )

    const items = itemsRows.map((item: any) => ({
      item_id: item.item_id,
      item_name: item.text || 'Unknown',
      item_count: item.item_count
    }))

    const inventory = {
      char_id: charId,
      max_slots: maxSlots,
      total_items: totalItems,
      items
    }

    console.log('INVENTORY:', inventory)

    return NextResponse.json(inventory)

  } catch (err: any) {
    console.error('INVENTORY API ERROR:', err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}