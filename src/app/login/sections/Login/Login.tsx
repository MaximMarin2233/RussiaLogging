import styles from './Login.module.scss'

export default function Login() {
  return (
    <section className={styles.login}>
      <div className="container">

        <div className={styles['login__content']}>
          <h2 className={styles['login__title']}>
            Вход
          </h2>

          <div className={styles['login__form']}>
            <input className={styles['login__form-input']} type="text" placeholder='Введите логин' />
            <input className={styles['login__form-input']} type="text" placeholder='Введите пароль' />

            <button className={`btn-reset ${styles['login__form-btn']}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9926 17.4375C18.0266 17.706 17.9425 17.9763 17.7631 18.1805C17.5846 18.3837 17.3258 18.5 17.0548 18.5H11.7518C11.4373 18.5 11.3693 18.1389 11.3693 18.1389L9.97159 12.8284L11.596 10.2421C15.012 11.0409 17.5345 13.7718 17.9926 17.4375ZM7.17515 18.5H1.94493C1.67388 18.5 1.41605 18.3837 1.23661 18.1805C1.05717 17.9763 0.974058 17.706 1.00711 17.4375C1.46516 13.7718 3.98677 11.0409 7.40276 10.2421L9.02717 12.8284L7.5567 18.1389C7.5567 18.1389 7.48964 18.5 7.17515 18.5Z" fill="url(#paint0_linear_608_2252)" />
                <path d="M13.4664 5.47014C13.4664 7.66279 11.6905 9.44028 9.49982 9.44028C7.30914 9.44028 5.53324 7.66279 5.53324 5.47014C5.53324 3.27749 7.30914 1.5 9.49982 1.5C11.6905 1.5 13.4664 3.27749 13.4664 5.47014Z" fill="url(#paint1_linear_608_2252)" />
                <defs>
                  <linearGradient id="paint0_linear_608_2252" x1="9.7417" y1="-23.0664" x2="19.3751" y2="21.9539" gradientUnits="userSpaceOnUse">
                    <stop offset="0.44698" stop-color="#A8A8A8" />
                    <stop offset="1" stop-color="#3C3C3C" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_608_2252" x1="9.7417" y1="-23.0664" x2="19.3751" y2="21.9539" gradientUnits="userSpaceOnUse">
                    <stop offset="0.44698" stop-color="#A8A8A8" />
                    <stop offset="1" stop-color="#3C3C3C" />
                  </linearGradient>
                </defs>
              </svg>
              Войти
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
