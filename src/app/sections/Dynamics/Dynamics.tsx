'use client'

import styles from './Dynamics.module.scss'

import { useEffect, useState } from 'react'
import { useServer } from '@/context/ServerContext'

type Row = {
  date: string
  total: number
}

type MoneyData = {
  server: number
  cash: number
  bank: number
  business: number
}

type ServerActivity = {
  id: number
  online_players: number
}

type AdminOnline = {
  date: string
  name: string
  rank: string
}

type ActivityResponse = {
  servers: {
    id: number
    online_players: number
  }[]
  admins: AdminOnline[]
}


export default function Dynamics() {
  // donation-dynamics
  const [period, setPeriod] = useState<'week' | 'month'>('week')
  const [data, setData] = useState<Row[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch(`/api/donation-dynamics?period=${period}`)
      .then(res => res.json())
      .then(d => {
        setData(d)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [period])

  const format = (n: number) =>
    Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  const WEEK_DAYS = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ]

  const getDayName = (index: number) =>
    WEEK_DAYS[index % 7]

  // const [periodMoney, setPeriodMoney] = useState<'day' | 'week' | 'month'>('month')
  // const [income, setIncome] = useState<Row[]>([])
  // const [spend, setSpend] = useState<Row[]>([])

  // useEffect(() => {
  //   fetch(`/api/money-flow?period=${periodMoney}`)
  //     .then(r => r.json())
  //     .then(data => {
  //       console.log(data);
  //       setIncome(data.income)
  //       setSpend(data.spend)
  //     })
  // }, [periodMoney])

  // const merged = mergeByDate(income, spend)

  // function mergeByDate(income: any[], spend: any[]) {
  //   const map = new Map()

  //   income.forEach(i => {
  //     map.set(i.date, { date: i.date, income: i.total, spend: 0 })
  //   })

  //   spend.forEach(s => {
  //     if (!map.has(s.date)) {
  //       map.set(s.date, { date: s.date, income: 0, spend: s.total })
  //     } else {
  //       map.get(s.date).spend = s.total
  //     }
  //   })

  //   return Array.from(map.values())
  // }

  // function formatDay(date: string) {
  //   return new Date(date).toLocaleDateString('ru-RU', { weekday: 'long' })
  // }

  // money-overview
  const { server } = useServer()
  const [money, setMoney] = useState<MoneyData | null>(null)

  useEffect(() => {
    if (!server) return
    setLoading(true)
    fetch(`/api/money-overview?server=${server}`)
      .then(res => res.json())
      .then(data => {
        setMoney(data)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [server])

  // activity
  const [activity, setActivity] = useState<ActivityResponse | null>(null)

  useEffect(() => {
    fetch('/api/activity')
      .then(res => res.json())
      .then(data => {
        setActivity(data)
      })
      .catch(console.error)
  }, [])


  if (!money || !activity) {
    return <div className="container">Загрузка...</div>
  }

  const { cash, bank, business } = money
  const total = cash + bank + business

  const percent = (v: number) =>
    total ? ((v / total) * 100).toFixed(1) : '0'

  const formatM = (v: number) =>
    v >= 1_000_000 ? Math.floor((v / 1_000_000)) + ' М' : v.toLocaleString()

  const cashPercent = cash / total
  const bankPercent = bank / total
  const businessPercent = business / total

  const size = 233
  const stroke = 35
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  const cashLen = cashPercent * circumference
  const bankLen = bankPercent * circumference
  const businessLen = businessPercent * circumference


  const calcOffset = (percent: number, prevOffset: number) =>
    circumference - (percent / 100) * circumference - prevOffset

  const cashOffset = 0
  const bankOffset = calcOffset(bankPercent, cashOffset)
  const businessOffset = calcOffset(businessPercent, cashOffset + bankOffset)

  return (
    <section className={styles['dynamics']}>
      <div className="container">
        <div className={`main-title-wrapper ${styles['dynamics__title-wrapper']}`}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7031 25.7031H5.70312C5.29313 25.7031 4.95312 25.3631 4.95312 24.9531C4.95312 24.5431 5.29313 24.2031 5.70312 24.2031H25.7031C26.1131 24.2031 26.4531 24.5431 26.4531 24.9531C26.4531 25.3631 26.1131 25.7031 25.7031 25.7031Z" fill="white" />
            <path d="M25.7031 25.7031H5.70312C5.29313 25.7031 4.95312 25.3631 4.95312 24.9531C4.95312 24.5431 5.29313 24.2031 5.70312 24.2031H25.7031C26.1131 24.2031 26.4531 24.5431 26.4531 24.9531C26.4531 25.3631 26.1131 25.7031 25.7031 25.7031Z" fill="url(#paint0_linear_380_1382)" />
            <path d="M13.4531 7.70312V25.7031H17.9531V7.70312C17.9531 6.60312 17.5031 5.70312 16.1531 5.70312H15.2531C13.9031 5.70312 13.4531 6.60312 13.4531 7.70312Z" fill="white" />
            <path d="M13.4531 7.70312V25.7031H17.9531V7.70312C17.9531 6.60312 17.5031 5.70312 16.1531 5.70312H15.2531C13.9031 5.70312 13.4531 6.60312 13.4531 7.70312Z" fill="url(#paint1_linear_380_1382)" />
            <path d="M6.70312 13.7031V25.7031H10.7031V13.7031C10.7031 12.6031 10.3031 11.7031 9.10313 11.7031H8.30312C7.10312 11.7031 6.70312 12.6031 6.70312 13.7031Z" fill="white" />
            <path d="M6.70312 13.7031V25.7031H10.7031V13.7031C10.7031 12.6031 10.3031 11.7031 9.10313 11.7031H8.30312C7.10312 11.7031 6.70312 12.6031 6.70312 13.7031Z" fill="url(#paint2_linear_380_1382)" />
            <path d="M20.7031 18.7031V25.7031H24.7031V18.7031C24.7031 17.6031 24.3031 16.7031 23.1031 16.7031H22.3031C21.1031 16.7031 20.7031 17.6031 20.7031 18.7031Z" fill="white" />
            <path d="M20.7031 18.7031V25.7031H24.7031V18.7031C24.7031 17.6031 24.3031 16.7031 23.1031 16.7031H22.3031C21.1031 16.7031 20.7031 17.6031 20.7031 18.7031Z" fill="url(#paint3_linear_380_1382)" />
            <defs>
              <linearGradient id="paint0_linear_380_1382" x1="16.0088" y1="-23.1985" x2="26.6141" y2="30.0807" gradientUnits="userSpaceOnUse">
                <stop offset="0.44698" stopColor="#DADADA" />
                <stop offset="1" stopColor="#515151" />
              </linearGradient>
              <linearGradient id="paint1_linear_380_1382" x1="16.0088" y1="-23.1985" x2="26.6141" y2="30.0807" gradientUnits="userSpaceOnUse">
                <stop offset="0.44698" stopColor="#DADADA" />
                <stop offset="1" stopColor="#515151" />
              </linearGradient>
              <linearGradient id="paint2_linear_380_1382" x1="16.0088" y1="-23.1985" x2="26.6141" y2="30.0807" gradientUnits="userSpaceOnUse">
                <stop offset="0.44698" stopColor="#DADADA" />
                <stop offset="1" stopColor="#515151" />
              </linearGradient>
              <linearGradient id="paint3_linear_380_1382" x1="16.0088" y1="-23.1985" x2="26.6141" y2="30.0807" gradientUnits="userSpaceOnUse">
                <stop offset="0.44698" stopColor="#DADADA" />
                <stop offset="1" stopColor="#515151" />
              </linearGradient>
            </defs>
          </svg>
          <h2 className={'main-title'}>Динамика доната</h2>
        </div>

        <div className={styles['dynamics__content-wrapper']}>
          <div className={`${styles['dynamics__content']} ${styles['dynamics__content--column--full']}`}>

            <div className={styles['dynamics__content-title-wrapper']}>
              <h3 className={styles['dynamics__content-title']}>
                График за {period === 'week' ? 'неделю' : 'месяц'}
              </h3>

              <div className={styles['dynamics__content-tabs']}>

                <button
                  className={`btn-reset ${styles['dynamics__content-tab']} ${period === 'week' ? styles['dynamics__content-tab--active'] : ''
                    }`}
                  onClick={() => setPeriod('week')}
                >
                  7 дней
                </button>

                <button
                  className={`btn-reset ${styles['dynamics__content-tab']} ${period === 'month' ? styles['dynamics__content-tab--active'] : ''
                    }`}
                  onClick={() => setPeriod('month')}
                >
                  30 дней
                </button>

              </div>
            </div>

            <div className={styles['dynamics__content-list-wrapper']}>
              <div className={styles['dynamics__content-list-inf']}>
                День
                <span>₽</span>
              </div>
              <ul className={`list-reset ${styles['dynamics__content-list']}`}>
                {data.slice(0, data.length - 1).map((item, index) => (
                  <li key={item.date} className={styles['dynamics__content-item']}>
                    <div className={styles['dynamics__content-item-title']}>
                      {getDayName(index)}
                    </div>
                    <div className={styles['dynamics__content-item-val']}>
                      + {format(item.total)} ₽
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${styles['dynamics__content']} ${styles['dynamics__content--column']}`}>
            <div className={styles['dynamics__content-title-wrapper']}>
              <h3 className={styles['dynamics__content-title']}>Денежный поток</h3>
              {/* <div className={styles['dynamics__content-tabs']}>
                {['day', 'week', 'month'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPeriodMoney(p as any)}
                    className={`btn-reset ${styles['dynamics__content-tab']} ${periodMoney === p ? styles['dynamics__content-tab--active'] : ''
                      }`}
                  >
                    {p === 'day' ? 'День' : p === 'week' ? 'Неделя' : 'Месяц'}
                  </button>
                ))}
              </div> */}
            </div>
            <img src="dynamics/dynamics-stat.png" alt="" />
          </div>
          <div className={styles['dynamics__content']}>
            <div className={styles['dynamics__content-title-wrapper']}>
              <h3 className={styles['dynamics__content-title']}>Распределение денег</h3>
            </div>

            <div className={styles['dynamics__content-svg-wrapper']}>
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>

                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#1e1e1e"
                    strokeWidth={stroke}
                    fill="none"
                  />

                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#EBA93A"
                    strokeWidth={stroke}
                    fill="none"
                    strokeDasharray={`${(cash / total) * circumference} ${circumference}`}
                    strokeDashoffset={0}
                  />

                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#D499EF"
                    strokeWidth={stroke}
                    fill="none"
                    strokeDasharray={`${(bank / total) * circumference} ${circumference}`}
                    strokeDashoffset={-((cash / total) * circumference)}
                  />

                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#93ED6E"
                    strokeWidth={stroke}
                    fill="none"
                    strokeDasharray={`${(business / total) * circumference} ${circumference}`}
                    strokeDashoffset={-((cash + bank) / total) * circumference}
                  />

                </g>
              </svg>
              <div className={styles['dynamics__content-svg-text']}>
                {formatM(total)}
                <span>Всего</span>
              </div>
            </div>



            <div className={styles['dynamics__legend']}>

              <div className={styles['dynamics__legend-item']}>
                <div className={styles['dynamics__legend-item-val']}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="5" fill="url(#paint0_linear_387_1722)" />
                    <defs>
                      <linearGradient id="paint0_linear_387_1722" x1="-2.56772e-06" y1="-4.5" x2="19.1298" y2="-12.4746" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EAABF0" />
                        <stop offset="1" stopColor="#4623E9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Банк:
                </div>
                <div className={styles['dynamics__legend-item-text']}>
                  {formatM(bank)} ₽
                  ({percent(bank)}%)
                </div>
              </div>

              <div className={styles['dynamics__legend-item']}>
                <div className={styles['dynamics__legend-item-val']}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="5" fill="url(#paint0_linear_387_1734)" />
                    <defs>
                      <linearGradient id="paint0_linear_387_1734" x1="-2.56772e-06" y1="-4.5" x2="19.1298" y2="-12.4746" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D3F0AB" />
                        <stop offset="1" stopColor="#44E923" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Наличные:
                </div>
                <div className={styles['dynamics__legend-item-text']}>
                  {formatM(cash)} ₽
                  ({percent(cash)}%)
                </div>
              </div>

              <div className={styles['dynamics__legend-item']}>
                <div className={styles['dynamics__legend-item-val']}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="5" fill="url(#paint0_linear_387_1740)" />
                    <defs>
                      <linearGradient id="paint0_linear_387_1740" x1="-2.56772e-06" y1="-4.5" x2="19.1298" y2="-12.4746" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F0C3AB" />
                        <stop offset="1" stopColor="#E9A323" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Бизнес:
                </div>
                <div className={styles['dynamics__legend-item-text']}>
                  {formatM(business)} ₽
                  ({percent(business)}%)
                </div>
              </div>

            </div>


          </div>
          <div className={`${styles['dynamics__content']} ${styles['dynamics__content--stat']}`}>
            <div className={styles['dynamics__content-title-wrapper']}>
              <h3 className={styles['dynamics__content-title']}>Активность серверов</h3>
            </div>
            <ul className={`list-reset ${styles['dynamics__content-servers']}`}>
              {activity.servers.map(server => {
                const percent = Math.min((server.online_players / 1000) * 100, 100)

                return (
                  <li key={server.id} className={styles['dynamics__content-server']}>
                    <div className={styles['dynamics__content-server-inf-wrapper']}>
                      <div className={styles['dynamics__content-server-inf']}>
                        Сервер #{server.id}
                      </div>

                      <div className={styles['dynamics__content-server-val']}>
                        {server.online_players}

                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z"
                            fill="#FECC0A"
                          />
                          <path
                            d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z"
                            fill="url(#paint0_linear_391_1790)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_391_1790"
                              x1="8.22748"
                              y1="-22.6213"
                              x2="17.2942"
                              y2="19.7507"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.44698" stopColor="#A8A8A8" />
                              <stop offset="1" stopColor="#3C3C3C" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className={styles['dynamics__content-server-progress']}>
                      <span
                        style={{
                          width: `${percent}%`
                        }}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>

          </div>
          <div className={`${styles['dynamics__content']} ${styles['dynamics__content--stat']}`}>
            <div className={styles['dynamics__content-title-wrapper']}>
              <div className={styles['dynamics__content-title-inner']}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.2857 17.9056V15.9103C29.2857 10.1673 24.6743 5.5 19 5.5C13.3257 5.5 8.71429 10.1673 8.71429 15.9103V17.9056C8.71429 20.0223 8.23429 22.1044 7.29143 23.9956C7.10286 24.3773 7 24.811 7 25.2448C7 26.7971 8.25842 28.0556 9.81077 28.0556H28.1892C29.7416 28.0556 31 26.7971 31 25.2448C31 24.811 30.8971 24.3773 30.7086 23.9956C29.7657 22.1044 29.2857 20.0223 29.2857 17.9056Z" fill="url(#paint0_linear_392_3143)" />
                  <path d="M23.5 30.3889C22.8617 32.2089 21.0904 33.5 19 33.5C16.9096 33.5 15.1383 32.2089 14.5 30.3889H23.5Z" fill="url(#paint1_linear_392_3143)" />
                  <defs>
                    <linearGradient id="paint0_linear_392_3143" x1="19.3412" y1="-34.9623" x2="37.5644" y2="38.0347" gradientUnits="userSpaceOnUse">
                      <stop offset="0.44698" stopColor="#DADADA" />
                      <stop offset="1" stopColor="#515151" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_392_3143" x1="19.3412" y1="-34.9623" x2="37.5644" y2="38.0347" gradientUnits="userSpaceOnUse">
                      <stop offset="0.44698" stopColor="#DADADA" />
                      <stop offset="1" stopColor="#515151" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className={styles['dynamics__content-title']}>Алерты</h3>
              </div>
              <button className={`btn-reset ${styles['dynamics__content-stat-btn']}`}>
                Все
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35156 3.71456L9.10885 8.18945L4.35156 12.6643L5.97292 14.1895L12.3516 8.18945L5.97292 2.18945L4.35156 3.71456Z" fill="white" />
                </svg>
              </button>
            </div>
            <ul className={`list-reset ${styles['dynamics__content-alerts']}`}>
              <li className={styles['dynamics__content-alert']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="7" fill="#FE0A0A" fillOpacity="0.1" />
                  <path d="M17.22 11.2201C17.6508 11.2201 18 11.5693 18 12.0001C18 12.4309 17.6508 12.7801 17.22 12.7801L6.78 12.7801C6.34922 12.7801 6 12.4309 6 12.0001C6 11.5693 6.34922 11.2201 6.78 11.2201L17.22 11.2201Z" fill="#F43D3D" />
                  <path d="M12.78 17.22C12.78 17.6508 12.4308 18 12 18C11.5692 18 11.22 17.6508 11.22 17.22L11.22 6.78C11.22 6.34922 11.5692 6 12 6C12.4308 6 12.78 6.34922 12.78 6.78L12.78 17.22Z" fill="#F43D3D" />
                </svg>
                <div className={styles['dynamics__content-alert-text']}>
                  Denny Walker получил 5MP
                  <span>Сервер №1 - 13:45</span>
                </div>
              </li>
              <li className={styles['dynamics__content-alert']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="7" fill="#FE0A0A" fillOpacity="0.1" />
                  <path d="M17.22 11.2201C17.6508 11.2201 18 11.5693 18 12.0001C18 12.4309 17.6508 12.7801 17.22 12.7801L6.78 12.7801C6.34922 12.7801 6 12.4309 6 12.0001C6 11.5693 6.34922 11.2201 6.78 11.2201L17.22 11.2201Z" fill="#F43D3D" />
                  <path d="M12.78 17.22C12.78 17.6508 12.4308 18 12 18C11.5692 18 11.22 17.6508 11.22 17.22L11.22 6.78C11.22 6.34922 11.5692 6 12 6C12.4308 6 12.78 6.34922 12.78 6.78L12.78 17.22Z" fill="#F43D3D" />
                </svg>
                <div className={styles['dynamics__content-alert-text']}>
                  Denny Walker получил 5MP
                  <span>Сервер №1 - 13:45</span>
                </div>
              </li>
              <li className={styles['dynamics__content-alert']}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="7" fill="#FE0A0A" fillOpacity="0.1" />
                  <path d="M17.22 11.2201C17.6508 11.2201 18 11.5693 18 12.0001C18 12.4309 17.6508 12.7801 17.22 12.7801L6.78 12.7801C6.34922 12.7801 6 12.4309 6 12.0001C6 11.5693 6.34922 11.2201 6.78 11.2201L17.22 11.2201Z" fill="#F43D3D" />
                  <path d="M12.78 17.22C12.78 17.6508 12.4308 18 12 18C11.5692 18 11.22 17.6508 11.22 17.22L11.22 6.78C11.22 6.34922 11.5692 6 12 6C12.4308 6 12.78 6.34922 12.78 6.78L12.78 17.22Z" fill="#F43D3D" />
                </svg>
                <div className={styles['dynamics__content-alert-text']}>
                  Denny Walker получил 5MP
                  <span>Сервер №1 - 13:45</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${styles['dynamics__content']} ${styles['dynamics__content--stat']}`}>
            <div className={styles['dynamics__content-title-wrapper']}>
              <div className={styles['dynamics__content-title-inner']}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.9891 29.9375C31.0391 30.3323 30.9155 30.7299 30.6516 31.0301C30.3891 31.329 30.0086 31.5 29.61 31.5H21.8115C21.349 31.5 21.249 30.969 21.249 30.969L19.1935 23.1594L21.5824 19.356C26.6059 20.5307 30.3155 24.5467 30.9891 29.9375ZM15.0811 31.5H7.3896C6.99099 31.5 6.61184 31.329 6.34795 31.0301C6.08407 30.7299 5.96185 30.3323 6.01046 29.9375C6.68406 24.5467 10.3923 20.5307 15.4158 19.356L17.8047 23.1594L15.6422 30.969C15.6422 30.969 15.5436 31.5 15.0811 31.5Z" fill="url(#paint0_linear_392_3062)" />
                  <path d="M30.9891 29.9375C31.0391 30.3323 30.9155 30.7299 30.6516 31.0301C30.3891 31.329 30.0086 31.5 29.61 31.5H21.8115C21.349 31.5 21.249 30.969 21.249 30.969L19.1935 23.1594L21.5824 19.356C26.6059 20.5307 30.3155 24.5467 30.9891 29.9375ZM15.0811 31.5H7.3896C6.99099 31.5 6.61184 31.329 6.34795 31.0301C6.08407 30.7299 5.96185 30.3323 6.01046 29.9375C6.68406 24.5467 10.3923 20.5307 15.4158 19.356L17.8047 23.1594L15.6422 30.969C15.6422 30.969 15.5436 31.5 15.0811 31.5Z" fill="url(#paint1_linear_392_3062)" />
                  <path d="M30.9891 29.9375C31.0391 30.3323 30.9155 30.7299 30.6516 31.0301C30.3891 31.329 30.0086 31.5 29.61 31.5H21.8115C21.349 31.5 21.249 30.969 21.249 30.969L19.1935 23.1594L21.5824 19.356C26.6059 20.5307 30.3155 24.5467 30.9891 29.9375ZM15.0811 31.5H7.3896C6.99099 31.5 6.61184 31.329 6.34795 31.0301C6.08407 30.7299 5.96185 30.3323 6.01046 29.9375C6.68406 24.5467 10.3923 20.5307 15.4158 19.356L17.8047 23.1594L15.6422 30.969C15.6422 30.969 15.5436 31.5 15.0811 31.5Z" fill="url(#paint2_linear_392_3062)" />
                  <path d="M30.9891 29.9375C31.0391 30.3323 30.9155 30.7299 30.6516 31.0301C30.3891 31.329 30.0086 31.5 29.61 31.5H21.8115C21.349 31.5 21.249 30.969 21.249 30.969L19.1935 23.1594L21.5824 19.356C26.6059 20.5307 30.3155 24.5467 30.9891 29.9375ZM15.0811 31.5H7.3896C6.99099 31.5 6.61184 31.329 6.34795 31.0301C6.08407 30.7299 5.96185 30.3323 6.01046 29.9375C6.68406 24.5467 10.3923 20.5307 15.4158 19.356L17.8047 23.1594L15.6422 30.969C15.6422 30.969 15.5436 31.5 15.0811 31.5Z" fill="url(#paint3_linear_392_3062)" />
                  <path d="M30.9891 29.9375C31.0391 30.3323 30.9155 30.7299 30.6516 31.0301C30.3891 31.329 30.0086 31.5 29.61 31.5H21.8115C21.349 31.5 21.249 30.969 21.249 30.969L19.1935 23.1594L21.5824 19.356C26.6059 20.5307 30.3155 24.5467 30.9891 29.9375ZM15.0811 31.5H7.3896C6.99099 31.5 6.61184 31.329 6.34795 31.0301C6.08407 30.7299 5.96185 30.3323 6.01046 29.9375C6.68406 24.5467 10.3923 20.5307 15.4158 19.356L17.8047 23.1594L15.6422 30.969C15.6422 30.969 15.5436 31.5 15.0811 31.5Z" fill="url(#paint4_linear_392_3062)" />
                  <path d="M30.9891 29.9375C31.0391 30.3323 30.9155 30.7299 30.6516 31.0301C30.3891 31.329 30.0086 31.5 29.61 31.5H21.8115C21.349 31.5 21.249 30.969 21.249 30.969L19.1935 23.1594L21.5824 19.356C26.6059 20.5307 30.3155 24.5467 30.9891 29.9375ZM15.0811 31.5H7.3896C6.99099 31.5 6.61184 31.329 6.34795 31.0301C6.08407 30.7299 5.96185 30.3323 6.01046 29.9375C6.68406 24.5467 10.3923 20.5307 15.4158 19.356L17.8047 23.1594L15.6422 30.969C15.6422 30.969 15.5436 31.5 15.0811 31.5Z" fill="url(#paint5_linear_392_3062)" />
                  <path d="M30.9891 29.9375C31.0391 30.3323 30.9155 30.7299 30.6516 31.0301C30.3891 31.329 30.0086 31.5 29.61 31.5H21.8115C21.349 31.5 21.249 30.969 21.249 30.969L19.1935 23.1594L21.5824 19.356C26.6059 20.5307 30.3155 24.5467 30.9891 29.9375ZM15.0811 31.5H7.3896C6.99099 31.5 6.61184 31.329 6.34795 31.0301C6.08407 30.7299 5.96185 30.3323 6.01046 29.9375C6.68406 24.5467 10.3923 20.5307 15.4158 19.356L17.8047 23.1594L15.6422 30.969C15.6422 30.969 15.5436 31.5 15.0811 31.5Z" fill="url(#paint6_linear_392_3062)" />
                  <path d="M24.3329 12.3384C24.3329 15.5629 21.7213 18.1769 18.4997 18.1769C15.2781 18.1769 12.6665 15.5629 12.6665 12.3384C12.6665 9.11396 15.2781 6.5 18.4997 6.5C21.7213 6.5 24.3329 9.11396 24.3329 12.3384Z" fill="url(#paint7_linear_392_3062)" />
                  <path d="M24.3329 12.3384C24.3329 15.5629 21.7213 18.1769 18.4997 18.1769C15.2781 18.1769 12.6665 15.5629 12.6665 12.3384C12.6665 9.11396 15.2781 6.5 18.4997 6.5C21.7213 6.5 24.3329 9.11396 24.3329 12.3384Z" fill="url(#paint8_linear_392_3062)" />
                  <path d="M24.3329 12.3384C24.3329 15.5629 21.7213 18.1769 18.4997 18.1769C15.2781 18.1769 12.6665 15.5629 12.6665 12.3384C12.6665 9.11396 15.2781 6.5 18.4997 6.5C21.7213 6.5 24.3329 9.11396 24.3329 12.3384Z" fill="url(#paint9_linear_392_3062)" />
                  <path d="M24.3329 12.3384C24.3329 15.5629 21.7213 18.1769 18.4997 18.1769C15.2781 18.1769 12.6665 15.5629 12.6665 12.3384C12.6665 9.11396 15.2781 6.5 18.4997 6.5C21.7213 6.5 24.3329 9.11396 24.3329 12.3384Z" fill="url(#paint10_linear_392_3062)" />
                  <path d="M24.3329 12.3384C24.3329 15.5629 21.7213 18.1769 18.4997 18.1769C15.2781 18.1769 12.6665 15.5629 12.6665 12.3384C12.6665 9.11396 15.2781 6.5 18.4997 6.5C21.7213 6.5 24.3329 9.11396 24.3329 12.3384Z" fill="url(#paint11_linear_392_3062)" />
                  <path d="M24.3329 12.3384C24.3329 15.5629 21.7213 18.1769 18.4997 18.1769C15.2781 18.1769 12.6665 15.5629 12.6665 12.3384C12.6665 9.11396 15.2781 6.5 18.4997 6.5C21.7213 6.5 24.3329 9.11396 24.3329 12.3384Z" fill="url(#paint12_linear_392_3062)" />
                  <path d="M24.3329 12.3384C24.3329 15.5629 21.7213 18.1769 18.4997 18.1769C15.2781 18.1769 12.6665 15.5629 12.6665 12.3384C12.6665 9.11396 15.2781 6.5 18.4997 6.5C21.7213 6.5 24.3329 9.11396 24.3329 12.3384Z" fill="url(#paint13_linear_392_3062)" />
                  <defs>
                    <linearGradient id="paint0_linear_392_3062" x1="26.5" y1="10" x2="10" y2="37.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF4242" />
                      <stop offset="1" stopColor="#992828" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_392_3062" x1="12.6" y1="-6.37593" x2="38.902" y2="2.12392" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F0C3AB" />
                      <stop offset="1" stopColor="#E9A323" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_392_3062" x1="18.5" y1="6.5" x2="18.5" y2="31.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF452C" />
                      <stop offset="1" stopColor="#99291A" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_392_3062" x1="6" y1="6.5" x2="28.5198" y2="33.6088" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FED90E" />
                      <stop offset="1" stopColor="#FFA100" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_392_3062" x1="6" y1="-0.531254" x2="35.8903" y2="-12.9916" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A8EF46" />
                      <stop offset="1" stopColor="#437E37" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_392_3062" x1="7.48305" y1="7.98305" x2="26.339" y2="31.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFAB4C" />
                      <stop offset="1" stopColor="#924E02" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_392_3062" x1="18.8554" y1="-29.6271" x2="33.0223" y2="36.5793" gradientUnits="userSpaceOnUse">
                      <stop offset="0.44698" stopColor="#DADADA" />
                      <stop offset="1" stopColor="#515151" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_392_3062" x1="26.5" y1="10" x2="10" y2="37.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF4242" />
                      <stop offset="1" stopColor="#992828" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_392_3062" x1="12.6" y1="-6.37593" x2="38.902" y2="2.12392" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F0C3AB" />
                      <stop offset="1" stopColor="#E9A323" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_392_3062" x1="18.5" y1="6.5" x2="18.5" y2="31.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF452C" />
                      <stop offset="1" stopColor="#99291A" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_392_3062" x1="6" y1="6.5" x2="28.5198" y2="33.6088" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FED90E" />
                      <stop offset="1" stopColor="#FFA100" />
                    </linearGradient>
                    <linearGradient id="paint11_linear_392_3062" x1="6" y1="-0.531254" x2="35.8903" y2="-12.9916" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A8EF46" />
                      <stop offset="1" stopColor="#437E37" />
                    </linearGradient>
                    <linearGradient id="paint12_linear_392_3062" x1="7.48305" y1="7.98305" x2="26.339" y2="31.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFAB4C" />
                      <stop offset="1" stopColor="#924E02" />
                    </linearGradient>
                    <linearGradient id="paint13_linear_392_3062" x1="18.8554" y1="-29.6271" x2="33.0223" y2="36.5793" gradientUnits="userSpaceOnUse">
                      <stop offset="0.44698" stopColor="#DADADA" />
                      <stop offset="1" stopColor="#515151" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className={styles['dynamics__content-title']}>Админы онлайн</h3>
              </div>
              <button className={`btn-reset ${styles['dynamics__content-stat-btn']}`}>
                Все
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.35156 3.71456L9.10885 8.18945L4.35156 12.6643L5.97292 14.1895L12.3516 8.18945L5.97292 2.18945L4.35156 3.71456Z" fill="white" />
                </svg>
              </button>
            </div>
            <ul className={`list-reset ${styles['dynamics__content-admins']}`}>
              {activity.admins.map((admin, index) => {
                const now = new Date()
                const adminDate = new Date(admin.date)
                const diffMs = now.getTime() - adminDate.getTime()

                const diffHours = Math.floor(diffMs / 1000 / 60 / 60)
                const diffMinutes = Math.floor((diffMs / 1000 / 60) % 60)

                const formattedTime = `${diffHours}ч ${diffMinutes}м`

                return (
                  <li key={index} className={styles['dynamics__content-admin']}>
                    <svg
                      className={styles['dynamics__content-admin-icon']}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <g filter="url(#filter0)">
                          <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                          <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                          <circle cx="12" cy="12" r="5" fill="#80FF46" />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0"
                          x="-40"
                          y="-40"
                          width="104"
                          height="104"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="20" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.373386 0 0 0 0 0.600962 0 0 0 0 0.199357 0 0 0 0.15 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                        <clipPath id="clip0">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className={styles['dynamics__content-admin-text']}>
                      {admin.name}
                      <span>Сервер #{admin.rank}</span>
                    </div>

                    <div className={styles['dynamics__content-admin-val']}>
                      {formattedTime}
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                        <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient id="paint0_linear" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                            <stop offset="0.44698" stopColor="#A8A8A8" />
                            <stop offset="1" stopColor="#3C3C3C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </li>
                )
              })}
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}
