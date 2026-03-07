import { useEffect, useState } from 'react'

import styles from './Cars.module.scss'
import inventoryStyles from '@/app/account/sections/Inventory/Inventory.module.scss'

type Car = {
  id: number
  model_id: number
  mileage: number
  health: number
  fuel: number
  licence_plate: {
    country: string | null
    number: string
    region: string | null
  }
}

export default function Cars() {

  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {

    fetch('/api/account/transport')
      .then(res => res.json())
      .then(data => {

        console.log('TRANSPORT:', data)

        setCars(data.transport || [])

      })
      .catch(err => {

        console.error('TRANSPORT ERROR:', err)

      })

  }, [])


  const getFuelPercent = (fuel: number) => {

    return Math.round(fuel)

  }

  const getHealthPercent = (health: number) => {

    return Math.round((health / 1000) * 100)

  }


  useEffect(() => {

    fetch('/api/account/transport')
      .then(res => res.json())
      .then(data => {

        console.log('TRANSPORT:', data)

      })
      .catch(err => {

        console.error('TRANSPORT ERROR:', err)

      })

  }, [])
  return (
    <section className={styles['cars']}>
      <div className="container">
        <div className={styles['cars__content']}>
          <div className={inventoryStyles['inventory__title-wrapper']}>
            <h2 className={inventoryStyles['inventory__title']}>
              Автомобили игрока
            </h2>
            {/* <button className={`btn-reset ${inventoryStyles['inventory__nav-btn']}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
              </svg>
              Выдать транспорт
            </button> */}
          </div>

          <div className={styles['cars__list-wrapper']}>

            <ul className={`list-reset ${styles['cars__list']} ${styles['cars__list--width']}`}>

              {cars.map((car) => {

                const fuelPercent = getFuelPercent(car.fuel)
                const healthPercent = getHealthPercent(car.health)

                const plate =
                  car.licence_plate.number === 'Отсутствует'
                    ? 'Отсутствует'
                    : `${car.licence_plate.number}${car.licence_plate.region ?? ''}`

                return (

                  <li key={car.id} className={styles['cars__item']}>

                    <img
                      src={`/cars/cars-1.png`}
                      alt=""
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/cars/cars-1.png'
                      }}
                    />

                    <div className={styles['cars__item-blocks']}>

                      <div className={styles['cars__item-block']}>
                        Model ID: {car.model_id}
                        <span>Гос.номер: {plate}</span>
                      </div>

                      <div className={styles['cars__item-block']}>
                        ID транспорта
                        <span>{car.id}</span>
                      </div>

                      <div className={styles['cars__item-block']}>
                        Пробег
                        <span>{Math.round(car.mileage)} км</span>
                      </div>

                    </div>


                    <div className={styles['cars__item-inf-wrapper']}>

                      <div className={styles['cars__item-inf']}>


                        <div className={styles['cars__item-inf-block']}>

                          <div className={styles['cars__item-inf-block-title']}>
                            Топливо <span>{fuelPercent}%</span>
                          </div>

                          <div
                            className={styles['cars__item-inf-block-progress']}
                          >
                            <div
                              style={{
                                width: `${fuelPercent}%`,
                              }}
                            />
                          </div>

                        </div>



                        <div className={styles['cars__item-inf-block']}>

                          <div className={`${styles['cars__item-inf-block-title']} ${styles['cars__item-inf-block-title--purple']}`}>
                            Состояние <span>{healthPercent}%</span>
                          </div>

                          <div
                            className={`${styles['cars__item-inf-block-progress']} ${styles['cars__item-inf-block-progress--purple']}`}
                          >
                            <div
                              style={{
                                width: `${healthPercent}%`,
                              }}
                            />
                          </div>

                        </div>

                      </div>

                    </div>

                  </li>

                )

              })}

            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}
