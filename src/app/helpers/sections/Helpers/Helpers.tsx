import styles from './Helpers.module.scss'
import adminsStyles from '@/app/admins/sections/Admins/Admins.module.scss'

import CustomSelect from '@/components/CustomSelect/CustomSelect'

export default function Helpers() {
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
    <section className={styles['helpers']}>
      <div className="container">
        <div className={styles['helpers__content']}>
          <div className={adminsStyles['admins__title-wrapper']}>
            <div className={adminsStyles['admins__title']}>
              Хелперы серверов
              <span>Всего хелперов: 12</span>
            </div>
            <button className={`btn-reset ${adminsStyles['admins__title-btn']}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
              </svg>
              Добавить хелпера
            </button>
          </div>

          <div className={styles['helpers__blocks']}>
            <div className={styles['helpers__block']}>
              <img src="helpers/helpers-block-1.png" alt="" />
              Онлайн сейчас
              <span>4</span>
            </div>
            <div className={styles['helpers__block']}>
              <img src="helpers/helpers-block-2.png" alt="" />
              Всего действий
              <span>2.156</span>
            </div>
            <div className={styles['helpers__block']}>
              <img src="helpers/helpers-block-3.png" alt="" />
              Кик
              <span>245</span>
            </div>
            <div className={styles['helpers__block']}>
              <img src="helpers/helpers-block-4.png" alt="" />
              Ответы в /q
              <span>1.543</span>
            </div>
          </div>

          <div className={`${adminsStyles['admins__filters']} ${styles['helpers__filters']}`}>
            <div className={`${adminsStyles['admins__filters-title']} ${styles['helpers__filters-title']} ${styles['helpers__filters-title--center']}`}>
              Фильтры
              <input className={styles['helpers__filters-input']} type="text" placeholder='Поиск по никнейму' />
            </div>
            <div className={adminsStyles['admins__filters-selects']}>
              <CustomSelect options={serverOptions} className={adminsStyles['admins__filters-select']} />
              <CustomSelect options={statusOptions} className={adminsStyles['admins__filters-select']} />
            </div>
          </div>

          <div className={adminsStyles['admins__table']}>
            <div className={`${adminsStyles['admins__table-header']} ${styles['helpers__table-header']}`}>
              <div className={adminsStyles['admins__table-header-column']}>
                Ник
              </div>
              <div className={adminsStyles['admins__table-header-column']}>
                Сервер
              </div>
              <div className={adminsStyles['admins__table-header-column']}>
                Уровень
              </div>
              <div className={adminsStyles['admins__table-header-column']}>
                Ответы /q
              </div>
              <div className={adminsStyles['admins__table-header-column']}>
                Статус
              </div>
              <div className={adminsStyles['admins__table-header-column']}>
                Действия
              </div>
            </div>
            <div className={`${adminsStyles['admins__table-row']} ${styles['helpers__table-row']}`}>
              <div className={`${adminsStyles['admins__table-column']} ${styles['helpers__table-column']}`}>
                Denny Walker
                <span>ID:14552</span>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={adminsStyles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={styles['helpers__table-column-lvl']}>
                  1 lvl
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                1.483
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <button className={`btn-reset ${adminsStyles['admins__table-column-btn']}`}>
                  <span>Подробнее</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={`${adminsStyles['admins__table-row']} ${styles['helpers__table-row']}`}>
              <div className={`${adminsStyles['admins__table-column']} ${styles['helpers__table-column']}`}>
                Denny Walker
                <span>ID:14552</span>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={adminsStyles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={styles['helpers__table-column-lvl']}>
                  1 lvl
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                1.483
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <button className={`btn-reset ${adminsStyles['admins__table-column-btn']}`}>
                  <span>Подробнее</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={`${adminsStyles['admins__table-row']} ${styles['helpers__table-row']}`}>
              <div className={`${adminsStyles['admins__table-column']} ${styles['helpers__table-column']}`}>
                Denny Walker
                <span>ID:14552</span>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={adminsStyles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={styles['helpers__table-column-lvl']}>
                  1 lvl
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                1.483
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <button className={`btn-reset ${adminsStyles['admins__table-column-btn']}`}>
                  <span>Подробнее</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={`${adminsStyles['admins__table-row']} ${styles['helpers__table-row']}`}>
              <div className={`${adminsStyles['admins__table-column']} ${styles['helpers__table-column']}`}>
                Denny Walker
                <span>ID:14552</span>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={adminsStyles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={styles['helpers__table-column-lvl']}>
                  1 lvl
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                1.483
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <button className={`btn-reset ${adminsStyles['admins__table-column-btn']}`}>
                  <span>Подробнее</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33464 7.52462L12.6955 11.9995L8.33463 16.4744L9.82088 17.9995L15.668 11.9995L9.82088 5.99951L8.33464 7.52462Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={`${adminsStyles['admins__table-row']} ${styles['helpers__table-row']}`}>
              <div className={`${adminsStyles['admins__table-column']} ${styles['helpers__table-column']}`}>
                Denny Walker
                <span>ID:14552</span>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={adminsStyles['admins__table-column-label']}>
                  #1
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <div className={styles['helpers__table-column-lvl']}>
                  1 lvl
                </div>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                1.483
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="12" cy="12" r="5" fill="#80FF46" />
                </svg>
              </div>
              <div className={adminsStyles['admins__table-column']}>
                <button className={`btn-reset ${adminsStyles['admins__table-column-btn']}`}>
                  <span>Подробнее</span>

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
