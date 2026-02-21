'use client'

import { useEffect, useState } from 'react'
import styles from './Money.module.scss'

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

  return (
    <section className={styles['money']}>
      <div className="container">
        <div className={styles['money__content']}>
          <h2 className={styles['money__title']}>
            График баланса за неделю
          </h2>

          {balanceWeek.length > 0 ? (
            <div className={styles['money__graph']}>
              {balanceWeek.map((item, index) => (
                <div key={index}>
                  {formatDate(item.date)} — {formatMoney(item.total_amount)} ₽
                </div>
              ))}
            </div>
          ) : (
            <div className={styles['money__empty']}>
              Нет данных за последние 7 дней
            </div>
          )}
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