import styles from './Admins.module.scss'

import CustomSelect from '@/components/CustomSelect/CustomSelect'

export default function Admins() {
  const serverOptions = [
    { value: '1', label: 'Все серверы' },
    { value: '2', label: 'Опция 2' },
    { value: '3', label: 'Опция 3' },
  ]

  const statusOptions = [
    { value: '1', label: 'Все статусы' },
    { value: '2', label: 'Опция 2' },
    { value: '3', label: 'Опция 3' },
  ]

  return (
    <section className={styles['admins']}>
      <div className="container">
        <div className={styles['admins__content']}>
          <div className={styles['admins__title-wrapper']}>
            <div className={styles['admins__title']}>
              Администрация
              <span>Управление администрацией и мониторинг активности</span>
            </div>
            <button className={`btn-reset ${styles['admins__title-btn']}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
              </svg>
              Добавить администратора
            </button>
          </div>
          <div className={styles['admins__filters']}>
            <div className={styles['admins__filters-title']}>
              Фильтры
            </div>
            <div className={styles['admins__filters-selects']}>
              <CustomSelect options={serverOptions} className={styles['admins__filters-select']} />
              <CustomSelect options={statusOptions} className={styles['admins__filters-select']} />
            </div>
          </div>
          <div className={styles['admins__table']}>
            <div className={styles['admins__table-header']}>
              <div className={styles['admins__table-header-column']}>
                Ник
              </div>
              <div className={styles['admins__table-header-column']}>
                Сервер
              </div>
              <div className={styles['admins__table-header-column']}>
                Роль
              </div>
              <div className={styles['admins__table-header-column']}>
                Репорты
              </div>
              <div className={styles['admins__table-header-column']}>
                Кики
              </div>
              <div className={styles['admins__table-header-column']}>
                Онлайн
              </div>
              <div className={styles['admins__table-header-column']}>
                Статус
              </div>
            </div>
            <div className={styles['admins__table-row']}>
              <div className={styles['admins__table-column']}>
                Denny Walker
              </div>
              <div className={styles['admins__table-column']}>
                <div className={styles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={styles['admins__table-column']}>
                Гл.админ
              </div>
              <div className={styles['admins__table-column']}>
                1.483
              </div>
              <div className={styles['admins__table-column']}>
                4ч 23м
              </div>
              <div className={styles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={styles['admins__table-column']}>
                <button className={`btn-reset ${styles['admins__table-column-btn']}`}>
                  Подробнее
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['admins__table-row']}>
              <div className={styles['admins__table-column']}>
                Denny Walker
              </div>
              <div className={styles['admins__table-column']}>
                <div className={styles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={styles['admins__table-column']}>
                Гл.админ
              </div>
              <div className={styles['admins__table-column']}>
                1.483
              </div>
              <div className={styles['admins__table-column']}>
                4ч 23м
              </div>
              <div className={styles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={styles['admins__table-column']}>
                <button className={`btn-reset ${styles['admins__table-column-btn']}`}>
                  Подробнее
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['admins__table-row']}>
              <div className={styles['admins__table-column']}>
                Denny Walker
              </div>
              <div className={styles['admins__table-column']}>
                <div className={styles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={styles['admins__table-column']}>
                Гл.админ
              </div>
              <div className={styles['admins__table-column']}>
                1.483
              </div>
              <div className={styles['admins__table-column']}>
                4ч 23м
              </div>
              <div className={styles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={styles['admins__table-column']}>
                <button className={`btn-reset ${styles['admins__table-column-btn']}`}>
                  Подробнее
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['admins__table-row']}>
              <div className={styles['admins__table-column']}>
                Denny Walker
              </div>
              <div className={styles['admins__table-column']}>
                <div className={styles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={styles['admins__table-column']}>
                Гл.админ
              </div>
              <div className={styles['admins__table-column']}>
                1.483
              </div>
              <div className={styles['admins__table-column']}>
                4ч 23м
              </div>
              <div className={styles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={styles['admins__table-column']}>
                <button className={`btn-reset ${styles['admins__table-column-btn']}`}>
                  Подробнее
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['admins__table-row']}>
              <div className={styles['admins__table-column']}>
                Denny Walker
              </div>
              <div className={styles['admins__table-column']}>
                <div className={styles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={styles['admins__table-column']}>
                Гл.админ
              </div>
              <div className={styles['admins__table-column']}>
                1.483
              </div>
              <div className={styles['admins__table-column']}>
                4ч 23м
              </div>
              <div className={styles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={styles['admins__table-column']}>
                <button className={`btn-reset ${styles['admins__table-column-btn']}`}>
                  Подробнее
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
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
