import { useEffect, useState } from 'react'

import styles from './Activity.module.scss'
import moneyStyles from '@/app/account/sections/Money/Money.module.scss'

type ActivityDay = {
  date: string
  total_amount: string
}

export default function Activity() {
  const [activity, setActivity] = useState<ActivityDay[]>([])

  useEffect(() => {
    fetch('/api/account/activity')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setActivity(data.activityWeek || [])
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
            <h2 className={moneyStyles['money__title']}>
              Последние действия
            </h2>
            <div className={styles['activity__actions-content']}>
              <div className={styles['activity__action']}>
                00:00
                <span>Передал деньги</span>
              </div>
              <div className={styles['activity__action']}>
                00:00
                <span>Передал деньги</span>
              </div>
              <div className={styles['activity__action']}>
                00:00
                <span>Передал деньги</span>
              </div>
              <div className={styles['activity__action']}>
                00:00
                <span>Передал деньги</span>
              </div>
            </div>
          </div>
          <div className={styles['activity__actions']}>
            <h2 className={moneyStyles['money__title']}>
              Статистика
            </h2>
            <div className={styles['activity__actions-content']}>
              <div className={`${styles['activity__action']} ${styles['activity__action--stat']}`}>
                Всего в игре
                <span>215 Часов</span>
              </div>
              <div className={`${styles['activity__action']} ${styles['activity__action--stat']}`}>
                Всего в игре
                <span>215 Часов</span>
              </div>
              <div className={`${styles['activity__action']} ${styles['activity__action--stat']}`}>
                Всего в игре
                <span>215 Часов</span>
              </div>
              <div className={`${styles['activity__action']} ${styles['activity__action--stat']}`}>
                Всего в игре
                <span>215 Часов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
