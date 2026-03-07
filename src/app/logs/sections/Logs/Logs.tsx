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
  category_id?: any
}

export default function Logs() {
  const [name, setName] = useState('')
  const [logs, setLogs] = useState<Log[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const [servers, setServers] = useState<number[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [amountFrom, setAmountFrom] = useState('')
  const [amountTo, setAmountTo] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<number[]>([])

  const loadLogs = async () => {
    if (!name) return
    setLoading(true)
    setSearched(true)

    try {
      const res = await fetch(`/api/logs?name=${encodeURIComponent(name)}`)
      const data = await res.json()

      console.log(data)

      const mappedLogs: Log[] = (data.logs || []).map((log: any) => ({
        id: log.id,
        time: new Date(log.date).toLocaleString('ru-RU', { hour12: false }),
        server: log.server || null,
        type: log.category_name || 'unknown',
        category_id: log.category_id ?? null,
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

  const filteredLogs = useMemo(() => {
    return logs.filter(log => {

      if (servers.length && !servers.includes(log.server ?? 0)) {
        return false
      }

      if (selectedCategories.length && !selectedCategories.includes(log.category_id)) {
        return false
      }

      if (types.length && !types.includes(log.type)) {
        return false
      }

      if (amountFrom && (log.amount ?? 0) < Number(amountFrom)) {
        return false
      }

      if (amountTo && (log.amount ?? 0) > Number(amountTo)) {
        return false
      }

      return true
    })
  }, [logs, servers, types, amountFrom, amountTo, selectedCategories])


  const pages = Math.ceil(filteredLogs.length / PER_PAGE)

  const paginatedLogs = useMemo(() => {
    const start = (page - 1) * PER_PAGE
    return filteredLogs.slice(start, start + PER_PAGE)
  }, [filteredLogs, page])

  const toggleServer = (server: number) => {
    setServers(prev =>
      prev.includes(server)
        ? prev.filter(s => s !== server)
        : [...prev, server]
    )
  }

  const toggleCategory = (id: number) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  return (
    <section className={styles.logs}>
      <div className="container">

        <div className={styles['logs__filters-wrapper']}>
          <div className={styles['logs__filters-nav']}>
            <div className={styles['logs__filters-nav-block']}>
              <div className={styles['logs__filters-nav-title']}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25 10.2036C25 7.99447 23.2091 6.20361 21 6.20361H10C7.79086 6.20361 6 7.99447 6 10.2036V21.2036C6 23.4128 7.79086 25.2036 10 25.2036H21C23.2091 25.2036 25 23.4128 25 21.2036V10.2036ZM10.5238 19.834C10.5238 19.1497 11.0786 18.5949 11.7629 18.5949H19.2371C19.9214 18.5949 20.4762 19.1497 20.4762 19.834C20.4762 20.5184 19.9214 21.0732 19.2371 21.0732H11.7629C11.0786 21.0732 10.5238 20.5184 10.5238 19.834ZM20.4762 15.7036C20.4762 15.0193 19.9214 14.4645 19.2371 14.4645H11.7629C11.0786 14.4645 10.5238 15.0193 10.5238 15.7036C10.5238 16.388 11.0786 16.9427 11.7629 16.9427H19.2371C19.9214 16.9427 20.4762 16.388 20.4762 15.7036ZM10.5238 11.5732C10.5238 10.8888 11.0786 10.334 11.7629 10.334H19.2371C19.9214 10.334 20.4762 10.8888 20.4762 11.5732C20.4762 12.2575 19.9214 12.8123 19.2371 12.8123H11.7629C11.0786 12.8123 10.5238 12.2575 10.5238 11.5732Z" fill="#0D0D0D" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M25 10.2036C25 7.99447 23.2091 6.20361 21 6.20361H10C7.79086 6.20361 6 7.99447 6 10.2036V21.2036C6 23.4128 7.79086 25.2036 10 25.2036H21C23.2091 25.2036 25 23.4128 25 21.2036V10.2036ZM10.5238 19.834C10.5238 19.1497 11.0786 18.5949 11.7629 18.5949H19.2371C19.9214 18.5949 20.4762 19.1497 20.4762 19.834C20.4762 20.5184 19.9214 21.0732 19.2371 21.0732H11.7629C11.0786 21.0732 10.5238 20.5184 10.5238 19.834ZM20.4762 15.7036C20.4762 15.0193 19.9214 14.4645 19.2371 14.4645H11.7629C11.0786 14.4645 10.5238 15.0193 10.5238 15.7036C10.5238 16.388 11.0786 16.9427 11.7629 16.9427H19.2371C19.9214 16.9427 20.4762 16.388 20.4762 15.7036ZM10.5238 11.5732C10.5238 10.8888 11.0786 10.334 11.7629 10.334H19.2371C19.9214 10.334 20.4762 10.8888 20.4762 11.5732C20.4762 12.2575 19.9214 12.8123 19.2371 12.8123H11.7629C11.0786 12.8123 10.5238 12.2575 10.5238 11.5732Z" fill="url(#paint0_linear_400_844)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M25 10.2036C25 7.99447 23.2091 6.20361 21 6.20361H10C7.79086 6.20361 6 7.99447 6 10.2036V21.2036C6 23.4128 7.79086 25.2036 10 25.2036H21C23.2091 25.2036 25 23.4128 25 21.2036V10.2036ZM10.5238 19.834C10.5238 19.1497 11.0786 18.5949 11.7629 18.5949H19.2371C19.9214 18.5949 20.4762 19.1497 20.4762 19.834C20.4762 20.5184 19.9214 21.0732 19.2371 21.0732H11.7629C11.0786 21.0732 10.5238 20.5184 10.5238 19.834ZM20.4762 15.7036C20.4762 15.0193 19.9214 14.4645 19.2371 14.4645H11.7629C11.0786 14.4645 10.5238 15.0193 10.5238 15.7036C10.5238 16.388 11.0786 16.9427 11.7629 16.9427H19.2371C19.9214 16.9427 20.4762 16.388 20.4762 15.7036ZM10.5238 11.5732C10.5238 10.8888 11.0786 10.334 11.7629 10.334H19.2371C19.9214 10.334 20.4762 10.8888 20.4762 11.5732C20.4762 12.2575 19.9214 12.8123 19.2371 12.8123H11.7629C11.0786 12.8123 10.5238 12.2575 10.5238 11.5732Z" fill="url(#paint1_linear_400_844)" />
                  <defs>
                    <linearGradient id="paint0_linear_400_844" x1="5" y1="8.99773" x2="37.9273" y2="13.7522" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFBF80" />
                      <stop offset="1" stopColor="#B36E0D" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_400_844" x1="6" y1="6.20361" x2="29" y2="25.2036" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD943" />
                      <stop offset="1" stopColor="#FFA100" />
                    </linearGradient>
                  </defs>
                </svg>
                Серверы
              </div>
              <div className={styles['logs__filters-nav-content']}>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={servers.includes(1)}
                    onChange={() => toggleServer(1)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №1</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={servers.includes(2)}
                    onChange={() => toggleServer(2)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №2</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={servers.includes(3)}
                    onChange={() => toggleServer(3)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №3</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={servers.includes(4)}
                    onChange={() => toggleServer(4)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №4</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={servers.includes(5)}
                    onChange={() => toggleServer(5)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №5</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={servers.includes(6)}
                    onChange={() => toggleServer(6)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №6</div>
                </label>
              </div>
            </div>
            <div className={styles['logs__filters-nav-block']}>
              <div className={styles['logs__filters-nav-title']}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.4872 6.20361H11.5223C8.06253 6.20361 6 8.26511 6 11.7231V19.6746C6 23.1421 8.06253 25.2036 11.5223 25.2036H19.4777C22.9374 25.2036 25 23.1421 25 19.6841V11.7231C25.0095 8.26511 22.9469 6.20361 19.4872 6.20361ZM9.08904 15.5991C9.11755 13.9271 9.78288 12.3501 10.9615 11.1721C12.1781 9.95611 13.7939 9.29111 15.5047 9.29111C17.2156 9.29111 18.8314 9.95611 20.0385 11.1721C20.067 11.2006 20.0955 11.2386 20.124 11.2766V10.4596C20.124 10.0701 20.4472 9.74711 20.8369 9.74711C21.2266 9.74711 21.5497 10.0701 21.5497 10.4596V12.9771C21.5497 13.3666 21.2266 13.6896 20.8369 13.6896H18.3181C17.9284 13.6896 17.6053 13.3666 17.6053 12.9771C17.6053 12.5876 17.9284 12.2646 18.3181 12.2646H19.107C19.0785 12.2361 19.0595 12.2076 19.031 12.1791C18.09 11.2386 16.8354 10.7161 15.5047 10.7161C14.1741 10.7161 12.9194 11.2386 11.9785 12.1791C11.0565 13.1006 10.5433 14.3261 10.5243 15.6276C10.5148 16.0076 10.1916 16.3211 9.80189 16.3211H9.79239C9.4027 16.3211 9.08904 15.9886 9.08904 15.5991ZM20.0385 20.2351C18.8314 21.4416 17.2156 22.1161 15.5047 22.1161C13.7939 22.1161 12.1781 21.4511 10.971 20.2351C10.9425 20.2066 10.9139 20.1686 10.8854 20.1306V20.9381C10.8854 21.3276 10.5623 21.6506 10.1726 21.6506C9.78288 21.6506 9.45972 21.3276 9.45972 20.9381V18.4206C9.45972 18.0311 9.78288 17.7081 10.1726 17.7081H12.6913C13.081 17.7081 13.4042 18.0311 13.4042 18.4206C13.4042 18.8101 13.081 19.1331 12.6913 19.1331H11.9024C11.931 19.1616 11.95 19.1901 11.9785 19.2186C12.9194 20.1591 14.1741 20.6816 15.5047 20.6816C16.8354 20.6816 18.09 20.1591 19.031 19.2186C19.9625 18.2876 20.4852 17.0431 20.4852 15.7131C20.4852 15.3236 20.8084 15.0006 21.1981 15.0006C21.5878 15.0006 21.9109 15.3236 21.9109 15.7131C21.9109 17.4326 21.2456 19.0381 20.0385 20.2351Z" fill="url(#paint0_linear_400_890)" />
                  <defs>
                    <linearGradient id="paint0_linear_400_890" x1="6" y1="6.20361" x2="29" y2="25.2036" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD943" />
                      <stop offset="1" stopColor="#FFA100" />
                    </linearGradient>
                  </defs>
                </svg>
                Тип операции
              </div>
              <div className={styles['logs__filters-nav-content']}>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(2)}
                    onChange={() => toggleCategory(2)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Денежные операции</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(1)}
                    onChange={() => toggleCategory(1)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Админ-действия</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(3)}
                    onChange={() => toggleCategory(3)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Наказания</div>
                </label>

                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(4)}
                    onChange={() => toggleCategory(4)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Организации</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(5)}
                    onChange={() => toggleCategory(5)}
                  />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Семьи</div>
                </label>
              </div>
            </div>
            {/* <div className={`${styles['logs__filters-nav-block']} ${styles['logs__filters-nav-block--bg']}`}>
              <div className={styles['logs__filters-nav-title']}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 8.20361H10.75C7.9 8.20361 6 9.98103 6 12.6472V17.9794C6 20.6455 7.9 22.4229 10.75 22.4229H14.55L18.7775 25.0535C19.4045 25.4446 20.25 25.0269 20.25 24.3159V22.4229C23.1 22.4229 25 20.6455 25 17.9794V12.6472C25 9.98103 23.1 8.20361 20.25 8.20361Z" fill="url(#paint0_linear_392_5118)" />
                  <defs>
                    <linearGradient id="paint0_linear_392_5118" x1="6" y1="8.20361" x2="26.8891" y2="27.49" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD943" />
                      <stop offset="1" stopColor="#FFA100" />
                    </linearGradient>
                  </defs>
                </svg>
                Тип чата
              </div>
              <div className={styles['logs__filters-nav-content']}>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Обычный чат (/b, /s, /w )</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Фракционный (/f, /r, /d )</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Семейный (/fam)</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>VIP чат (/vip)</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Личные сообщения (/pm)</div>
                </label>
              </div>
            </div> */}
          </div>
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
              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>
                  Сумма от
                </div>
                <input
                  className={styles['logs__filters-form-input']}
                  placeholder='0'
                  value={amountFrom}
                  onChange={e => setAmountFrom(e.target.value)}
                />
              </div>
              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>
                  Сумма до
                </div>
                <input
                  className={styles['logs__filters-form-input']}
                  placeholder='0'
                  value={amountTo}
                  onChange={e => setAmountTo(e.target.value)}
                />
              </div>
            </div>
            <div className={styles['logs__filters-form-btns']}>
              <button className={`btn-reset ${styles['logs__filters-form-btn']}`} onClick={loadLogs}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                  <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                </svg>
                Применить фильтры
              </button>
              <button className={`btn-reset ${styles['logs__filters-form-btn']}`}
                onClick={() => {
                  setServers([])
                  setTypes([])
                  setSelectedCategories([])
                  setAmountFrom('')
                  setAmountTo('')
                  setPage(1)
                }}
              >
                Сбросить
              </button>
            </div>
          </div>
        </div>

        <div className={styles['logs__filters-table-wrapper']}>
          <div className={`${styles['logs__filters-table']} ${styles['logs__filters-table--logs']}`}>


            {!loading && paginatedLogs.length > 0 && (
              <div className={styles['logs__filters-table-header']}>
                <div>Время</div>
                <div className={styles['logs__column-center']}>Сервер</div>
                <div>Тип</div>
                <div>Игрок</div>
                <div>Действие</div>
                <div className={styles['logs__column-center']}>Сумма</div>
                <div className={styles['logs__column-end']}>Баланс</div>
              </div>
            )}


            {loading && <div>Загрузка...</div>}

            {!loading && !searched && (
              <div>Введите имя игрока</div>
            )}

            {!loading && searched && logs.length === 0 && (
              <div>Ничего не найдено</div>
            )}

            {!loading && paginatedLogs.length > 0 && paginatedLogs.map(log => (
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
