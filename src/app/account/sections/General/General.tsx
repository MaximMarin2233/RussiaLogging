import styles from './General.module.scss'

export default function General() {
  return (
    <section className={styles['general']}>
      <div className="container">
        <h2 className={`main-title ${styles['general__title']}`}>Все персонажи этого аккаунта</h2>
        <div className={styles['general__characters']}>
          <div className={styles['general__character']}>
            <div className={styles['general__character-img-wrapper']}>
              <img src="/general/general-img.png" alt="" width={187} height={220} />
              <div className={styles['general__character-label']}>
                135
                <span>уровень</span>
              </div>
            </div>
            <ul className={`list-reset ${styles['general__character-list']}`}>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Никнейм
                  <span>Denny Walker</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  ID
                  <span>4355644</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Сервер
                  <span>#1</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Создан
                  <span>12/05/2025</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Игровое время
                  <span>215 часов</span>
                </div>
              </li>
            </ul>
            <div className={styles['general__character-inf']}>
              <div className={styles['general__character-current']}>
                Текущий
              </div>
              <div className={styles['general__character-online']}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20.494" height="20.494" rx="10.247" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="10.2458" cy="10.2477" r="7.68525" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="10.2481" cy="10.2471" r="4.26958" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
              <button className={`btn-reset ${styles['general__character-show']}`}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1449 7.81409C16.1724 4.71437 13.2861 2.92969 10.2462 2.92969C8.72622 2.92969 7.24895 3.37372 5.89976 4.20202C4.55057 5.03886 3.33801 6.25996 2.34747 7.81409C1.49355 9.15474 1.49355 11.3322 2.34747 12.6729C4.32001 15.7811 7.20625 17.5573 10.2462 17.5573C11.7662 17.5573 13.2434 17.1132 14.5926 16.2849C15.9418 15.4481 17.1544 14.227 18.1449 12.6729C18.9988 11.3408 18.9988 9.15474 18.1449 7.81409ZM10.2462 13.6976C8.33342 13.6976 6.79637 12.152 6.79637 10.2477C6.79637 8.34351 8.33342 6.79793 10.2462 6.79793C12.159 6.79793 13.696 8.34351 13.696 10.2477C13.696 12.152 12.159 13.6976 10.2462 13.6976Z" fill="#E8E8E8" />
                  <path d="M10.2462 7.80469C8.90551 7.80469 7.8125 8.8977 7.8125 10.2469C7.8125 11.5875 8.90551 12.6805 10.2462 12.6805C11.5868 12.6805 12.6884 11.5875 12.6884 10.2469C12.6884 8.90624 11.5868 7.80469 10.2462 7.80469Z" fill="#E8E8E8" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles['general__character']}>
            <div className={styles['general__character-img-wrapper']}>
              <img src="/general/general-img.png" alt="" width={187} height={220} />
              <div className={styles['general__character-label']}>
                135
                <span>уровень</span>
              </div>
            </div>
            <ul className={`list-reset ${styles['general__character-list']}`}>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Никнейм
                  <span>Denny Walker</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  ID
                  <span>4355644</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Сервер
                  <span>#1</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Создан
                  <span>12/05/2025</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Игровое время
                  <span>215 часов</span>
                </div>
              </li>
            </ul>
            <div className={styles['general__character-inf']}>
              <div className={styles['general__character-current']}>
                Текущий
              </div>
              <div className={styles['general__character-online']}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20.494" height="20.494" rx="10.247" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="10.2458" cy="10.2477" r="7.68525" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="10.2481" cy="10.2471" r="4.26958" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
              <button className={`btn-reset ${styles['general__character-show']}`}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1449 7.81409C16.1724 4.71437 13.2861 2.92969 10.2462 2.92969C8.72622 2.92969 7.24895 3.37372 5.89976 4.20202C4.55057 5.03886 3.33801 6.25996 2.34747 7.81409C1.49355 9.15474 1.49355 11.3322 2.34747 12.6729C4.32001 15.7811 7.20625 17.5573 10.2462 17.5573C11.7662 17.5573 13.2434 17.1132 14.5926 16.2849C15.9418 15.4481 17.1544 14.227 18.1449 12.6729C18.9988 11.3408 18.9988 9.15474 18.1449 7.81409ZM10.2462 13.6976C8.33342 13.6976 6.79637 12.152 6.79637 10.2477C6.79637 8.34351 8.33342 6.79793 10.2462 6.79793C12.159 6.79793 13.696 8.34351 13.696 10.2477C13.696 12.152 12.159 13.6976 10.2462 13.6976Z" fill="#E8E8E8" />
                  <path d="M10.2462 7.80469C8.90551 7.80469 7.8125 8.8977 7.8125 10.2469C7.8125 11.5875 8.90551 12.6805 10.2462 12.6805C11.5868 12.6805 12.6884 11.5875 12.6884 10.2469C12.6884 8.90624 11.5868 7.80469 10.2462 7.80469Z" fill="#E8E8E8" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles['general__character']}>
            <div className={styles['general__character-img-wrapper']}>
              <img src="/general/general-img.png" alt="" width={187} height={220} />
              <div className={styles['general__character-label']}>
                135
                <span>уровень</span>
              </div>
            </div>
            <ul className={`list-reset ${styles['general__character-list']}`}>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Никнейм
                  <span>Denny Walker</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  ID
                  <span>4355644</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Сервер
                  <span>#1</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Создан
                  <span>12/05/2025</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Игровое время
                  <span>215 часов</span>
                </div>
              </li>
            </ul>
            <div className={styles['general__character-inf']}>
              <div className={styles['general__character-current']}>
                Текущий
              </div>
              <div className={styles['general__character-online']}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20.494" height="20.494" rx="10.247" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="10.2458" cy="10.2477" r="7.68525" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="10.2481" cy="10.2471" r="4.26958" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
              <button className={`btn-reset ${styles['general__character-show']}`}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1449 7.81409C16.1724 4.71437 13.2861 2.92969 10.2462 2.92969C8.72622 2.92969 7.24895 3.37372 5.89976 4.20202C4.55057 5.03886 3.33801 6.25996 2.34747 7.81409C1.49355 9.15474 1.49355 11.3322 2.34747 12.6729C4.32001 15.7811 7.20625 17.5573 10.2462 17.5573C11.7662 17.5573 13.2434 17.1132 14.5926 16.2849C15.9418 15.4481 17.1544 14.227 18.1449 12.6729C18.9988 11.3408 18.9988 9.15474 18.1449 7.81409ZM10.2462 13.6976C8.33342 13.6976 6.79637 12.152 6.79637 10.2477C6.79637 8.34351 8.33342 6.79793 10.2462 6.79793C12.159 6.79793 13.696 8.34351 13.696 10.2477C13.696 12.152 12.159 13.6976 10.2462 13.6976Z" fill="#E8E8E8" />
                  <path d="M10.2462 7.80469C8.90551 7.80469 7.8125 8.8977 7.8125 10.2469C7.8125 11.5875 8.90551 12.6805 10.2462 12.6805C11.5868 12.6805 12.6884 11.5875 12.6884 10.2469C12.6884 8.90624 11.5868 7.80469 10.2462 7.80469Z" fill="#E8E8E8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles['general__finance']}>
          <div className={styles['general__finance-content']}>
            <h2 className={`main-title`}>Финансы</h2>
            <ul className={`list-reset ${styles['general__finance-list']}`}>
              <li className={styles['general__finance-item']}>
                <img src="general/general-finance-1.png" alt="" />
                Наличные
                <span>3.534.000 ₽</span>
              </li>
              <li className={styles['general__finance-item']}>
                <img src="general/general-finance-2.png" alt="" />
                Банк
                <span>3.534.000 ₽</span>
              </li>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--column']}`}>
                <img src="general/general-finance-3.png" alt="" />
                Всего
                <span>33.534.000 ₽</span>
              </li>
            </ul>
          </div>
          <div className={styles['general__finance-etc']}>
            <h2 className={styles['general__finance-etc-title']}>Дополнительная информация</h2>
            <ul className={`list-reset ${styles['general__finance-list']}`}>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--grey']}`}>
                <img src="general/general-finance-4.png" alt="" />
                Семья
                <span>1</span>
              </li>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--grey']}`}>
                <img src="general/general-finance-5.png" alt="" />
                Телефон
                <span>5300731</span>
                <button className={`btn-reset ${styles['general__finance-item-btn']}`}>
                  <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36.8513" height="40" rx="8" fill="white" fill-opacity="0.1" />
                    <path d="M14.5879 15.5251L19.3452 20L14.5879 24.4749L16.2092 26L22.5879 20L16.2092 14L14.5879 15.5251Z" fill="white" />
                  </svg>
                </button>
              </li>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--grey']} ${styles['general__finance-item--smaller']}`}>
                <img src="general/general-finance-6.png" alt="" />
                Фракция
                <span>Городская поликлиника</span>
              </li>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--grey']}`}>
                <img src="general/general-finance-7.png" alt="" />
                Бизнесы
                <span>2</span>
                <button className={`btn-reset ${styles['general__finance-item-btn']}`}>
                  <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36.8513" height="40" rx="8" fill="white" fill-opacity="0.1" />
                    <path d="M14.5879 15.5251L19.3452 20L14.5879 24.4749L16.2092 26L22.5879 20L16.2092 14L14.5879 15.5251Z" fill="white" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles['general__accounts']}>
          <h2 className={`main-title ${styles['general__title']}`}>Привязанные аккаунты</h2>

        </div>
      </div>
    </section>
  )
}
