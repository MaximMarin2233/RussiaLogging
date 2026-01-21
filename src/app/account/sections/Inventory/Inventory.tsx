import styles from './Inventory.module.scss'

export default function Inventory() {
  return (
    <section className={styles['inventory']}>
      <div className="container">
        <div className={styles['inventory__content-wrapper']}>
          <div className={styles['inventory__content']}>
            <div className={styles['inventory__title-wrapper']}>
              <h2 className={styles['inventory__title']}>
                Инвентарь
              </h2>
              <div className={styles['inventory__progress']}></div>
              <div className={styles['inventory__slots']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0149 5.28493L15.3066 4.38844C13.807 3.60149 13.0572 3.20801 12.2507 3.20801C11.4441 3.20801 10.6943 3.60149 9.19469 4.38844L8.91989 4.53265L16.5416 8.88793L19.9726 7.17247C19.4206 6.54736 18.5301 6.08001 17.0149 5.28493Z" fill="url(#paint0_linear_485_1576)" />
                  <path d="M20.5774 8.30255L17.1621 10.0102V12.6038C17.1621 12.9576 16.8753 13.2445 16.5215 13.2445C16.1677 13.2445 15.8809 12.9576 15.8809 12.6038V10.6508L12.8913 12.1456V20.2093C13.5045 20.0566 14.2023 19.6904 15.3066 19.1109L17.0149 18.2144C18.8528 17.2499 19.7718 16.7677 20.282 15.9012C20.7923 15.0346 20.7923 13.9562 20.7923 11.7996V11.6997C20.7923 10.0831 20.7923 9.07235 20.5774 8.30255Z" fill="url(#paint1_linear_485_1576)" />
                  <path d="M11.61 20.2093V12.1456L3.92393 8.30255C3.70898 9.07235 3.70898 10.0831 3.70898 11.6997V11.7996C3.70898 13.9562 3.70898 15.0346 4.21926 15.9012C4.72953 16.7677 5.64847 17.2499 7.48635 18.2144L9.19469 19.1109C10.2991 19.6904 10.9968 20.0566 11.61 20.2093Z" fill="url(#paint2_linear_485_1576)" />
                  <path d="M4.52872 7.17246L12.2507 11.0335L15.1644 9.57658L7.57371 5.23908L7.48636 5.28493C5.97129 6.08 5.08069 6.54736 4.52872 7.17246Z" fill="url(#paint3_linear_485_1576)" />
                  <defs>
                    <linearGradient id="paint0_linear_485_1576" x1="12.4935" y1="-21.3603" x2="22.0855" y2="23.6824" gradientUnits="userSpaceOnUse">
                      <stop offset="0.44698" stopColor="#A8A8A8" />
                      <stop offset="1" stopColor="#3C3C3C" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_485_1576" x1="12.4935" y1="-21.3603" x2="22.0855" y2="23.6824" gradientUnits="userSpaceOnUse">
                      <stop offset="0.44698" stopColor="#A8A8A8" />
                      <stop offset="1" stopColor="#3C3C3C" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_485_1576" x1="12.4935" y1="-21.3603" x2="22.0855" y2="23.6824" gradientUnits="userSpaceOnUse">
                      <stop offset="0.44698" stopColor="#A8A8A8" />
                      <stop offset="1" stopColor="#3C3C3C" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_485_1576" x1="12.4935" y1="-21.3603" x2="22.0855" y2="23.6824" gradientUnits="userSpaceOnUse">
                      <stop offset="0.44698" stopColor="#A8A8A8" />
                      <stop offset="1" stopColor="#3C3C3C" />
                    </linearGradient>
                  </defs>
                </svg>
                Слоты: 15/50
              </div>
            </div>
            <div className={styles['inventory__cards']}>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title']}>
                  Case mansory <br />
                  x Brabus
                  <span>x1</span>
                </div>
                <img src="inventory/inventory-card-1.png" alt="" />
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title-empty']}>
                  Пустой
                </div>
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title-empty']}>
                  Пустой
                </div>
              </div>
              <div className={styles['inventory__card']}>
                <div className={styles['inventory__card-title-empty']}>
                  Пустой
                </div>
              </div>
            </div>
          </div>
          <div className={styles['inventory__nav']}>
            <h2 className={styles['inventory__title']}>
              Управление инвентарем
            </h2>
            <div className={styles['inventory__nav-btns']}>
              <button className={`btn-reset ${styles['inventory__nav-btn']}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                  <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                </svg>
                Выдать предмет
              </button>
              <button className={`btn-reset ${styles['inventory__nav-btn']}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                  <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                </svg>
                Очистить инвентарь
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
