'use client'

import cardsInfStyles from '@/components/CardsInf/CardsInf.module.scss'
import { useEffect, useState } from 'react'
import { useServer } from '@/context/ServerContext'

type Stats = {
  totalMoney: number
  onlinePlayers: number
  onlineAdmins: number
}

export default function MainInf() {
  const { server } = useServer()
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    fetch(`/api/stats?server=${server}`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err))
  }, [server])

  if (!stats) return <div>Загрузка...</div>

  function formatAmount(n: number) {
    if (n >= 1_000_000_000) {
      return `${(n / 1_000_000_000).toFixed(1).replace('.0', '')} Млрд.`
    }

    if (n >= 1_000_000) {
      return `${(n / 1_000_000).toFixed(1).replace('.0', '')} Млн.`
    }

    if (n >= 1_000) {
      return `${(n / 1_000).toFixed(1).replace('.0', '')} Тыс.`
    }

    return n.toString()
  }

  function calcTrend(current: number) {
    const fakePrev = current * 0.9
    const diff = current - fakePrev
    const percent = Math.abs((diff / fakePrev) * 100)

    return {
      percent: percent.toFixed(1),
      isUp: diff >= 0
    }
  }

  const weeklyBalance = Math.round(stats.totalMoney / 10)
  const trend = calcTrend(weeklyBalance)

  return (
    <section className={cardsInfStyles['cards-inf']}>
      <div className="container">
        <ul className={`${cardsInfStyles['cards-inf__list']} list-reset`}>
          <li className={cardsInfStyles['cards-inf__item']}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="cards-inf/cards-inf-1.png" alt="" aria-hidden={true} />
            <h2 className={cardsInfStyles['cards-inf__item-title']}>Общие деньги <br /> на серверах</h2>
            <div className={cardsInfStyles['cards-inf__item-inf']}>
              <div className={cardsInfStyles['cards-inf__item-price']}>
                +{formatAmount(stats.totalMoney)} ₽
              </div>

            </div>
          </li>
          <li className={cardsInfStyles['cards-inf__item']}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="cards-inf/cards-inf-2.png" alt="" aria-hidden={true} />
            <h2 className={cardsInfStyles['cards-inf__item-title']}>Баланс за неделю</h2>
            <div className={cardsInfStyles['cards-inf__item-inf']}>
              <div className={cardsInfStyles['cards-inf__item-price']}>+{formatAmount(weeklyBalance)} ₽</div>
              <div
                className={
                  trend.isUp
                    ? cardsInfStyles['cards-inf__item-percent']
                    : `${cardsInfStyles['cards-inf__item-percent']} ${cardsInfStyles['cards-inf__item-percent--yellow']}`
                }
              >
                {trend.isUp ? (
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.6253 16.218L34.9794 8.40283L27.0498 8.58145L29.4934 11.4193L21.2089 19.703L16.16 13.0226L3.30833 26.6864C2.82404 27.2016 2.84923 28.012 3.36431 28.4965C3.8795 28.9808 4.68988 28.9556 5.17436 28.4405L15.9467 16.9875L20.9397 23.595L31.1692 13.3655L33.6253 16.218Z" fill="#42F43D" />
                  </svg>
                ) : (
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.6253 21.0286L34.9794 28.8438L27.0498 28.6651L29.4934 25.8272L21.2089 17.5436L16.16 24.224L3.30833 10.5602C2.82404 10.045 2.84923 9.23459 3.36431 8.75011C3.8795 8.26582 4.68988 8.29101 5.17436 8.80609L15.9467 20.2591L20.9397 13.6516L31.1692 23.881L33.6253 21.0286Z" fill="#F4C93D" />
                  </svg>
                )} {trend.percent}%
              </div>
            </div>
          </li>
          <li className={cardsInfStyles['cards-inf__item']}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="cards-inf/cards-inf-3.png" alt="" aria-hidden={true} />
            <h2 className={cardsInfStyles['cards-inf__item-title']}>Игроков онлайн</h2>
            <div className={cardsInfStyles['cards-inf__item-inf']}>
              <div className={cardsInfStyles['cards-inf__item-price']}>{formatAmount(stats.onlinePlayers)}</div>
            </div>
          </li>
          <li className={cardsInfStyles['cards-inf__item']}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="cards-inf/cards-inf-4.png" alt="" aria-hidden={true} />
            <h2 className={cardsInfStyles['cards-inf__item-title']}>Админ-ов онлайн</h2>
            <div className={cardsInfStyles['cards-inf__item-inf']}>
              <div className={cardsInfStyles['cards-inf__item-val']}>
                {stats.onlineAdmins}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
