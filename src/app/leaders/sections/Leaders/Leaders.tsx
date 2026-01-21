import styles from './Leaders.module.scss'
import adminsStyles from '@/app/admins/sections/Admins/Admins.module.scss'
import helpersStyles from '@/app/helpers/sections/Helpers/Helpers.module.scss'

export default function Leaders() {
  return (
    <section className={styles['leaders']}>
      <div className="container">
        <div className={adminsStyles['admins__table']}>
          <div className={adminsStyles['admins__table-header']}>
            <div className={adminsStyles['admins__table-header-column']}>
              Ник
            </div>
            <div className={adminsStyles['admins__table-header-column']}>
              Фракция
            </div>
            <div className={adminsStyles['admins__table-header-column']}>
              Принятно
            </div>
            <div className={adminsStyles['admins__table-header-column']}>
              Уволено
            </div>
            <div className={adminsStyles['admins__table-header-column']}>
              Онлайн сегодня
            </div>
            <div className={adminsStyles['admins__table-header-column']}>
              Последний вход
            </div>
            <div className={adminsStyles['admins__table-header-column']}>
              Деньги
            </div>
          </div>
          <div className={adminsStyles['admins__table-row']}>
            <div className={`${adminsStyles['admins__table-column']} ${helpersStyles['helpers__table-column']}`}>
              Denny Walker
              <span>ID:14552</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              Городская больница
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__green']}>41</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__red']}>31</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <div className={styles['leaders__online']}>
                5ч 32м
                <span>Онлайн</span>
              </div>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="5" fill="#80FF46" />
              </svg>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              1.457.000₽
            </div>
          </div>
          <div className={adminsStyles['admins__table-row']}>
            <div className={`${adminsStyles['admins__table-column']} ${helpersStyles['helpers__table-column']}`}>
              Denny Walker
              <span>ID:14552</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              Городская больница
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__green']}>41</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__red']}>31</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <div className={styles['leaders__online']}>
                5ч 32м
                <span>Онлайн</span>
              </div>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="5" fill="#80FF46" />
              </svg>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              1.457.000₽
            </div>
          </div>
          <div className={adminsStyles['admins__table-row']}>
            <div className={`${adminsStyles['admins__table-column']} ${helpersStyles['helpers__table-column']}`}>
              Denny Walker
              <span>ID:14552</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              Городская больница
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__green']}>41</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__red']}>31</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <div className={styles['leaders__online']}>
                5ч 32м
                <span>Онлайн</span>
              </div>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="5" fill="#80FF46" />
              </svg>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              1.457.000₽
            </div>
          </div>
          <div className={adminsStyles['admins__table-row']}>
            <div className={`${adminsStyles['admins__table-column']} ${helpersStyles['helpers__table-column']}`}>
              Denny Walker
              <span>ID:14552</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              Городская больница
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__green']}>41</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__red']}>31</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <div className={styles['leaders__online']}>
                5ч 32м
                <span>Онлайн</span>
              </div>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="5" fill="#80FF46" />
              </svg>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              1.457.000₽
            </div>
          </div>
          <div className={adminsStyles['admins__table-row']}>
            <div className={`${adminsStyles['admins__table-column']} ${helpersStyles['helpers__table-column']}`}>
              Denny Walker
              <span>ID:14552</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              Городская больница
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__green']}>41</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <span className={styles['leaders__red']}>31</span>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <div className={styles['leaders__online']}>
                5ч 32м
                <span>Онлайн</span>
              </div>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="5" fill="#80FF46" />
              </svg>
            </div>
            <div className={adminsStyles['admins__table-column']}>
              1.457.000₽
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
