import styles from './DonationAnalytics.module.scss'
import cardsInfStyles from '@/components/CardsInf/CardsInf.module.scss'

type Stats = {
  rub: number
  usd: number
  rcGiven: number
  rcSpent: number
  rcBalance: number
}

export default async function MainInf() {
  const res = await fetch('http://localhost:3000/api/donation-analytics', {
    cache: 'no-store'
  })

  const stats: Stats = await res.json()

  const formatNumber = (num: number | string) => {
    const n = typeof num === 'string' ? parseFloat(num) : num
    return Math.floor(n)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <section className={cardsInfStyles['cards-inf']}>
      <div className="container">
        <h2 className={`main-title ${cardsInfStyles['cards-inf__title']}`}>Аналитика доната</h2>

        <ul className={`${cardsInfStyles['cards-inf__list']} ${cardsInfStyles['cards-inf__list--margin']} list-reset`}>
          <li className={`${cardsInfStyles['cards-inf__item']} ${cardsInfStyles['cards-inf__item--column']} ${cardsInfStyles['cards-inf__item--purple']}`}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="donation-analytics/donation-analytics-1.png" alt="" aria-hidden={true} />
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>Всего выполнено</div>
            <h3 className={`${cardsInfStyles['cards-inf__item-subtitle']}`}>
              {formatNumber(stats.rub)} ₽
            </h3>
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>За текущий месяц</div>
          </li>
          <li className={`${cardsInfStyles['cards-inf__item']} ${cardsInfStyles['cards-inf__item--column']} ${cardsInfStyles['cards-inf__item--purple']}`}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="donation-analytics/donation-analytics-2.png" alt="" aria-hidden={true} />
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>Всего RC выдано</div>
            <h3 className={`${cardsInfStyles['cards-inf__item-subtitle']}`}>{formatNumber(stats.rcGiven)} RC</h3>
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>С учетом акция (+30)</div>
          </li>
          <li className={`${cardsInfStyles['cards-inf__item']} ${cardsInfStyles['cards-inf__item--column']} ${cardsInfStyles['cards-inf__item--purple']}`}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="donation-analytics/donation-analytics-3.png" alt="" aria-hidden={true} />
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>RC потрачено</div>
            <h3 className={`${cardsInfStyles['cards-inf__item-subtitle']}`}>{formatNumber(stats.rcSpent)} RC</h3>
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>На покупки в игре</div>
          </li>
          <li className={`${cardsInfStyles['cards-inf__item']} ${cardsInfStyles['cards-inf__item--column']} ${cardsInfStyles['cards-inf__item--grey']}`}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="donation-analytics/donation-analytics-4.png" alt="" aria-hidden={true} />
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>Остаток RC</div>
            <h3 className={`${cardsInfStyles['cards-inf__item-subtitle']}`}>{formatNumber(stats.rcBalance)} RC</h3>
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>У всех игроков</div>
          </li>
        </ul>

        <div className={styles['donation-analytics__content']}>
          <div className={`${styles['donation-analytics__block']} ${styles['donation-analytics__block--1']}`}>
            <h3 className={styles['donation-analytics__block-title']}>Донат по серверам</h3>

            <div className={styles['donation-analytics__block-inner']}>
              <div className={styles['donation-analytics__block-val-wrapper']}>
                <div className={styles['donation-analytics__block-server']}>Сервер №2</div>
                <div className={styles['donation-analytics__block-val']}>2.450.000 ₽ </div>
              </div>
              <div className={styles['donation-analytics__block-percent']}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.6253 16.2175L34.9794 8.40234L27.0498 8.58096L29.4934 11.4189L21.2089 19.7025L16.16 13.0221L3.30833 26.6859C2.82404 27.2011 2.84923 28.0115 3.36431 28.496C3.8795 28.9803 4.68988 28.9551 5.17436 28.44L15.9467 16.987L20.9397 23.5945L31.1692 13.3651L33.6253 16.2175Z" fill="#42F43D" />
                </svg>
                12.5%
              </div>
            </div>

            <div className={styles['donation-analytics__block-progress-wrapper']}>
              <div className={styles['donation-analytics__block-progress-line']}></div>
              <div className={styles['donation-analytics__block-progress-inf']}>
                <div className={styles['donation-analytics__block-progress-val']}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5156 16.256C17.5156 17.083 16.8426 17.756 16.0156 17.756C15.1886 17.756 14.5156 17.083 14.5156 16.256C14.5156 15.429 15.1886 14.756 16.0156 14.756C16.8426 14.756 17.5156 15.429 17.5156 16.256ZM26.1226 11.327L25.9476 11.952C24.5336 17.027 22.0696 18.566 19.6876 20.055C17.6366 21.336 15.6996 22.546 14.2166 26.197L13.7036 27.46L5.45463 20.637L5.73063 19.957C7.45762 15.707 9.86763 14.201 11.9936 12.872C14.2406 11.468 16.1816 10.256 17.3876 5.928L17.8016 4.444L26.1226 11.327ZM19.5156 16.256C19.5156 14.326 17.9456 12.756 16.0156 12.756C14.0856 12.756 12.5156 14.326 12.5156 16.256C12.5156 18.186 14.0856 19.756 16.0156 19.756C17.9456 19.756 19.5156 18.186 19.5156 16.256ZM5.37462 7.885C5.15562 8.205 5.01562 8.583 5.01562 9C5.01562 9.872 5.57963 10.607 6.35963 10.88C6.14263 11.2 6.01562 11.585 6.01562 12C6.01562 12.86 6.56463 13.589 7.32862 13.871C8.55262 12.666 9.81163 11.878 10.9346 11.176C12.3206 10.31 13.3986 9.631 14.2586 8.274C13.6726 7.203 13.3626 6.251 13.3126 6.089C12.9206 4.819 11.8226 4 10.5156 4H6.01562C4.91262 4 4.01562 4.897 4.01562 6C4.01562 6.878 4.58762 7.617 5.37462 7.885ZM25.9266 18.703C25.8026 18.665 25.4366 18.543 24.9546 18.342C23.5926 19.968 22.0816 20.918 20.7476 21.751C19.7286 22.388 18.8256 22.962 18.0156 23.808V23.999C18.0156 25.102 18.9126 25.999 20.0156 25.999C20.4296 25.999 20.8156 25.872 21.1356 25.655C21.4086 26.435 22.1436 26.999 23.0156 26.999C23.4326 26.999 23.8106 26.859 24.1306 26.64C24.3996 27.428 25.1386 27.999 26.0156 27.999C27.1186 27.999 28.0156 27.102 28.0156 25.999V21.499C28.0156 20.192 27.1966 19.094 25.9266 18.702V18.703Z" fill="url(#paint0_linear_355_2041)" />
                    <defs>
                      <linearGradient id="paint0_linear_355_2041" x1="16.3568" y1="-30.6806" x2="29.9559" y2="32.8751" gradientUnits="userSpaceOnUse">
                        <stop offset="0.44698" stopColor="#4FDD4A" />
                        <stop offset="1" stopColor="#2E932A" />
                      </linearGradient>
                    </defs>
                  </svg>
                  1.098.500
                </div>
                <div className={styles['donation-analytics__block-progress-total']}>Потрачено: 650,000</div>
              </div>
            </div>

            <div className={styles['donation-analytics__block-tabs']}>
              <button className={`btn-reset ${styles['donation-analytics__block-tab']}`}>Сервер №1</button>
              <button className={`btn-reset ${styles['donation-analytics__block-tab']} ${styles['donation-analytics__block-tab--active']}`}>Сервер №2</button>
              <button className={`btn-reset ${styles['donation-analytics__block-tab']}`}>Сервер №3</button>
              <button className={`btn-reset ${styles['donation-analytics__block-tab']}`}>Сервер №4</button>
            </div>
          </div>
          <div className={`${styles['donation-analytics__block']} ${styles['donation-analytics__block--2']}`}>
            <h3 className={styles['donation-analytics__block-title']}>Влияние акций</h3>

            <ul className={`list-reset ${styles['donation-analytics__block-list']}`}>
              <li className={`list-reset ${styles['donation-analytics__block-item']}`}>
                Базовый курс
                <span>2 ₽ = 3 RC</span>
              </li>
              <li className={`list-reset ${styles['donation-analytics__block-item']} ${styles['donation-analytics__block-item--active']}`}>
                Текущие акции
                <span>1 ₽ = 3.4 RC</span>
              </li>
              <li className={`list-reset ${styles['donation-analytics__block-item']}`}>
                Бонус выдано
                <span>+750.000 RC</span>
              </li>
              <li className={`list-reset ${styles['donation-analytics__block-item']}`}>
                Реальная стоимость
                <span>= 1.854.000 ₽</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}
