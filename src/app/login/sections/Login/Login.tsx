'use client'

import { useState } from 'react'
import styles from './Login.module.scss'

export default function Login() {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {

    try {

      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login,
          password
        })
      })

      const data = await res.json()

      console.log('LOGIN:', data)

      if (data.success) {
        window.location.href = '/'
      }

    } catch (err) {

      console.error('LOGIN ERROR:', err)

    }

  }

  return (
    <section className={styles.login}>
      <div className="container">

        <div className={styles['login__content']}>
          <h2 className={styles['login__title']}>
            Вход
          </h2>

          <div className={styles['login__form']}>

            <input
              className={styles['login__form-input']}
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />

            <input
              className={styles['login__form-input']}
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className={`btn-reset ${styles['login__form-btn']}`}
            >
              Войти
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}