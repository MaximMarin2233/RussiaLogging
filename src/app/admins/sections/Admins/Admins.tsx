'use client'

import { useEffect, useState } from 'react'

import styles from './Admins.module.scss'
import logsStyles from '@/app/logs/sections/Logs/Logs.module.scss'

// import CustomSelect from '@/components/CustomSelect/CustomSelect'

type Admin = {
  char_id: number | null
  char_act_id: number | null
  char_name: string | null
  is_online: number | null
  admin_level: string
  admin_ans: number
  admin_kicks: number
}

export default function Admins() {
  // const serverOptions = [
  //   { value: '1', label: 'Все серверы' },
  //   { value: '2', label: 'Опция 2' },
  //   { value: '3', label: 'Опция 3' },
  // ]

  // const statusOptions = [
  //   { value: '1', label: 'Все статусы' },
  //   { value: '2', label: 'Опция 2' },
  //   { value: '3', label: 'Опция 3' },
  // ]


  const [admins, setAdmins] = useState<Admin[]>([])
  const [page, setPage] = useState(1)
  const perPage = 10

  useEffect(() => {
    fetch('/api/admins')
      .then(res => res.json())
      .then(data => {
        console.log('ADMINS:', data)
        setAdmins(data.admins || [])
      })
      .catch(err => {
        console.error('ADMINS ERROR:', err)
      })
  }, [])

  const pages = Math.ceil(admins.length / perPage)
  const paginatedAdmins = admins.slice((page - 1) * perPage, page * perPage)
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
          {/* <div className={styles['admins__filters']}>
            <div className={styles['admins__filters-title']}>
              Фильтры
            </div>
            <div className={styles['admins__filters-selects']}>
              <CustomSelect options={serverOptions} className={styles['admins__filters-select']} />
              <CustomSelect options={statusOptions} className={styles['admins__filters-select']} />
            </div>
          </div> */}
          <div className={styles['admins__table-wrapper']}>
            <div className={`${styles['admins__table']} ${styles['admins__table--width']}`}>
              <div className={styles['admins__table-header']}>
                <div className={styles['admins__table-header-column']}>Ник</div>
                <div className={styles['admins__table-header-column']}>Роль</div>
                <div className={styles['admins__table-header-column']}>Репорты</div>
                <div className={styles['admins__table-header-column']}>Кики</div>
                <div className={styles['admins__table-header-column']}>Онлайн</div>
              </div>

              {paginatedAdmins.map((admin, i) => (
                <div key={i} className={styles['admins__table-row']}>
                  <div className={styles['admins__table-column']}>{admin.char_name || '—'}</div>
                  <div className={styles['admins__table-column']}>{admin.admin_level}</div>
                  <div className={styles['admins__table-column']}>{admin.admin_ans}</div>
                  <div className={styles['admins__table-column']}>{admin.admin_kicks}</div>
                  <div className={styles['admins__table-column']}>
                    {admin.is_online ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                        <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                        <circle cx="12" cy="12" r="5" fill="#80FF46" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" fill="#FF4E4E" fillOpacity="0.2" />
                        <circle cx="12" cy="12" r="5" fill="#FF4E4E" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {pages > 1 && (
            <div className={logsStyles['logs__filters-pagination']}>
              <button
                disabled={page === 1}
                className={`btn-reset ${logsStyles['logs__filters-pagination-btn']} ${logsStyles['logs__filters-pagination-btn--nav']} ${page === 1 ? logsStyles['logs__filters-pagination-btn--inactive'] : ''}`}
                onClick={() => setPage(p => p - 1)}
              >
                Предыдущая
              </button>

              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`btn-reset ${logsStyles['logs__filters-pagination-btn']} ${page === i + 1 ? logsStyles['logs__filters-pagination-btn--inactive'] : ''}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === pages}
                className={`btn-reset ${logsStyles['logs__filters-pagination-btn']} ${logsStyles['logs__filters-pagination-btn--nav']} ${page === pages ? logsStyles['logs__filters-pagination-btn--inactive'] : ''}`}
                onClick={() => setPage(p => p + 1)}
              >
                Следующая
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
