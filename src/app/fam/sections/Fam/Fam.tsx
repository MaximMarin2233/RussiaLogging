import styles from './Fam.module.scss'
import adminsStyles from '@/app/admins/sections/Admins/Admins.module.scss'
import helpersStyles from '@/app/helpers/sections/Helpers/Helpers.module.scss'
import logsStyles from '@/app/logs/sections/Logs/Logs.module.scss'

export default function Fam() {
  return (
    <section className={styles['fam']}>
      <div className="container">
        <div className={styles['fam__content-wrapper']}>
          <div className={styles['fam__content']}>
            <div className={styles['fam__inf']}>
              <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="86" height="86" rx="20" fill="white" fill-opacity="0.16" />
                <path d="M43 21C43 21 31.8571 24.75 31.8571 32.25H54.1429C54.1429 24.75 43 21 43 21ZM22.5714 24.75C22.5714 24.75 17 28.5 17 34.125V36H28.1429V34.125C28.1429 28.5 22.5714 24.75 22.5714 24.75ZM63.4286 24.75C63.4286 24.75 57.8571 28.5 57.8571 34.125V36H69V34.125C69 28.5 63.4286 24.75 63.4286 24.75ZM31.8571 36V43.5H28.1429V39.75H17V66H35.5714C35.5714 62.25 35.5714 54.75 43 54.75C50.4286 54.75 50.4286 62.25 50.4286 66H69V39.75H57.8571V43.5H54.1429V36H31.8571ZM37.4286 39.75C39.2857 39.75 39.2857 42.7135 39.2857 43.5V47.25H35.5714V43.5C35.5714 42.4989 35.5714 39.75 37.4286 39.75ZM48.5714 39.75C50.4286 39.75 50.4286 42.7135 50.4286 43.5V47.25H46.7143V43.5C46.7143 42.4989 46.7143 39.75 48.5714 39.75ZM22.5714 43.5C24.4745 43.5 24.4286 46.0323 24.4286 47.25V51H20.7143V47.25C20.7143 46.0323 20.7686 43.5 22.5714 43.5ZM63.4286 43.5C65.3316 43.5 65.2857 46.0323 65.2857 47.25V51H61.5714V47.25C61.5714 46.0323 61.6257 43.5 63.4286 43.5Z" fill="white" />
              </svg>
              <div className={styles['fam__inf-text']}>
                <div className={styles['fam__inf-title']}>
                  Семья
                  <span>Золотоые драконы</span>
                </div>
                <div className={styles['fam__inf-list']}>
                  <div className={styles['fam__inf-item']}>
                    ID:2
                  </div>
                  <div className={styles['fam__inf-item']}>
                    Создана: 28.12.2025
                  </div>
                  <div className={styles['fam__inf-item']}>
                    Возраст: 274 дня
                  </div>
                  <div className={styles['fam__inf-item']}>
                    Уровень семьи: 8
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['fam__online']}>
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38.7327" height="38.7327" rx="19.3663" fill="#43FE0A" fill-opacity="0.1" />
                <circle cx="19.3666" cy="19.3656" r="14.5248" fill="#80FF46" fill-opacity="0.1" />
                <circle cx="19.3672" cy="19.3662" r="8.06931" fill="#80FF46" />
              </svg>
              Активна
            </div>
          </div>

          <div className={adminsStyles['admins__filters']}>
            <div className={`${adminsStyles['admins__filters-title']} ${helpersStyles['helpers__filters-title']}`}>
              Список участников семьи
              <input className={helpersStyles['helpers__filters-input']} type="text" placeholder='Поиск по никнейму' />
            </div>
            <button className={`btn-reset ${styles['fam__btn-back']}`}>
              Вернуться обратно
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33366 7.52511L12.6945 12L8.33366 16.4749L9.8199 18L15.667 12L9.8199 6L8.33366 7.52511Z" fill="white" />
              </svg>
            </button>
          </div>

          <div className={styles['fam__cards']}>
            <div className={styles['fam__card']}>
              <img src="fam/fam-card.png" alt="" />
              <div className={styles['fam__card-title']}>
                Denny Walker
                <span>Заместитель</span>
              </div>
              <div className={styles['fam__card-online']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="19.9336" height="19.9336" rx="9.96681" fill="#43FE0A" fill-opacity="0.1" />
                  <ellipse cx="9.96632" cy="9.9673" rx="7.47511" ry="7.47511" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="9.96632" cy="9.96729" r="4.15284" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
            </div>
            <div className={styles['fam__card']}>
              <img src="fam/fam-card.png" alt="" />
              <div className={styles['fam__card-title']}>
                Denny Walker
                <span>Заместитель</span>
              </div>
              <div className={styles['fam__card-online']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="19.9336" height="19.9336" rx="9.96681" fill="#43FE0A" fill-opacity="0.1" />
                  <ellipse cx="9.96632" cy="9.9673" rx="7.47511" ry="7.47511" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="9.96632" cy="9.96729" r="4.15284" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
            </div>
            <div className={styles['fam__card']}>
              <img src="fam/fam-card.png" alt="" />
              <div className={styles['fam__card-title']}>
                Denny Walker
                <span>Заместитель</span>
              </div>
              <div className={styles['fam__card-online']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="19.9336" height="19.9336" rx="9.96681" fill="#43FE0A" fill-opacity="0.1" />
                  <ellipse cx="9.96632" cy="9.9673" rx="7.47511" ry="7.47511" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="9.96632" cy="9.96729" r="4.15284" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
            </div>
            <div className={styles['fam__card']}>
              <img src="fam/fam-card.png" alt="" />
              <div className={styles['fam__card-title']}>
                Denny Walker
                <span>Заместитель</span>
              </div>
              <div className={styles['fam__card-online']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="19.9336" height="19.9336" rx="9.96681" fill="#43FE0A" fill-opacity="0.1" />
                  <ellipse cx="9.96632" cy="9.9673" rx="7.47511" ry="7.47511" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="9.96632" cy="9.96729" r="4.15284" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
            </div>
            <div className={styles['fam__card']}>
              <img src="fam/fam-card.png" alt="" />
              <div className={styles['fam__card-title']}>
                Denny Walker
                <span>Заместитель</span>
              </div>
              <div className={styles['fam__card-online']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="19.9336" height="19.9336" rx="9.96681" fill="#43FE0A" fill-opacity="0.1" />
                  <ellipse cx="9.96632" cy="9.9673" rx="7.47511" ry="7.47511" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="9.96632" cy="9.96729" r="4.15284" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
            </div>
            <div className={styles['fam__card']}>
              <img src="fam/fam-card.png" alt="" />
              <div className={styles['fam__card-title']}>
                Denny Walker
                <span>Заместитель</span>
              </div>
              <div className={styles['fam__card-online']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="19.9336" height="19.9336" rx="9.96681" fill="#43FE0A" fill-opacity="0.1" />
                  <ellipse cx="9.96632" cy="9.9673" rx="7.47511" ry="7.47511" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="9.96632" cy="9.96729" r="4.15284" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
            </div>
            <div className={styles['fam__card']}>
              <img src="fam/fam-card.png" alt="" />
              <div className={styles['fam__card-title']}>
                Denny Walker
                <span>Заместитель</span>
              </div>
              <div className={styles['fam__card-online']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="19.9336" height="19.9336" rx="9.96681" fill="#43FE0A" fill-opacity="0.1" />
                  <ellipse cx="9.96632" cy="9.9673" rx="7.47511" ry="7.47511" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="9.96632" cy="9.96729" r="4.15284" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
            </div>
            <div className={styles['fam__card']}>
              <img src="fam/fam-card.png" alt="" />
              <div className={styles['fam__card-title']}>
                Denny Walker
                <span>Заместитель</span>
              </div>
              <div className={styles['fam__card-online']}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="19.9336" height="19.9336" rx="9.96681" fill="#43FE0A" fill-opacity="0.1" />
                  <ellipse cx="9.96632" cy="9.9673" rx="7.47511" ry="7.47511" fill="#80FF46" fill-opacity="0.1" />
                  <circle cx="9.96632" cy="9.96729" r="4.15284" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
            </div>
          </div>

          <div className={logsStyles['logs__filters-pagination']}>
            <button className={`btn-reset ${logsStyles['logs__filters-pagination-btn']} ${logsStyles['logs__filters-pagination-btn--nav']} ${logsStyles['logs__filters-pagination-btn--inactive']}`}>
              Предыдущая
            </button>
            <button className={`btn-reset ${logsStyles['logs__filters-pagination-btn']} ${logsStyles['logs__filters-pagination-btn--active']}`}>
              1
            </button>
            <button className={`btn-reset ${logsStyles['logs__filters-pagination-btn']}`}>
              2
            </button>
            <button className={`btn-reset ${logsStyles['logs__filters-pagination-btn']}`}>
              3
            </button>
            <button className={`btn-reset ${logsStyles['logs__filters-pagination-btn']} ${logsStyles['logs__filters-pagination-btn--nav']}`}>
              Следующая
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
