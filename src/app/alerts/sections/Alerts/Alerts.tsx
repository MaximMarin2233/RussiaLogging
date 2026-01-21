import styles from './Alerts.module.scss'
import adminsStyles from '@/app/admins/sections/Admins/Admins.module.scss'
import helpersStyles from '@/app/helpers/sections/Helpers/Helpers.module.scss'

export default function Alerts() {
  return (
    <section className={styles['alerts']}>
      <div className="container">
        <div className={styles['alerts__content']}>
          <div className={adminsStyles['admins__title-wrapper']}>
            <div className={adminsStyles['admins__title']}>
              Правила алертов и аномалий
              <span>Настройте автоматические уведомления о подозрительной активности</span>
            </div>
            <button className={`btn-reset ${adminsStyles['admins__title-btn']} ${styles['alerts__title-btn']}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
              </svg>
              Создать правило
            </button>
          </div>
          <div className={helpersStyles['helpers__blocks']}>
            <div className={helpersStyles['helpers__block']}>
              <img src="alerts/alerts-card-1.png" alt="" />
              Всего правил
              <span>4</span>
            </div>
            <div className={helpersStyles['helpers__block']}>
              <img src="alerts/alerts-card-2.png" alt="" />
              Активные
              <span>2.156</span>
            </div>
            <div className={helpersStyles['helpers__block']}>
              <img src="alerts/alerts-card-3.png" alt="" />
              Срабатываний сегодня
              <span>245</span>
            </div>
            <div className={helpersStyles['helpers__block']}>
              <img src="alerts/alerts-card-4.png" alt="" />
              Требуют внимания
              <span>1.543</span>
            </div>
          </div>
          <div className={styles['alerts__cards']}>
            <div className={styles['alerts__card']}>
              <div className={styles['alerts__card-text']}>
                <div className={styles['alerts__card-title']}>
                  Подозрительное получение денег
                  <span>Высокий</span>
                </div>
                <div className={styles['alerts__card-descr']}>
                  Если игрок получил {'>'} 1.000.000р за период 1 час
                </div>
                <div className={styles['alerts__card-social']}>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                </div>
                <div className={styles['alerts__card-subtext']}>
                  Срабатываний: 12 Последнее: 2025-12.12 14:35:00
                </div>
              </div>
              <div className={styles['alerts__card-btns']}>
                <button className={`btn-reset ${styles['alerts__card-btn']}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                    <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                  </svg>
                </button>
                <button className={`btn-reset ${styles['alerts__card-btn']}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7123 6L12 12.5413L5.28766 6L3 8.22936L12 17L21 8.22936L18.7123 6Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['alerts__card']}>
              <div className={styles['alerts__card-text']}>
                <div className={styles['alerts__card-title']}>
                  Подозрительное получение денег
                  <span>Высокий</span>
                </div>
                <div className={styles['alerts__card-descr']}>
                  Если игрок получил {'>'} 1.000.000р за период 1 час
                </div>
                <div className={styles['alerts__card-social']}>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                </div>
                <div className={styles['alerts__card-subtext']}>
                  Срабатываний: 12 Последнее: 2025-12.12 14:35:00
                </div>
              </div>
              <div className={styles['alerts__card-btns']}>
                <button className={`btn-reset ${styles['alerts__card-btn']}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                    <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                  </svg>
                </button>
                <button className={`btn-reset ${styles['alerts__card-btn']}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7123 6L12 12.5413L5.28766 6L3 8.22936L12 17L21 8.22936L18.7123 6Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['alerts__card']}>
              <div className={styles['alerts__card-text']}>
                <div className={styles['alerts__card-title']}>
                  Подозрительное получение денег
                  <span>Высокий</span>
                </div>
                <div className={styles['alerts__card-descr']}>
                  Если игрок получил {'>'} 1.000.000р за период 1 час
                </div>
                <div className={styles['alerts__card-social']}>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                  <div className={styles['alerts__card-social-block']}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="22" height="22" rx="8" fill="#2AD200" fillOpacity="0.1" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.4707 8.6038C17.1955 8.27231 16.7038 8.22661 16.3723 8.50172L8.77881 14.541L9.77508 15.7415L10.9755 14.7452L17.3686 9.70215C17.7001 9.42703 17.7458 8.93528 17.4707 8.6038Z" fill="#81FF46" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.9755 14.7452L9.77508 15.7415L8.77881 14.541L6.49819 11.793C6.22307 11.4616 6.26877 10.9698 6.60026 10.6947C6.93175 10.4196 7.4235 10.4653 7.69861 10.7968L10.9755 14.7452Z" fill="#81FF46" />
                    </svg>
                    Уведомления
                  </div>
                </div>
                <div className={styles['alerts__card-subtext']}>
                  Срабатываний: 12 Последнее: 2025-12.12 14:35:00
                </div>
              </div>
              <div className={styles['alerts__card-btns']}>
                <button className={`btn-reset ${styles['alerts__card-btn']}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                    <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                  </svg>
                </button>
                <button className={`btn-reset ${styles['alerts__card-btn']}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7123 6L12 12.5413L5.28766 6L3 8.22936L12 17L21 8.22936L18.7123 6Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
