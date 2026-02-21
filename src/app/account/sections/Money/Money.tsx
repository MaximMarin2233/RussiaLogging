'use client'

import { useEffect, useState } from 'react'
import styles from './Money.module.scss'
import activityStyles from '@/app/account/sections/Activity/Activity.module.scss'

type BalanceItem = {
  date: string
  total_amount: number
}

type Operation = {
  id: number
  date: string
  reason_name: string
  cash_value: number | null
  bank_value: number | null
}

export default function Money() {
  const [balanceWeek, setBalanceWeek] = useState<BalanceItem[]>([])
  const [operations, setOperations] = useState<Operation[]>([])

  useEffect(() => {
    fetch('/api/account/balance')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBalanceWeek(data.balanceWeek || [])
        setOperations(data.lastOperations || [])
      })
      .catch(console.error)
  }, [])

  function formatMoney(value: number) {
    return value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleString('ru-RU')
  }

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
    const dayData = balanceWeek.find(d => new Date(d.date).getDay() === index)
    const amount = Number(dayData?.total_amount || 0)

    return {
      dayName,
      amount
    }
  })

  const totalAmount = mapped.reduce((sum, d) => sum + d.amount, 0)

  return (
    <section className={styles['money']}>
      <div className="container">
        <div className={styles['money__content']}>
          <h2 className={styles['money__title']}>
            График баланса за неделю
          </h2>

          <div className={activityStyles['activity__chart-wrapper']}>
            <div className={activityStyles['activity__chart']}>

              {mapped.map((day, index) => {
                const percent = totalAmount > 0
                  ? (day.amount / totalAmount) * 100
                  : 0

                return (
                  <div key={index} className={activityStyles['activity__chart-block']}>
                    <div
                      className={activityStyles['activity__chart-block-progress']}
                      style={{ height: `${percent}%` }}
                    >
                      <span>{formatMoney(day.amount)} ₽</span>
                    </div>

                    <div className={activityStyles['activity__chart-block-text']}>
                      {day.dayName}
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>

        <h2 className={`main-title ${styles['money__operations-title']}`}>
          Последние операции
        </h2>

        <div className={styles['money__operations']}>
          {operations.length > 0 ? (
            operations.map((operation) => {
              const amount =
                (operation.cash_value || 0) +
                (operation.bank_value || 0)

              const isPositive = amount >= 0

              return (
                <div
                  key={operation.id}
                  className={styles['money__operation']}
                >
                  ...
                </div>
              )
            })
          ) : (
            <div className={styles['money__empty']}>
              Операции отсутствуют
            </div>
          )}
        </div>
      </div>
    </section>
  )
}