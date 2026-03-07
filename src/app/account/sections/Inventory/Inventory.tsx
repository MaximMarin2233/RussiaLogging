import { useEffect, useState } from 'react'

import styles from './Inventory.module.scss'

type InventoryItem = {
  item_id: number
  item_name: string
  item_count: number
}

type InventoryData = {
  char_id: number
  max_slots: number
  total_items: number
  items: InventoryItem[]
}

export default function Inventory() {
  const [inventory, setInventory] = useState<InventoryData | null>(null)

  const [loading, setLoading] = useState(false)

  const handleClearInventory = async () => {
    if (loading) return

    const confirmAction = confirm('Вы уверены, что хотите очистить инвентарь?')
    if (!confirmAction) return

    setLoading(true)

    try {
      const res = await fetch('/api/account/clear-inventory', {
        method: 'POST'
      })

      const data = await res.json()

      if (res.ok) {
        alert('Инвентарь успешно очищен')
      } else {
        alert(`Ошибка: ${data.error}`)
      }
    } catch (err: any) {
      alert(`Ошибка: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    fetch('/api/account/inventory')
      .then(res => res.json())
      .then(data => {
        console.log('INVENTORY:', data)
        setInventory(data)
      })
      .catch(err => {
        console.error('INVENTORY ERROR:', err)
      })

  }, [])

  if (!inventory) return null

  const progress =
    (inventory.total_items / inventory.max_slots) * 100

  const slots = Array.from(
    { length: inventory.max_slots },
    (_, index) => inventory.items[index] || null
  )



  return (
    <section className={styles['inventory']}>
      <div className="container">
        <div className={styles['inventory__content-wrapper']}>
          <div className={styles['inventory__content']}>

            <div className={styles['inventory__title-wrapper']}>

              <h2 className={styles['inventory__title']}>
                Инвентарь
              </h2>

              <div className={styles['inventory__progress']}>
                <div
                  className={styles['inventory__progress-bar']}
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className={styles['inventory__slots']}>
                Слоты: {inventory.total_items}/{inventory.max_slots}
              </div>

            </div>


            <div className={styles['inventory__cards']}>

              {slots.map((item, index) => {

                if (!item) {
                  return (
                    <div
                      key={index}
                      className={styles['inventory__card']}
                    >
                      <div className={styles['inventory__card-title-empty']}>
                        Пустой
                      </div>
                    </div>
                  )
                }

                return (
                  <div
                    key={index}
                    className={styles['inventory__card']}
                  >
                    <div className={styles['inventory__card-title']}>
                      {item.item_name}
                      <span>x{item.item_count}</span>
                    </div>

                    <img
                      src={`/inventory/inventory-card-1.png`}
                      alt={item.item_name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />

                  </div>
                )

              })}

            </div>

          </div>
          <div className={styles['inventory__nav']}>
            <h2 className={styles['inventory__title']}>
              Управление инвентарем
            </h2>
            <div className={styles['inventory__nav-btns']}>
              {/* <button className={`btn-reset ${styles['inventory__nav-btn']}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                  <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                </svg>
                Выдать предмет
              </button> */}
              <button className={`btn-reset inactive ${styles['inventory__nav-btn']}`}
                onClick={handleClearInventory}
                disabled={loading}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                  <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                </svg>
                {loading ? 'Очистка...' : 'Очистить инвентарь'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
