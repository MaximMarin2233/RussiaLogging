import { useEffect, useState } from 'react'

import styles from './Activity.module.scss'
import moneyStyles from '@/app/account/sections/Money/Money.module.scss'

type ActivityDay = {
  date: string
  total_amount: string
}

type LastAction = {
  date: string
  reason_text: string | null
}

type CurrentCharacter = {
  char_is_online: number
  char_reg_time: number
}

type Props = {
  character: CurrentCharacter
}

export default function Activity({ character }: Props) {
  const [activity, setActivity] = useState<ActivityDay[]>([])
  const [lastActions, setLastActions] = useState<LastAction[]>([])

  useEffect(() => {
    fetch('/api/account/activity')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setActivity(data.activityWeek || [])
        setLastActions(data.lastActions || [])
      })
      .catch(console.error)
  }, [])

  const weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ]

  const mapped = weekDays.map((dayName, index) => {
    const dayData = activity.find(d => new Date(d.date).getDay() === index)
    const hours = dayData ? Number(dayData.total_amount) / 3600 : 0

    return {
      date: new Date(1970, 0, 1, index),
      dayName,
      hours
    }
  })

  const totalHours = mapped.reduce((sum, d) => sum + d.hours, 0)

  return (
    <section className={styles['activity']}>
      <div className="container">
        <div className={moneyStyles['money__content']}>
          <div className={styles['activity__title-wrapper']}>
            <h2 className={moneyStyles['money__title']}>
              Недельная активность
            </h2>
            <div className={styles['activity__label']}>
              Всего за неделю: {totalHours.toFixed(1)} часов
            </div>
          </div>

          <div className={styles['activity__chart-wrapper']}>
            <div className={styles['activity__chart']}>
              {mapped.map((day, index) => {
                const percent = totalHours > 0 ? (day.hours / totalHours) * 100 : 0

                return (
                  <div key={index} className={styles['activity__chart-block']}>
                    <div
                      className={styles['activity__chart-block-progress']}
                      style={{ height: `${percent}%` }}
                    >
                      <span>{day.hours.toFixed(1)} часов</span>
                    </div>

                    <div className={styles['activity__chart-block-text']}>
                      {day.dayName}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className={styles['activity__inf']}>
          <div className={styles['activity__actions']}>
            <h2 className={moneyStyles['money__title']}>Последние действия</h2>
            <div className={styles['activity__actions-content']}>
              {lastActions.length > 0
                ? lastActions.map((action, index) => {
                  const date = new Date(action.date)
                  const timeString = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
                  return (
                    <div key={index} className={styles['activity__action']}>
                      {timeString}
                      <span>{action.reason_text || '-'}</span>
                    </div>
                  )
                })
                : Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className={styles['activity__action']}>
                      00:00
                      <span>-</span>
                    </div>
                  ))}
            </div>
          </div>
          <div className={styles['activity__actions']}>
            <h2 className={moneyStyles['money__title']}>
              Статистика
            </h2>
            <div className={styles['activity__actions-content']}>
              <div className={`${styles['activity__action']} ${styles['activity__action--stat']}`}>
                Дней с регистрации
                <span>
                  {Math.floor((Date.now() - character.char_reg_time * 1000) / (1000 * 60 * 60 * 24))} дней
                </span>
              </div>

              <div className={`${styles['activity__action']} ${styles['activity__action--stat']}`}>
                Онлайн
                {character.char_is_online ? (
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20.494" height="20.494" rx="10.247" fill="#43FE0A" fillOpacity="0.1" />
                    <circle cx="10.2458" cy="10.2477" r="7.68525" fill="#80FF46" fillOpacity="0.1" />
                    <circle cx="10.2481" cy="10.2471" r="4.26958" fill="#80FF46" />
                  </svg>
                ) : (
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20.494" height="20.494" rx="10.247" fill="#FE0A0A" fillOpacity="0.1" />
                    <circle cx="10.2458" cy="10.2477" r="7.68525" fill="#FF4646" fillOpacity="0.1" />
                    <circle cx="10.2481" cy="10.2471" r="4.26958" fill="#FF4646" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
