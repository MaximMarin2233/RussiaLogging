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
        console.log(d);
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
        console.log(data);

        setMoney(data)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [server])

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
            <svg width="233" height="233" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto' }}>
              <path d="M233 116.5C233 180.841 180.841 233 116.5 233C52.1588 233 0 180.841 0 116.5C0 52.1588 52.1588 0 116.5 0C180.841 0 233 52.1588 233 116.5ZM34.95 116.5C34.95 161.539 71.4612 198.05 116.5 198.05C161.539 198.05 198.05 161.539 198.05 116.5C198.05 71.4612 161.539 34.95 116.5 34.95C71.4612 34.95 34.95 71.4612 34.95 116.5Z" fill="url(#paint0_linear_387_1707)" />
              <path d="M86.3476 229.03C106.101 234.323 126.899 234.323 146.652 229.03C166.406 223.738 184.418 213.338 198.878 198.878C213.338 184.418 223.738 166.406 229.03 146.652C234.323 126.899 234.323 106.101 229.03 86.3476L195.271 95.3933C198.976 109.221 198.976 123.779 195.271 137.607C191.566 151.434 184.287 164.042 174.165 174.165C164.042 184.287 151.434 191.566 137.607 195.271C123.779 198.976 109.221 198.976 95.3933 195.271L86.3476 229.03Z" fill="url(#paint1_linear_387_1707)" />
              <path d="M229.03 86.3476C223.738 66.5944 213.338 48.5824 198.878 34.1221C184.418 19.6617 166.406 9.26251 146.652 3.96965C126.899 -1.32321 106.101 -1.32322 86.3476 3.96964C66.5944 9.26249 48.5824 19.6617 34.1221 34.122L58.8355 58.8354C68.9577 48.7132 81.5661 41.4337 95.3933 37.7287C109.221 34.0238 123.779 34.0238 137.607 37.7288C151.434 41.4338 164.042 48.7132 174.165 58.8355C184.287 68.9577 191.566 81.5661 195.271 95.3933L229.03 86.3476Z" fill="url(#paint2_linear_387_1707)" />
              <path d="M82.6939 93.5V116H77.6539V95.69H79.3939L67.0939 109.31L67.0339 107.63H86.5339V111.53H63.2239V107.93L76.2439 93.5H82.6939ZM99.4348 116.45C97.5948 116.45 95.9448 116.17 94.4848 115.61C93.0448 115.05 91.8748 114.28 90.9748 113.3C90.0748 112.32 89.5148 111.22 89.2948 110H94.1248C94.4248 110.72 94.9748 111.33 95.7748 111.83C96.5748 112.31 97.7548 112.55 99.3148 112.55C100.975 112.55 102.325 112.25 103.365 111.65C104.405 111.03 105.175 110.15 105.675 109.01C106.175 107.87 106.425 106.51 106.425 104.93C106.425 103.21 106.145 101.76 105.585 100.58C105.045 99.4 104.225 98.51 103.125 97.91C102.045 97.29 100.715 96.98 99.1348 96.98C97.9948 96.98 97.0348 97.14 96.2548 97.46C95.4748 97.78 94.8848 98.22 94.4848 98.78C94.0848 99.32 93.8848 99.95 93.8848 100.67C93.8848 101.35 94.0648 101.96 94.4248 102.5C94.7848 103.02 95.3348 103.43 96.0748 103.73C96.8348 104.03 97.7648 104.18 98.8648 104.18C100.385 104.18 101.805 103.83 103.125 103.13C104.445 102.43 105.585 101.47 106.545 100.25L108.465 101.57C107.845 102.81 107.015 103.92 105.975 104.9C104.955 105.88 103.755 106.66 102.375 107.24C100.995 107.8 99.4448 108.08 97.7248 108.08C95.9048 108.08 94.3248 107.78 92.9848 107.18C91.6448 106.58 90.6048 105.74 89.8648 104.66C89.1448 103.56 88.7848 102.28 88.7848 100.82C88.7848 99.3 89.1948 97.96 90.0148 96.8C90.8548 95.62 92.0548 94.7 93.6148 94.04C95.1748 93.38 97.0348 93.05 99.1948 93.05C101.855 93.05 104.085 93.55 105.885 94.55C107.685 95.53 109.035 96.9 109.935 98.66C110.855 100.42 111.305 102.45 111.285 104.75C111.305 107.03 110.855 109.05 109.935 110.81C109.035 112.57 107.705 113.95 105.945 114.95C104.185 115.95 102.015 116.45 99.4348 116.45ZM126.339 116.45C123.819 116.45 121.639 115.97 119.799 115.01C117.979 114.03 116.569 112.66 115.569 110.9C114.569 109.14 114.069 107.09 114.069 104.75C114.069 102.41 114.569 100.36 115.569 98.6C116.569 96.84 117.979 95.48 119.799 94.52C121.639 93.54 123.819 93.05 126.339 93.05C128.839 93.05 130.999 93.54 132.819 94.52C134.659 95.48 136.079 96.84 137.079 98.6C138.079 100.36 138.579 102.41 138.579 104.75C138.579 107.09 138.079 109.14 137.079 110.9C136.079 112.66 134.659 114.03 132.819 115.01C130.999 115.97 128.839 116.45 126.339 116.45ZM126.339 112.31C128.599 112.31 130.349 111.65 131.589 110.33C132.849 108.99 133.479 107.13 133.479 104.75C133.479 102.35 132.849 100.49 131.589 99.17C130.349 97.85 128.599 97.19 126.339 97.19C124.079 97.19 122.319 97.85 121.059 99.17C119.799 100.49 119.169 102.35 119.169 104.75C119.169 107.15 119.799 109.01 121.059 110.33C122.319 111.65 124.079 112.31 126.339 112.31ZM141.855 116V98.93H149.355L155.565 113.39H153.945L160.095 98.93H167.595V116H162.885V100.73H163.905L157.065 116H152.385L145.545 100.79L146.535 100.76V116H141.855Z" fill="white" />
              <path d="M97.2046 142V131.92H101.202C101.883 131.92 102.441 132.058 102.875 132.333C103.313 132.604 103.638 132.951 103.848 133.376C104.062 133.801 104.17 134.239 104.17 134.692C104.17 135.247 104.037 135.719 103.771 136.106C103.509 136.493 103.152 136.755 102.7 136.89V136.54C103.334 136.685 103.815 136.986 104.142 137.443C104.473 137.9 104.639 138.421 104.639 139.004C104.639 139.601 104.524 140.124 104.296 140.572C104.067 141.02 103.726 141.37 103.274 141.622C102.826 141.874 102.27 142 101.608 142H97.2046ZM98.9126 140.411H101.398C101.692 140.411 101.955 140.353 102.189 140.236C102.422 140.115 102.604 139.947 102.735 139.732C102.87 139.513 102.938 139.254 102.938 138.955C102.938 138.684 102.879 138.442 102.763 138.227C102.646 138.012 102.476 137.842 102.252 137.716C102.028 137.585 101.759 137.52 101.447 137.52H98.9126V140.411ZM98.9126 135.945H101.181C101.423 135.945 101.64 135.898 101.832 135.805C102.023 135.712 102.175 135.574 102.287 135.392C102.399 135.21 102.455 134.986 102.455 134.72C102.455 134.37 102.343 134.078 102.119 133.845C101.895 133.612 101.582 133.495 101.181 133.495H98.9126V135.945ZM109.32 142.21C108.54 142.21 107.875 142.037 107.325 141.692C106.774 141.342 106.352 140.866 106.058 140.264C105.768 139.662 105.621 138.981 105.617 138.22C105.621 137.445 105.773 136.759 106.072 136.162C106.375 135.56 106.804 135.089 107.36 134.748C107.915 134.403 108.575 134.23 109.341 134.23C110.199 134.23 110.925 134.447 111.518 134.881C112.115 135.31 112.505 135.898 112.687 136.645L111.007 137.1C110.876 136.694 110.659 136.379 110.356 136.155C110.052 135.926 109.707 135.812 109.32 135.812C108.881 135.812 108.519 135.917 108.235 136.127C107.95 136.332 107.74 136.617 107.605 136.981C107.469 137.345 107.402 137.758 107.402 138.22C107.402 138.939 107.563 139.52 107.885 139.963C108.207 140.406 108.685 140.628 109.32 140.628C109.768 140.628 110.12 140.525 110.377 140.32C110.638 140.115 110.834 139.818 110.965 139.431L112.687 139.816C112.453 140.586 112.045 141.179 111.462 141.594C110.878 142.005 110.164 142.21 109.32 142.21ZM117.526 142.21C116.761 142.21 116.089 142.044 115.51 141.713C114.932 141.382 114.479 140.922 114.152 140.334C113.83 139.746 113.669 139.069 113.669 138.304C113.669 137.478 113.828 136.762 114.145 136.155C114.463 135.544 114.904 135.07 115.468 134.734C116.033 134.398 116.686 134.23 117.428 134.23C118.212 134.23 118.877 134.414 119.423 134.783C119.974 135.147 120.382 135.663 120.648 136.33C120.914 136.997 121.015 137.784 120.949 138.689H119.276V138.073C119.272 137.252 119.127 136.652 118.842 136.274C118.558 135.896 118.11 135.707 117.498 135.707C116.808 135.707 116.294 135.922 115.958 136.351C115.622 136.776 115.454 137.399 115.454 138.22C115.454 138.985 115.622 139.578 115.958 139.998C116.294 140.418 116.784 140.628 117.428 140.628C117.844 140.628 118.201 140.537 118.499 140.355C118.803 140.168 119.036 139.9 119.199 139.55L120.865 140.054C120.576 140.735 120.128 141.265 119.521 141.643C118.919 142.021 118.254 142.21 117.526 142.21ZM114.922 138.689V137.415H120.123V138.689H114.922ZM122.511 142V134.44H127.901V136.022H124.198V142H122.511ZM132.44 142.21C131.684 142.21 131.024 142.04 130.459 141.699C129.894 141.358 129.456 140.889 129.143 140.292C128.835 139.69 128.681 138.999 128.681 138.22C128.681 137.427 128.84 136.731 129.157 136.134C129.474 135.537 129.915 135.07 130.48 134.734C131.045 134.398 131.698 134.23 132.44 134.23C133.201 134.23 133.863 134.4 134.428 134.741C134.993 135.082 135.431 135.553 135.744 136.155C136.057 136.752 136.213 137.441 136.213 138.22C136.213 139.004 136.054 139.697 135.737 140.299C135.424 140.896 134.986 141.365 134.421 141.706C133.856 142.042 133.196 142.21 132.44 142.21ZM132.44 140.628C133.112 140.628 133.611 140.404 133.938 139.956C134.265 139.508 134.428 138.929 134.428 138.22C134.428 137.487 134.262 136.904 133.931 136.47C133.6 136.031 133.103 135.812 132.44 135.812C131.987 135.812 131.614 135.915 131.32 136.12C131.031 136.321 130.816 136.603 130.676 136.967C130.536 137.326 130.466 137.744 130.466 138.22C130.466 138.953 130.632 139.538 130.963 139.977C131.299 140.411 131.791 140.628 132.44 140.628Z" fill="white" fillOpacity="0.55" />
              <defs>
                <linearGradient id="paint0_linear_387_1707" x1="61.512" y1="-120.004" x2="306.647" y2="-40.7851" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EAABF0" />
                  <stop offset="1" stopColor="#4623E9" />
                </linearGradient>
                <linearGradient id="paint1_linear_387_1707" x1="61.512" y1="-120.004" x2="306.647" y2="-40.7851" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F0C3AB" />
                  <stop offset="1" stopColor="#E9A323" />
                </linearGradient>
                <linearGradient id="paint2_linear_387_1707" x1="61.512" y1="-120.004" x2="306.647" y2="-40.7851" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D3F0AB" />
                  <stop offset="1" stopColor="#44E923" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={`${styles['dynamics__content']} ${styles['dynamics__content--stat']}`}>
            <div className={styles['dynamics__content-title-wrapper']}>
              <h3 className={styles['dynamics__content-title']}>Активность серверов</h3>
            </div>
            <ul className={`list-reset ${styles['dynamics__content-servers']}`}>
              <li className={styles['dynamics__content-server']}>
                <div className={styles['dynamics__content-server-inf-wrapper']}>
                  <div className={styles['dynamics__content-server-inf']}>Сервер #1</div>
                  <div className={styles['dynamics__content-server-val']}>
                    843
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_391_1790)" />
                      <defs>
                        <linearGradient id="paint0_linear_391_1790" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                          <stop offset="0.44698" stopColor="#A8A8A8" />
                          <stop offset="1" stopColor="#3C3C3C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className={styles['dynamics__content-server-progress']}></div>
              </li>
              <li className={styles['dynamics__content-server']}>
                <div className={styles['dynamics__content-server-inf-wrapper']}>
                  <div className={styles['dynamics__content-server-inf']}>Сервер #2</div>
                  <div className={styles['dynamics__content-server-val']}>
                    843
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_391_1790)" />
                      <defs>
                        <linearGradient id="paint0_linear_391_1790" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                          <stop offset="0.44698" stopColor="#A8A8A8" />
                          <stop offset="1" stopColor="#3C3C3C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className={styles['dynamics__content-server-progress']}></div>
              </li>
              <li className={styles['dynamics__content-server']}>
                <div className={styles['dynamics__content-server-inf-wrapper']}>
                  <div className={styles['dynamics__content-server-inf']}>Сервер #3</div>
                  <div className={styles['dynamics__content-server-val']}>
                    843
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_391_1790)" />
                      <defs>
                        <linearGradient id="paint0_linear_391_1790" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                          <stop offset="0.44698" stopColor="#A8A8A8" />
                          <stop offset="1" stopColor="#3C3C3C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className={styles['dynamics__content-server-progress']}></div>
              </li>
              <li className={styles['dynamics__content-server']}>
                <div className={styles['dynamics__content-server-inf-wrapper']}>
                  <div className={styles['dynamics__content-server-inf']}>Сервер #4</div>
                  <div className={styles['dynamics__content-server-val']}>
                    843
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_391_1790)" />
                      <defs>
                        <linearGradient id="paint0_linear_391_1790" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                          <stop offset="0.44698" stopColor="#A8A8A8" />
                          <stop offset="1" stopColor="#3C3C3C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className={styles['dynamics__content-server-progress']}></div>
              </li>
              <li className={styles['dynamics__content-server']}>
                <div className={styles['dynamics__content-server-inf-wrapper']}>
                  <div className={styles['dynamics__content-server-inf']}>Сервер #5</div>
                  <div className={styles['dynamics__content-server-val']}>
                    843
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                      <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_391_1790)" />
                      <defs>
                        <linearGradient id="paint0_linear_391_1790" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                          <stop offset="0.44698" stopColor="#A8A8A8" />
                          <stop offset="1" stopColor="#3C3C3C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className={styles['dynamics__content-server-progress']}></div>
              </li>
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
              <li className={styles['dynamics__content-admin']}>
                <svg className={styles['dynamics__content-admin-icon']} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2009_1656)">
                    <g filter="url(#filter0_d_2009_1656)">
                      <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="5" fill="#80FF46" />
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_d_2009_1656" x="-40.3447" y="-40.3447" width="104.689" height="104.689" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="20.1724" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.373386 0 0 0 0 0.600962 0 0 0 0 0.199357 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2009_1656" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2009_1656" result="shape" />
                    </filter>
                    <clipPath id="clip0_2009_1656">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={styles['dynamics__content-admin-text']}>
                  Denny Walker
                  <span>Сервер #1</span>
                </div>
                <div className={styles['dynamics__content-admin-val']}>
                  4ч 23м
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                    <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_392_3090)" />
                    <defs>
                      <linearGradient id="paint0_linear_392_3090" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                        <stop offset="0.44698" stopColor="#A8A8A8" />
                        <stop offset="1" stopColor="#3C3C3C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </li>
              <li className={styles['dynamics__content-admin']}>
                <svg className={styles['dynamics__content-admin-icon']} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2009_1656)">
                    <g filter="url(#filter0_d_2009_1656)">
                      <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="5" fill="#80FF46" />
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_d_2009_1656" x="-40.3447" y="-40.3447" width="104.689" height="104.689" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="20.1724" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.373386 0 0 0 0 0.600962 0 0 0 0 0.199357 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2009_1656" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2009_1656" result="shape" />
                    </filter>
                    <clipPath id="clip0_2009_1656">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={styles['dynamics__content-admin-text']}>
                  Denny Walker
                  <span>Сервер #1</span>
                </div>
                <div className={styles['dynamics__content-admin-val']}>
                  4ч 23м
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                    <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_392_3090)" />
                    <defs>
                      <linearGradient id="paint0_linear_392_3090" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                        <stop offset="0.44698" stopColor="#A8A8A8" />
                        <stop offset="1" stopColor="#3C3C3C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </li>
              <li className={styles['dynamics__content-admin']}>
                <svg className={styles['dynamics__content-admin-icon']} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2009_1656)">
                    <g filter="url(#filter0_d_2009_1656)">
                      <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="5" fill="#80FF46" />
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_d_2009_1656" x="-40.3447" y="-40.3447" width="104.689" height="104.689" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="20.1724" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.373386 0 0 0 0 0.600962 0 0 0 0 0.199357 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2009_1656" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2009_1656" result="shape" />
                    </filter>
                    <clipPath id="clip0_2009_1656">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={styles['dynamics__content-admin-text']}>
                  Denny Walker
                  <span>Сервер #1</span>
                </div>
                <div className={styles['dynamics__content-admin-val']}>
                  4ч 23м
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                    <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_392_3090)" />
                    <defs>
                      <linearGradient id="paint0_linear_392_3090" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                        <stop offset="0.44698" stopColor="#A8A8A8" />
                        <stop offset="1" stopColor="#3C3C3C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </li>
              <li className={styles['dynamics__content-admin']}>
                <svg className={styles['dynamics__content-admin-icon']} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2009_1656)">
                    <g filter="url(#filter0_d_2009_1656)">
                      <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="5" fill="#80FF46" />
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_d_2009_1656" x="-40.3447" y="-40.3447" width="104.689" height="104.689" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="20.1724" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.373386 0 0 0 0 0.600962 0 0 0 0 0.199357 0 0 0 0.15 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2009_1656" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2009_1656" result="shape" />
                    </filter>
                    <clipPath id="clip0_2009_1656">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={styles['dynamics__content-admin-text']}>
                  Denny Walker
                  <span>Сервер #1</span>
                </div>
                <div className={styles['dynamics__content-admin-val']}>
                  4ч 23м
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="#FECC0A" />
                    <path d="M12.6188 8.7V0.5H3.38121V8.7H0L8 16.5L16 8.7H12.6188Z" fill="url(#paint0_linear_392_3090)" />
                    <defs>
                      <linearGradient id="paint0_linear_392_3090" x1="8.22748" y1="-22.6213" x2="17.2942" y2="19.7507" gradientUnits="userSpaceOnUse">
                        <stop offset="0.44698" stopColor="#A8A8A8" />
                        <stop offset="1" stopColor="#3C3C3C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
