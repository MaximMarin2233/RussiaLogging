'use client'

import styles from './Logs.module.scss'
import { useMemo, useEffect, useState } from 'react'
import { useServer } from '@/context/ServerContext'

type LogItem = {
  id: number
  time: string
  server: number
  type: string
  player: string
  playerId: number
  action: string
  amount?: number
  balance?: number
}

const MOCK_LOGS: LogItem[] = Array.from({ length: 47 }).map((_, i) => ({
  id: i,
  time: `2025-12-${String((i % 28) + 1).padStart(2, '0')} 14:34:22`,
  server: (i % 5) + 1,
  type: ['money', 'admin', 'punish', 'chat', 'org', 'family'][i % 6],
  player: ['Denny Walker', 'Ivan Petrov', 'Alex Snow'][i % 3],
  playerId: 300000 + i,
  action: 'Передал деньги игроку Ivan_Petrov через банк',
  amount: i % 2 === 0 ? -1250000 : 250000,
  balance: 25000000 - i * 10000
}))

const PAGE_SIZE = 10

export default function Logs() {
  const [servers, setServers] = useState<number[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [nickname, setNickname] = useState('')
  const [amountFrom, setAmountFrom] = useState('')
  const [amountTo, setAmountTo] = useState('')
  const [page, setPage] = useState(1)

  const toggleValue = <T,>(value: T, list: T[], setter: (v: T[]) => void) => {
    setter(list.includes(value) ? list.filter(v => v !== value) : [...list, value])
  }

  const filteredLogs = useMemo(() => {
    return MOCK_LOGS.filter(log => {
      if (servers.length && !servers.includes(log.server)) return false
      if (types.length && !types.includes(log.type)) return false
      if (nickname && !log.player.toLowerCase().includes(nickname.toLowerCase())) return false

      const from = Number(amountFrom) || null
      const to = Number(amountTo) || null

      if (from !== null && (log.amount ?? 0) < from) return false
      if (to !== null && (log.amount ?? 0) > to) return false

      return true
    })
  }, [servers, types, nickname, amountFrom, amountTo])

  const pages = Math.ceil(filteredLogs.length / PAGE_SIZE)

  const paginatedLogs = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filteredLogs.slice(start, start + PAGE_SIZE)
  }, [filteredLogs, page])

  const resetFilters = () => {
    setServers([])
    setTypes([])
    setNickname('')
    setAmountFrom('')
    setAmountTo('')
    setPage(1)
  }

  const { server } = useServer()
  const [logs, setLogs] = useState<any>(null)

  useEffect(() => {
    fetch(`/api/logs?server=${server}`)
      .then(res => res.json())
      .then(data => {
        console.log('LOGS DATA:', data)
        setLogs(data)
      })
      .catch(err => console.error(err))
  }, [server])


  return (
    <section className={styles.logs}>
      <div className="container">

        {/* FILTERS */}

        <div className={styles['logs__filters-wrapper']}>

          <div className={styles['logs__filters-nav']}>

            {/* SERVERS */}

            <div className={styles['logs__filters-nav-block']}>
              <div className={styles['logs__filters-nav-title']}>Серверы</div>

              <div className={styles['logs__filters-nav-content']}>
                {[1, 2, 3, 4, 5].map(s => (
                  <label key={s} className={styles['logs__filters-nav-label']}>
                    <input
                      type="checkbox"
                      checked={servers.includes(s)}
                      onChange={() => toggleValue(s, servers, setServers)}
                    />
                    <div className={styles['logs__filters-nav-label-square']}><span /></div>
                    <div className={styles['logs__filters-nav-label-text']}>Сервер №{s}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* TYPES */}

            <div className={styles['logs__filters-nav-block']}>
              <div className={styles['logs__filters-nav-title']}>Тип операции</div>

              <div className={styles['logs__filters-nav-content']}>

                {[
                  ['money', 'Денежные операции'],
                  ['admin', 'Админ-действия'],
                  ['punish', 'Наказания'],
                  ['chat', 'Чаты'],
                  ['org', 'Организации'],
                  ['family', 'Семьи']
                ].map(([key, label]) => (
                  <label key={key} className={styles['logs__filters-nav-label']}>
                    <input
                      type="checkbox"
                      checked={types.includes(key)}
                      onChange={() => toggleValue(key, types, setTypes)}
                    />
                    <div className={styles['logs__filters-nav-label-square']}><span /></div>
                    <div className={styles['logs__filters-nav-label-text']}>{label}</div>
                  </label>
                ))}

              </div>
            </div>

          </div>

          {/* FORM */}

          <div className={styles['logs__filters-form']}>

            <div className={styles['logs__filters-form-blocks']}>

              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>Поиск по нику</div>
                <input
                  className={styles['logs__filters-form-input']}
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                  placeholder="Введите ник игрока..."
                />
              </div>

              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>Сумма от</div>
                <input
                  className={styles['logs__filters-form-input']}
                  value={amountFrom}
                  onChange={e => setAmountFrom(e.target.value)}
                />
              </div>

              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>Сумма до</div>
                <input
                  className={styles['logs__filters-form-input']}
                  value={amountTo}
                  onChange={e => setAmountTo(e.target.value)}
                />
              </div>

            </div>

            <div className={styles['logs__filters-form-btns']}>
              <button className={`btn-reset ${styles['logs__filters-form-btn']}`} onClick={() => setPage(1)}>
                Применить фильтры
              </button>

              <button className={`btn-reset ${styles['logs__filters-form-btn']}`} onClick={resetFilters}>
                Сбросить
              </button>
            </div>

          </div>
        </div>

        {/* TABLE */}

        <div className={styles['logs__filters-table']}>

          <div className={styles['logs__filters-table-header']}>
            <div className={styles['logs__filters-table-header-column']}>Время</div>
            <div className={`${styles['logs__filters-table-header-column']} ${styles['logs__column-center']}`}>Сервер</div>
            <div className={styles['logs__filters-table-header-column']}>Тип</div>
            <div className={styles['logs__filters-table-header-column']}>Игрок</div>
            <div className={styles['logs__filters-table-header-column']}>Действие</div>
            <div className={`${styles['logs__filters-table-header-column']} ${styles['logs__column-center']}`}>Сумма</div>
            <div className={`${styles['logs__filters-table-header-column']} ${styles['logs__column-end']}`}>Баланс</div>
          </div>

          {paginatedLogs.map(log => (
            <div key={log.id} className={styles['logs__filters-table-row']}>

              <div className={styles['logs__filters-table-column']}>{log.time}</div>

              <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
                Сервер {log.server}
              </div>

              <div className={styles['logs__filters-table-column']}>
                {log.type}
              </div>

              <div className={styles['logs__filters-table-column']}>
                <div className={styles['logs__filters-table-column-inf']}>
                  {log.player}
                  <span>ID: {log.playerId}</span>
                </div>
              </div>

              <div className={styles['logs__filters-table-column']}>{log.action}</div>

              <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
                {log.amount?.toLocaleString('ru-RU')} ₽
              </div>

              <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-end']}`}>
                {log.balance?.toLocaleString('ru-RU')} ₽
              </div>

            </div>
          ))}

        </div>

        {/* PAGINATION */}

        <div className={styles['logs__filters-pagination']}>

          <button
            className={`btn-reset ${styles['logs__filters-pagination-btn']} ${styles['logs__filters-pagination-btn--nav']}`}
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            Предыдущая
          </button>

          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`btn-reset ${styles['logs__filters-pagination-btn']} ${page === i + 1 ? styles['logs__filters-pagination-btn--active'] : ''}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`btn-reset ${styles['logs__filters-pagination-btn']} ${styles['logs__filters-pagination-btn--nav']}`}
            disabled={page === pages}
            onClick={() => setPage(p => p + 1)}
          >
            Следующая
          </button>

        </div>

      </div>
    </section>
  )
}
