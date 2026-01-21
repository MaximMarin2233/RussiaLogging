import styles from './Businesses.module.scss'
import adminsStyles from '@/app/admins/sections/Admins/Admins.module.scss'
import helpersStyles from '@/app/helpers/sections/Helpers/Helpers.module.scss'

import CustomSelect from '@/components/CustomSelect/CustomSelect'

export default function Businesses() {
  const serverOptions = [
    { value: '1', label: 'Все серверы' },
    { value: '2', label: 'Опция 2' },
    { value: '3', label: 'Опция 3' },
  ]
  return (
    <section className={styles['businesses']}>
      <div className="container">
        <div className={`${adminsStyles['admins__filters']} ${styles['businesses__filters']}`}>
          <div className={`${adminsStyles['admins__filters-title']} ${helpersStyles['helpers__filters-title']}`}>
            Бизнесы
            <input className={helpersStyles['helpers__filters-input']} type="text" placeholder='Введите название бизнеса' />
          </div>
          <div className={adminsStyles['admins__filters-selects']}>
            <CustomSelect options={serverOptions} className={adminsStyles['admins__filters-select']} />
          </div>
        </div>

        <div className={styles['businesses__cards']}>
          <div className={styles['businesses__card']}>
            <div className={styles['businesses__card-text']}>
              <div className={styles['businesses__card-label']}>
                Сервер #4
              </div>
              <div className={styles['businesses__card-title']}>
                Казино
              </div>
              <div className={styles['businesses__card-descr']}>
                Владелец: Denny Walker
              </div>
              <div className={styles['businesses__card-id']}>
                ID бизнеса: 539835
              </div>
            </div>
            <button className={`btn-reset ${styles['businesses__card-btn']}`}>
              Просмотреть
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35156 3.71456L9.10885 8.18945L4.35156 12.6643L5.97292 14.1895L12.3516 8.18945L5.97292 2.18945L4.35156 3.71456Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className={styles['businesses__card']}>
            <div className={styles['businesses__card-text']}>
              <div className={styles['businesses__card-label']}>
                Сервер #4
              </div>
              <div className={styles['businesses__card-title']}>
                Казино
              </div>
              <div className={styles['businesses__card-descr']}>
                Владелец: Denny Walker
              </div>
              <div className={styles['businesses__card-id']}>
                ID бизнеса: 539835
              </div>
            </div>
            <button className={`btn-reset ${styles['businesses__card-btn']}`}>
              Просмотреть
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35156 3.71456L9.10885 8.18945L4.35156 12.6643L5.97292 14.1895L12.3516 8.18945L5.97292 2.18945L4.35156 3.71456Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className={styles['businesses__card']}>
            <div className={styles['businesses__card-text']}>
              <div className={styles['businesses__card-label']}>
                Сервер #4
              </div>
              <div className={styles['businesses__card-title']}>
                Казино
              </div>
              <div className={styles['businesses__card-descr']}>
                Владелец: Denny Walker
              </div>
              <div className={styles['businesses__card-id']}>
                ID бизнеса: 539835
              </div>
            </div>
            <button className={`btn-reset ${styles['businesses__card-btn']}`}>
              Просмотреть
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35156 3.71456L9.10885 8.18945L4.35156 12.6643L5.97292 14.1895L12.3516 8.18945L5.97292 2.18945L4.35156 3.71456Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className={styles['businesses__card']}>
            <div className={styles['businesses__card-text']}>
              <div className={styles['businesses__card-label']}>
                Сервер #4
              </div>
              <div className={styles['businesses__card-title']}>
                Казино
              </div>
              <div className={styles['businesses__card-descr']}>
                Владелец: Denny Walker
              </div>
              <div className={styles['businesses__card-id']}>
                ID бизнеса: 539835
              </div>
            </div>
            <button className={`btn-reset ${styles['businesses__card-btn']}`}>
              Просмотреть
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35156 3.71456L9.10885 8.18945L4.35156 12.6643L5.97292 14.1895L12.3516 8.18945L5.97292 2.18945L4.35156 3.71456Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className={styles['businesses__card']}>
            <div className={styles['businesses__card-text']}>
              <div className={styles['businesses__card-label']}>
                Сервер #4
              </div>
              <div className={styles['businesses__card-title']}>
                Казино
              </div>
              <div className={styles['businesses__card-descr']}>
                Владелец: Denny Walker
              </div>
              <div className={styles['businesses__card-id']}>
                ID бизнеса: 539835
              </div>
            </div>
            <button className={`btn-reset ${styles['businesses__card-btn']}`}>
              Просмотреть
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35156 3.71456L9.10885 8.18945L4.35156 12.6643L5.97292 14.1895L12.3516 8.18945L5.97292 2.18945L4.35156 3.71456Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className={styles['businesses__card']}>
            <div className={styles['businesses__card-text']}>
              <div className={styles['businesses__card-label']}>
                Сервер #4
              </div>
              <div className={styles['businesses__card-title']}>
                Казино
              </div>
              <div className={styles['businesses__card-descr']}>
                Владелец: Denny Walker
              </div>
              <div className={styles['businesses__card-id']}>
                ID бизнеса: 539835
              </div>
            </div>
            <button className={`btn-reset ${styles['businesses__card-btn']}`}>
              Просмотреть
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35156 3.71456L9.10885 8.18945L4.35156 12.6643L5.97292 14.1895L12.3516 8.18945L5.97292 2.18945L4.35156 3.71456Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
