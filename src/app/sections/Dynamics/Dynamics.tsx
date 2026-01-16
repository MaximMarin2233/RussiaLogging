import styles from './Dynamics.module.scss'

export default function Dynamics() {
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
                <stop offset="0.44698" stop-color="#DADADA" />
                <stop offset="1" stop-color="#515151" />
              </linearGradient>
              <linearGradient id="paint1_linear_380_1382" x1="16.0088" y1="-23.1985" x2="26.6141" y2="30.0807" gradientUnits="userSpaceOnUse">
                <stop offset="0.44698" stop-color="#DADADA" />
                <stop offset="1" stop-color="#515151" />
              </linearGradient>
              <linearGradient id="paint2_linear_380_1382" x1="16.0088" y1="-23.1985" x2="26.6141" y2="30.0807" gradientUnits="userSpaceOnUse">
                <stop offset="0.44698" stop-color="#DADADA" />
                <stop offset="1" stop-color="#515151" />
              </linearGradient>
              <linearGradient id="paint3_linear_380_1382" x1="16.0088" y1="-23.1985" x2="26.6141" y2="30.0807" gradientUnits="userSpaceOnUse">
                <stop offset="0.44698" stop-color="#DADADA" />
                <stop offset="1" stop-color="#515151" />
              </linearGradient>
            </defs>
          </svg>
          <h2 className={'main-title'}>Динамика доната</h2>
        </div>

        <div className={styles['dynamics__content']}>
          <div className={styles['dynamics__content-title-wrapper']}>
            <h3 className={styles['dynamics__content-title']}>График за неделю</h3>
            <div className={styles['dynamics__content-tabs']}>
              <button className={`btn-reset ${styles['dynamics__content-tab']} ${styles['dynamics__content-tab--active']}`}>7 дней</button>
              <button className={`btn-reset ${styles['dynamics__content-tab']}`}>30 дней</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
