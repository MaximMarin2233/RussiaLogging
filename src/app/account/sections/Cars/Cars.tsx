import styles from './Cars.module.scss'
import inventoryStyles from '@/app/account/sections/Inventory/Inventory.module.scss'

export default function Cars() {
  return (
    <section className={styles['cars']}>
      <div className="container">
        <div className={styles['cars__content']}>
          <div className={inventoryStyles['inventory__title-wrapper']}>
            <h2 className={inventoryStyles['inventory__title']}>
              Автомобили игрока
            </h2>
            <button className={`btn-reset ${inventoryStyles['inventory__nav-btn']}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
              </svg>
              Выдать транспорт
            </button>
          </div>
          <ul className={`list-reset ${styles['cars__list']}`}>
            <li className={styles['cars__item']}>
              <img src="cars/cars-1.png" alt="" />

              <div className={styles['cars__item-blocks']}>
                <div className={styles['cars__item-block']}>
                  Aston Martin Vantage
                  <span>Гос.номер: А777АА77</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Место парковки:
                  <span>Паркинг №1</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Пробег
                  <span>12.345 км</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Цвет
                  <span>Синий</span>
                </div>
              </div>

              <div className={styles['cars__item-inf-wrapper']}>
                <div className={styles['cars__item-inf']}>
                  <div className={styles['cars__item-inf-block']}>
                    <div className={styles['cars__item-inf-block-title']}>
                      Топливо <span>100%</span>
                    </div>
                    <div className={styles['cars__item-inf-block-progress']}></div>
                  </div>
                  <div className={styles['cars__item-inf-block']}>
                    <div className={`${styles['cars__item-inf-block-title']} ${styles['cars__item-inf-block-title--purple']}`}>
                      Состояние <span>100%</span>
                    </div>
                    <div className={`${styles['cars__item-inf-block-progress']} ${styles['cars__item-inf-block-progress--purple']}`}></div>
                  </div>
                </div>
                <div className={styles['cars__item-inf-btns']}>
                  <button className={`btn-reset ${styles['cars__item-inf-btn']}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                      <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                    </svg>
                  </button>
                  <button className={`btn-reset ${styles['cars__item-inf-btn']}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.7123 6L12 12.5413L5.28766 6L3 8.22936L12 17L21 8.22936L18.7123 6Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className={styles['cars__item']}>
              <img src="cars/cars-1.png" alt="" />

              <div className={styles['cars__item-blocks']}>
                <div className={styles['cars__item-block']}>
                  Aston Martin Vantage
                  <span>Гос.номер: А777АА77</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Место парковки:
                  <span>Паркинг №1</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Пробег
                  <span>12.345 км</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Цвет
                  <span>Синий</span>
                </div>
              </div>

              <div className={styles['cars__item-inf-wrapper']}>
                <div className={styles['cars__item-inf']}>
                  <div className={styles['cars__item-inf-block']}>
                    <div className={styles['cars__item-inf-block-title']}>
                      Топливо <span>100%</span>
                    </div>
                    <div className={styles['cars__item-inf-block-progress']}></div>
                  </div>
                  <div className={styles['cars__item-inf-block']}>
                    <div className={`${styles['cars__item-inf-block-title']} ${styles['cars__item-inf-block-title--purple']}`}>
                      Состояние <span>100%</span>
                    </div>
                    <div className={`${styles['cars__item-inf-block-progress']} ${styles['cars__item-inf-block-progress--purple']}`}></div>
                  </div>
                </div>
                <div className={styles['cars__item-inf-btns']}>
                  <button className={`btn-reset ${styles['cars__item-inf-btn']}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                      <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                    </svg>
                  </button>
                  <button className={`btn-reset ${styles['cars__item-inf-btn']}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.7123 6L12 12.5413L5.28766 6L3 8.22936L12 17L21 8.22936L18.7123 6Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className={styles['cars__item']}>
              <img src="cars/cars-1.png" alt="" />

              <div className={styles['cars__item-blocks']}>
                <div className={styles['cars__item-block']}>
                  Aston Martin Vantage
                  <span>Гос.номер: А777АА77</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Место парковки:
                  <span>Паркинг №1</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Пробег
                  <span>12.345 км</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Цвет
                  <span>Синий</span>
                </div>
              </div>

              <div className={styles['cars__item-inf-wrapper']}>
                <div className={styles['cars__item-inf']}>
                  <div className={styles['cars__item-inf-block']}>
                    <div className={styles['cars__item-inf-block-title']}>
                      Топливо <span>100%</span>
                    </div>
                    <div className={styles['cars__item-inf-block-progress']}></div>
                  </div>
                  <div className={styles['cars__item-inf-block']}>
                    <div className={`${styles['cars__item-inf-block-title']} ${styles['cars__item-inf-block-title--purple']}`}>
                      Состояние <span>100%</span>
                    </div>
                    <div className={`${styles['cars__item-inf-block-progress']} ${styles['cars__item-inf-block-progress--purple']}`}></div>
                  </div>
                </div>
                <div className={styles['cars__item-inf-btns']}>
                  <button className={`btn-reset ${styles['cars__item-inf-btn']}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                      <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                    </svg>
                  </button>
                  <button className={`btn-reset ${styles['cars__item-inf-btn']}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.7123 6L12 12.5413L5.28766 6L3 8.22936L12 17L21 8.22936L18.7123 6Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className={styles['cars__item']}>
              <img src="cars/cars-1.png" alt="" />

              <div className={styles['cars__item-blocks']}>
                <div className={styles['cars__item-block']}>
                  Aston Martin Vantage
                  <span>Гос.номер: А777АА77</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Место парковки:
                  <span>Паркинг №1</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Пробег
                  <span>12.345 км</span>
                </div>

                <div className={styles['cars__item-block']}>
                  Цвет
                  <span>Синий</span>
                </div>
              </div>

              <div className={styles['cars__item-inf-wrapper']}>
                <div className={styles['cars__item-inf']}>
                  <div className={styles['cars__item-inf-block']}>
                    <div className={styles['cars__item-inf-block-title']}>
                      Топливо <span>100%</span>
                    </div>
                    <div className={styles['cars__item-inf-block-progress']}></div>
                  </div>
                  <div className={styles['cars__item-inf-block']}>
                    <div className={`${styles['cars__item-inf-block-title']} ${styles['cars__item-inf-block-title--purple']}`}>
                      Состояние <span>100%</span>
                    </div>
                    <div className={`${styles['cars__item-inf-block-progress']} ${styles['cars__item-inf-block-progress--purple']}`}></div>
                  </div>
                </div>
                <div className={styles['cars__item-inf-btns']}>
                  <button className={`btn-reset ${styles['cars__item-inf-btn']}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                      <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                    </svg>
                  </button>
                  <button className={`btn-reset ${styles['cars__item-inf-btn']}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.7123 6L12 12.5413L5.28766 6L3 8.22936L12 17L21 8.22936L18.7123 6Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
