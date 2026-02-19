'use client'

import styles from './Logs.module.scss'
import { useEffect, useMemo, useState } from 'react'

const PER_PAGE = 10

type Log = {
  id: number
  time: string
  server?: number
  type: string
  player: string
  playerId: number
  action: string
  amount?: number
  balance?: number
}

export default function Logs() {
  const [name, setName] = useState('')
  const [logs, setLogs] = useState<Log[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadLogs = async () => {
    if (!name) return
    setLoading(true)

    try {
      const res = await fetch(`/api/logs?name=${encodeURIComponent(name)}`)
      const data = await res.json()

      const mappedLogs: Log[] = (data.logs || []).map((log: any) => ({
        id: log.id,
        time: new Date(log.date).toLocaleString('ru-RU', { hour12: false }),
        server: log.server || null,
        type: log.category_name || 'unknown',
        player: log.player_name || name,
        playerId: log.char_id,
        action: log.reason_name || log.action || '',
        amount: log.cash_value ?? log.bank_value ?? log.donate_value ?? 0,
        balance: log.cash_after ?? log.bank_after ?? log.donate_after ?? 0
      }))

      setLogs(mappedLogs)
      setPage(1)
    } catch (err) {
      console.error(err)
      setLogs([])
    } finally {
      setLoading(false)
    }
  }

  const pages = Math.ceil(logs.length / PER_PAGE)

  const paginatedLogs = useMemo(() => {
    const start = (page - 1) * PER_PAGE
    return logs.slice(start, start + PER_PAGE)
  }, [logs, page])

  return (
    <section className={styles.logs}>
      <div className="container">

        <div className={styles['logs__filters-wrapper']}>
          <div className={styles['logs__filters-form']}>
            <div className={styles['logs__filters-form-blocks']}>
              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>
                  Поиск по нику
                </div>
                <input className={styles['logs__filters-form-input']} placeholder='Введите ник игрока...'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={styles['logs__filters-form-btns']}>
              <button className={`btn-reset ${styles['logs__filters-form-btn']}`} onClick={loadLogs}>
                Найти
              </button>
            </div>
          </div>
        </div>

        <div className={styles['logs__filters-table-wrapper']}>
          <div className={`${styles['logs__filters-table']} ${styles['logs__filters-table--logs']}`}>
            <div className={styles['logs__filters-table-header']}>
              <div>Время</div>
              <div className={styles['logs__column-center']}>Сервер</div>
              <div>Тип</div>
              <div>Игрок</div>
              <div>Действие</div>
              <div className={styles['logs__column-center']}>Сумма</div>
              <div className={styles['logs__column-end']}>Баланс</div>
            </div>

            {loading && <div>Загрузка...</div>}

            {!loading && paginatedLogs.map(log => (
              <div key={log.id} className={styles['logs__filters-table-row']}>

                <div>{log.time}</div>

                <div
                  className={`
                  ${styles['logs__column-center']}
                  ${styles['logs__filters-table-server']}
                  ${log.server === 1 ? styles['logs__filters-table-server--orange'] : ''}
                  ${log.server === 2 ? styles['logs__filters-table-server--blue'] : ''}
                  ${log.server === 3 ? styles['logs__filters-table-server--green'] : ''}
                  ${log.server === 4 ? styles['logs__filters-table-server--red'] : ''}
                  ${log.server === 5 ? styles['logs__filters-table-server--sky'] : ''}
                `}
                >
                  {log.server ?? '-'}
                </div>

                <div>{log.type}</div>

                <div>
                  {log.player} <span>ID: {log.playerId}</span>
                </div>

                <div>{log.action}</div>

                <div className={styles['logs__column-center']}>
                  {log.amount ? log.amount.toLocaleString('ru-RU') + ' ₽' : '-'}
                </div>

                <div className={styles['logs__column-end']}>
                  {log.balance ? log.balance.toLocaleString('ru-RU') + ' ₽' : '-'}
                </div>

              </div>
            ))}
          </div>
        </div>

        {pages > 1 && (
          <div className={styles['logs__filters-pagination']}>
            <button
              disabled={page === 1}
              className={`btn-reset ${styles['logs__filters-pagination-btn']} ${styles['logs__filters-pagination-btn--nav']} ${page === 1 ? styles['logs__filters-pagination-btn--inactive'] : ''}`}
              onClick={() => setPage(p => p - 1)}>
              Предыдущая
            </button>

            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`btn-reset ${styles['logs__filters-pagination-btn']} ${page === i + 1 ? styles['logs__filters-pagination-btn--inactive'] : ''}`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === pages}
              className={`btn-reset ${styles['logs__filters-pagination-btn']} ${styles['logs__filters-pagination-btn--nav']} ${page === pages ? styles['logs__filters-pagination-btn--inactive'] : ''}`}
              onClick={() => setPage(p => p + 1)}>
              Следующая
            </button>
          </div>
        )}



      </div>
    </section>
  )
}
