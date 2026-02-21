import { NextResponse } from 'next/server'
import { dbConnections } from '@/lib/db'

export async function GET() {

  try {

    const db = dbConnections[1] // server1
    const charId = 150644

    const [rows]: any = await db.query(
      `
      SELECT
          oc.id,
          oc.own_car_model_id,
          oc.own_car_mileage,
          oc.own_car_health,
          oc.own_car_fuel,
          lp.licence_plate_country,
          IFNULL(lp.licence_plate_number, 'Отсутствует') AS licence_plate_number,
          lp.licence_plate_region
      FROM
          server1.ownable_car oc
      LEFT JOIN
          server1.licence_plate lp 
          ON oc.id = lp.licence_plate_use_own_car_id
      WHERE
          oc.own_car_char_id = ?
      ORDER BY
          oc.id ASC
      `,
      [charId]
    )

    const transport = rows.map((car: any) => ({

      id: car.id,

      model_id: car.own_car_model_id,

      mileage: car.own_car_mileage,

      health: car.own_car_health, // 0–1000

      fuel: car.own_car_fuel, // 0–100

      licence_plate: {
        country: car.licence_plate_country,
        number: car.licence_plate_number,
        region: car.licence_plate_region
      }

    }))

    return NextResponse.json({

      char_id: charId,

      total: transport.length,

      transport

    })

  } catch (err: any) {

    console.error('TRANSPORT API ERROR:', err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )

  }

}