'use client'

import { useEffect, useState } from 'react'

import styles from './Helpers.module.scss'
import adminsStyles from '@/app/admins/sections/Admins/Admins.module.scss'
import logsStyles from '@/app/logs/sections/Logs/Logs.module.scss'

// import CustomSelect from '@/components/CustomSelect/CustomSelect'

export default function Helpers() {
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

  const [helpers, setHelpers] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const perPage = 10

  useEffect(() => {
    fetch('/api/helpers')
      .then(res => res.json())
      .then(data => {
        console.log('HELPERS:', data)
        setHelpers(data.helpers || [])
        setPages(Math.ceil((data.helpers?.length || 0) / perPage))
      })
      .catch(err => {
        console.error('HELPERS ERROR:', err)
      })
  }, [])

  const paginatedHelpers = helpers.slice((page - 1) * perPage, page * perPage)

  const onlineCount = helpers.filter(h => h.is_online).length
  const totalAnswers = helpers.reduce((sum, h) => sum + (h.helper_all_answer || 0), 0)
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
              <span>{onlineCount}</span>
            </div>
            <div className={styles['helpers__block']}>
              <img src="helpers/helpers-block-2.png" alt="" />
              Всего действий
              <span>{totalAnswers}</span>
            </div>
            <div className={styles['helpers__block']}>
              <img src="helpers/helpers-block-3.png" alt="" />
              Кик
              <span>—</span>
            </div>
            <div className={styles['helpers__block']}>
              <img src="helpers/helpers-block-4.png" alt="" />
              Ответы в /q
              <span>{totalAnswers}</span>
            </div>
          </div>

          <div className={adminsStyles['admins__table-wrapper']}>
            <div className={`${adminsStyles['admins__table']} ${adminsStyles['admins__table--width']}`}>
              <div className={`${adminsStyles['admins__table-header']} ${styles['helpers__table-header']}`}>
                <div className={adminsStyles['admins__table-header-column']}>Ник</div>
                <div className={adminsStyles['admins__table-header-column']}>Уровень</div>
                <div className={adminsStyles['admins__table-header-column']}>Ответы /q</div>
                <div className={adminsStyles['admins__table-header-column']}>Статус</div>
              </div>

              {paginatedHelpers.map((h, i) => (
                <div key={i} className={`${adminsStyles['admins__table-row']} ${styles['helpers__table-row']}`}>
                  <div className={`${adminsStyles['admins__table-column']} ${styles['helpers__table-column']}`}>
                    {h.char_name || '—'}
                    {h.char_id && <span>ID:{h.char_id}</span>}
                  </div>
                  <div className={adminsStyles['admins__table-column']}>
                    <div className={styles['helpers__table-column-lvl']}>
                      {h.helper_level || '-'} lvl
                    </div>
                  </div>
                  <div className={adminsStyles['admins__table-column']}>
                    {h.helper_all_answer || 0}
                  </div>
                  <div className={adminsStyles['admins__table-column']}>
                    {h.is_online ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                        <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                        <circle cx="12" cy="12" r="5" fill="#80FF46" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" rx="12" fill="#FF3E3E" fillOpacity="0.1" />
                        <circle cx="12" cy="12" r="9" fill="#FF3E3E" fillOpacity="0.1" />
                        <circle cx="12" cy="12" r="5" fill="#FF3E3E" />
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
