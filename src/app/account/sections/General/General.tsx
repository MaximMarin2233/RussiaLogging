'use client'

import styles from './General.module.scss'

import { useEffect, useState } from 'react'
import { useServer } from '@/context/ServerContext'

type Character = {
  char_id: number
  char_name: string
  char_skin: number
  char_level: number
  char_game_for_hour: number
  char_reg_time: string
  char_is_online: number
}

export default function General() {
  const { server } = useServer()
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/characters?server=${server}`)
      .then(res => res.json())
      .then(data => {
        console.log('CHARACTERS DATA:', data)
        setCharacters(data.characters)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [server])

  if (loading) return <div>Загрузка...</div>

  return (
    <section className={styles['general']}>
      <div className="container">
        <h2 className={`main-title ${styles['general__title']}`}>Все персонажи этого аккаунта</h2>
        <div className={styles['general__characters']}>
          <div className={styles['general__character']}>
            <div className={styles['general__character-img-wrapper']}>
              <img src="/general/general-img.png" alt="" width={187} height={220} />
              <div className={styles['general__character-label']}>
                135
                <span>уровень</span>
              </div>
            </div>
            <ul className={`list-reset ${styles['general__character-list']}`}>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Никнейм
                  <span>Denny Walker</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  ID
                  <span>4355644</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Сервер
                  <span>#1</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Создан
                  <span>12/05/2025</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Игровое время
                  <span>215 часов</span>
                </div>
              </li>
            </ul>
            <div className={styles['general__character-inf']}>
              <div className={styles['general__character-current']}>
                Текущий
              </div>
              <div className={styles['general__character-online']}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20.494" height="20.494" rx="10.247" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="10.2458" cy="10.2477" r="7.68525" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="10.2481" cy="10.2471" r="4.26958" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
              <button className={`btn-reset ${styles['general__character-show']}`}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1449 7.81409C16.1724 4.71437 13.2861 2.92969 10.2462 2.92969C8.72622 2.92969 7.24895 3.37372 5.89976 4.20202C4.55057 5.03886 3.33801 6.25996 2.34747 7.81409C1.49355 9.15474 1.49355 11.3322 2.34747 12.6729C4.32001 15.7811 7.20625 17.5573 10.2462 17.5573C11.7662 17.5573 13.2434 17.1132 14.5926 16.2849C15.9418 15.4481 17.1544 14.227 18.1449 12.6729C18.9988 11.3408 18.9988 9.15474 18.1449 7.81409ZM10.2462 13.6976C8.33342 13.6976 6.79637 12.152 6.79637 10.2477C6.79637 8.34351 8.33342 6.79793 10.2462 6.79793C12.159 6.79793 13.696 8.34351 13.696 10.2477C13.696 12.152 12.159 13.6976 10.2462 13.6976Z" fill="#E8E8E8" />
                  <path d="M10.2462 7.80469C8.90551 7.80469 7.8125 8.8977 7.8125 10.2469C7.8125 11.5875 8.90551 12.6805 10.2462 12.6805C11.5868 12.6805 12.6884 11.5875 12.6884 10.2469C12.6884 8.90624 11.5868 7.80469 10.2462 7.80469Z" fill="#E8E8E8" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles['general__character']}>
            <div className={styles['general__character-img-wrapper']}>
              <img src="/general/general-img.png" alt="" width={187} height={220} />
              <div className={styles['general__character-label']}>
                135
                <span>уровень</span>
              </div>
            </div>
            <ul className={`list-reset ${styles['general__character-list']}`}>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Никнейм
                  <span>Denny Walker</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  ID
                  <span>4355644</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Сервер
                  <span>#1</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Создан
                  <span>12/05/2025</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Игровое время
                  <span>215 часов</span>
                </div>
              </li>
            </ul>
            <div className={styles['general__character-inf']}>
              <div className={styles['general__character-current']}>
                Текущий
              </div>
              <div className={styles['general__character-online']}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20.494" height="20.494" rx="10.247" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="10.2458" cy="10.2477" r="7.68525" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="10.2481" cy="10.2471" r="4.26958" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
              <button className={`btn-reset ${styles['general__character-show']}`}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1449 7.81409C16.1724 4.71437 13.2861 2.92969 10.2462 2.92969C8.72622 2.92969 7.24895 3.37372 5.89976 4.20202C4.55057 5.03886 3.33801 6.25996 2.34747 7.81409C1.49355 9.15474 1.49355 11.3322 2.34747 12.6729C4.32001 15.7811 7.20625 17.5573 10.2462 17.5573C11.7662 17.5573 13.2434 17.1132 14.5926 16.2849C15.9418 15.4481 17.1544 14.227 18.1449 12.6729C18.9988 11.3408 18.9988 9.15474 18.1449 7.81409ZM10.2462 13.6976C8.33342 13.6976 6.79637 12.152 6.79637 10.2477C6.79637 8.34351 8.33342 6.79793 10.2462 6.79793C12.159 6.79793 13.696 8.34351 13.696 10.2477C13.696 12.152 12.159 13.6976 10.2462 13.6976Z" fill="#E8E8E8" />
                  <path d="M10.2462 7.80469C8.90551 7.80469 7.8125 8.8977 7.8125 10.2469C7.8125 11.5875 8.90551 12.6805 10.2462 12.6805C11.5868 12.6805 12.6884 11.5875 12.6884 10.2469C12.6884 8.90624 11.5868 7.80469 10.2462 7.80469Z" fill="#E8E8E8" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles['general__character']}>
            <div className={styles['general__character-img-wrapper']}>
              <img src="/general/general-img.png" alt="" width={187} height={220} />
              <div className={styles['general__character-label']}>
                135
                <span>уровень</span>
              </div>
            </div>
            <ul className={`list-reset ${styles['general__character-list']}`}>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Никнейм
                  <span>Denny Walker</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  ID
                  <span>4355644</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Сервер
                  <span>#1</span>
                </div>
              </li>
              <li className={styles['general__character-item']}>
                <div className={styles['general__character-item-block']}>
                  Создан
                  <span>12/05/2025</span>
                </div>
                <div className={styles['general__character-item-block']}>
                  Игровое время
                  <span>215 часов</span>
                </div>
              </li>
            </ul>
            <div className={styles['general__character-inf']}>
              <div className={styles['general__character-current']}>
                Текущий
              </div>
              <div className={styles['general__character-online']}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20.494" height="20.494" rx="10.247" fill="#43FE0A" fillOpacity="0.1" />
                  <circle cx="10.2458" cy="10.2477" r="7.68525" fill="#80FF46" fillOpacity="0.1" />
                  <circle cx="10.2481" cy="10.2471" r="4.26958" fill="#80FF46" />
                </svg>
                Онлайн
              </div>
              <button className={`btn-reset ${styles['general__character-show']}`}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1449 7.81409C16.1724 4.71437 13.2861 2.92969 10.2462 2.92969C8.72622 2.92969 7.24895 3.37372 5.89976 4.20202C4.55057 5.03886 3.33801 6.25996 2.34747 7.81409C1.49355 9.15474 1.49355 11.3322 2.34747 12.6729C4.32001 15.7811 7.20625 17.5573 10.2462 17.5573C11.7662 17.5573 13.2434 17.1132 14.5926 16.2849C15.9418 15.4481 17.1544 14.227 18.1449 12.6729C18.9988 11.3408 18.9988 9.15474 18.1449 7.81409ZM10.2462 13.6976C8.33342 13.6976 6.79637 12.152 6.79637 10.2477C6.79637 8.34351 8.33342 6.79793 10.2462 6.79793C12.159 6.79793 13.696 8.34351 13.696 10.2477C13.696 12.152 12.159 13.6976 10.2462 13.6976Z" fill="#E8E8E8" />
                  <path d="M10.2462 7.80469C8.90551 7.80469 7.8125 8.8977 7.8125 10.2469C7.8125 11.5875 8.90551 12.6805 10.2462 12.6805C11.5868 12.6805 12.6884 11.5875 12.6884 10.2469C12.6884 8.90624 11.5868 7.80469 10.2462 7.80469Z" fill="#E8E8E8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles['general__finance']}>
          <div className={styles['general__finance-content']}>
            <h2 className={`main-title`}>Финансы</h2>
            <ul className={`list-reset ${styles['general__finance-list']}`}>
              <li className={styles['general__finance-item']}>
                <img src="general/general-finance-1.png" alt="" />
                Наличные
                <span>3.534.000 ₽</span>
              </li>
              <li className={styles['general__finance-item']}>
                <img src="general/general-finance-2.png" alt="" />
                Банк
                <span>3.534.000 ₽</span>
              </li>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--column']}`}>
                <img src="general/general-finance-3.png" alt="" />
                Всего
                <span>33.534.000 ₽</span>
              </li>
            </ul>
          </div>
          <div className={styles['general__finance-etc']}>
            <h2 className={styles['general__finance-etc-title']}>Дополнительная информация</h2>
            <ul className={`list-reset ${styles['general__finance-list']}`}>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--grey']}`}>
                <img src="general/general-finance-4.png" alt="" />
                Семья
                <span>1</span>
              </li>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--grey']}`}>
                <img src="general/general-finance-5.png" alt="" />
                Телефон
                <span>5300731</span>
                <button className={`btn-reset ${styles['general__finance-item-btn']}`}>
                  <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36.8513" height="40" rx="8" fill="white" fillOpacity="0.1" />
                    <path d="M14.5879 15.5251L19.3452 20L14.5879 24.4749L16.2092 26L22.5879 20L16.2092 14L14.5879 15.5251Z" fill="white" />
                  </svg>
                </button>
              </li>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--grey']} ${styles['general__finance-item--smaller']}`}>
                <img src="general/general-finance-6.png" alt="" />
                Фракция
                <span>Городская поликлиника</span>
              </li>
              <li className={`${styles['general__finance-item']} ${styles['general__finance-item--grey']}`}>
                <img src="general/general-finance-7.png" alt="" />
                Бизнесы
                <span>2</span>
                <button className={`btn-reset ${styles['general__finance-item-btn']}`}>
                  <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36.8513" height="40" rx="8" fill="white" fillOpacity="0.1" />
                    <path d="M14.5879 15.5251L19.3452 20L14.5879 24.4749L16.2092 26L22.5879 20L16.2092 14L14.5879 15.5251Z" fill="white" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles['general__accounts']}>
          <h2 className={`main-title ${styles['general__title']}`}>Привязанные аккаунты</h2>
          <ul className={`list-reset ${styles['general__accounts-list']}`}>
            <li className={`${styles['general__accounts-item']} ${styles['general__accounts-item--tg']}`}>
              <div className={styles['general__accounts-item-logo']}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6.41797" y="8.25586" width="33.7188" height="30.8252" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.16667 0C4.10406 0 0 4.10406 0 9.16667V34.8333C0 39.8959 4.10406 44 9.16667 44H34.8333C39.8959 44 44 39.8959 44 34.8333V9.16667C44 4.10406 39.8959 0 34.8333 0H9.16667ZM37.2128 9.73609L32.0432 34.602C31.9215 35.1891 31.233 35.4551 30.7473 35.1021L23.6904 29.9787C23.262 29.6676 22.6778 29.6841 22.2677 30.0185L18.3551 33.2079C17.901 33.5793 17.2168 33.3723 17.0429 32.8131L15.6613 28.3698C14.8191 25.6613 12.7705 23.4953 10.1132 22.5035L7.30709 21.4562C6.5941 21.1891 6.58801 20.1826 7.29897 19.9087L36.1051 8.79603C36.7158 8.55989 37.3458 9.09485 37.2128 9.73609Z" fill="url(#paint0_linear_456_4354)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M31.2304 13.4219L16.1306 22.8138C15.5519 23.1744 15.2795 23.8803 15.4662 24.5411L17.0987 30.3343C17.2149 30.7447 17.8046 30.7028 17.8611 30.2787L18.2854 27.1018C18.3656 26.5037 18.648 25.9523 19.0861 25.5407L31.5476 13.8425C31.781 13.6242 31.5016 13.2537 31.2304 13.4219Z" fill="url(#paint1_linear_456_4354)" />
                  <defs>
                    <linearGradient id="paint0_linear_456_4354" x1="0" y1="0" x2="55.3025" y2="64.2389" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2BA2DE" />
                      <stop offset="1" stopColor="#1A91CB" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_456_4354" x1="0" y1="0" x2="55.3025" y2="64.2389" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2BA2DE" />
                      <stop offset="1" stopColor="#1A91CB" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className={styles['general__accounts-item-text-wrapper']}>
                  <div className={styles['general__accounts-item-title']}>
                    Telegram
                    <span>Привязан</span>
                  </div>
                  <div className={styles['general__accounts-item-id']}>
                    @rusmobile
                  </div>
                  <div className={styles['general__accounts-item-inf']}>
                    Привязан: 01.01.2025
                  </div>
                  <div className={styles['general__accounts-item-inf']}>
                    ID: 123456789
                  </div>
                </div>
              </div>
              <div className={styles['general__accounts-item-btns']}>
                <button className={`btn-reset ${styles['general__accounts-item-btn']}`}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="12.5" fill="white" fillOpacity="0.1" />
                    <path d="M29 25.9V30.1C29 33.6 27.6 35 24.1 35H19.9C16.4 35 15 33.6 15 30.1V25.9C15 22.4 16.4 21 19.9 21H24.1C27.6 21 29 22.4 29 25.9Z" fill="#E4E4E4" />
                    <path d="M30.0998 15H25.8998C22.8167 15 21.3707 16.0941 21.0695 18.739C21.0065 19.2923 21.4648 19.75 22.0217 19.75H24.0998C28.2998 19.75 30.2498 21.7 30.2498 25.9V27.9781C30.2498 28.535 30.7074 28.9933 31.2608 28.9303C33.9057 28.629 34.9998 27.1831 34.9998 24.1V19.9C34.9998 16.4 33.5998 15 30.0998 15Z" fill="#E4E4E4" />
                  </svg>
                </button>
                <button className={`btn-reset ${styles['general__accounts-item-btn']}`}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="12.5" fill="white" fillOpacity="0.1" />
                    <path d="M29.4917 15.0453C29.1122 15.1196 28.5684 15.2955 28.2593 15.4558C27.649 15.7608 27.4339 15.9524 25.4113 17.9698C23.4552 19.9208 23.4434 19.9326 23.4434 20.0929C23.4434 20.3705 23.5256 20.4096 24.1711 20.4565C24.8205 20.5034 25.1961 20.5738 25.7477 20.7576C26.0137 20.8475 26.1937 20.8866 26.2563 20.8709C26.3189 20.8553 26.9018 20.304 27.7468 19.4673C28.5449 18.6736 29.2139 18.0402 29.3156 17.9816C29.9689 17.6062 30.7866 17.618 31.393 18.005C31.6434 18.1614 31.9798 18.5329 32.105 18.787C32.3202 19.2249 32.3671 19.7723 32.2263 20.2375C32.0854 20.7067 32.0659 20.7302 29.656 23.1425C28.1028 24.6987 27.2813 25.4924 27.1365 25.5823C26.7962 25.7856 26.5223 25.8638 26.1233 25.8716C25.556 25.8794 25.2352 25.7582 24.6992 25.332C24.3315 25.0388 24.1163 24.9567 23.7134 24.9567C22.6884 24.9567 22.0781 26.0124 22.5593 26.9429C22.5945 27.0094 22.7158 27.154 22.8253 27.2674C23.5491 27.9751 24.4841 28.4247 25.513 28.5577C26.0842 28.628 27.0113 28.5381 27.5903 28.3504C27.9659 28.2331 28.5801 27.9047 28.9166 27.6506C29.0809 27.5255 30.2976 26.3369 31.6238 25.0075C33.6346 22.9901 34.0728 22.5365 34.2606 22.2472C34.5384 21.8249 34.7614 21.3245 34.8944 20.824C34.9922 20.4682 35 20.3822 35 19.6589C35 18.9356 34.9922 18.8496 34.8944 18.4938C34.4445 16.8204 33.1769 15.5536 31.5143 15.1157C31.1935 15.0336 31.0252 15.014 30.4658 15.0023C29.9885 14.9945 29.7147 15.0062 29.4917 15.0453Z" fill="white" />
                    <path d="M23.3065 21.4418C22.5671 21.5395 21.7025 21.8875 21.1118 22.3293C20.9279 22.4701 19.8286 23.5413 18.3928 24.9802C15.7756 27.6076 15.7091 27.6858 15.3804 28.4443C15.1183 29.0425 15.0284 29.4569 15.0049 30.1568C14.9814 30.8566 15.0401 31.2906 15.2357 31.8576C15.3844 32.2994 15.4939 32.5144 15.7678 32.9328C16.4563 33.9728 17.5008 34.6687 18.7567 34.9307C19.1009 35.0011 19.2496 35.0089 19.8051 34.9932C20.5328 34.9737 20.9631 34.8838 21.5304 34.6374C22.2854 34.3129 22.3598 34.2504 24.5506 32.0726C26.5654 30.0669 26.5732 30.059 26.5732 29.9026C26.5732 29.625 26.491 29.582 25.8455 29.5351C25.2 29.4882 24.8323 29.4178 24.2533 29.2341C23.9911 29.148 23.7994 29.105 23.7447 29.1207C23.6977 29.1363 23.0248 29.7775 22.2502 30.5438C21.4482 31.3415 20.7675 31.9866 20.6658 32.0413C19.2965 32.8194 17.6143 31.7911 17.7043 30.2389C17.7238 29.8401 17.8295 29.5234 18.0212 29.2458C18.0955 29.1324 19.1948 28.0103 20.4585 26.7513C22.8605 24.3546 22.884 24.335 23.3535 24.1943C23.6664 24.1005 23.9872 24.0848 24.3041 24.1513C24.6758 24.2295 24.9183 24.3507 25.2822 24.6439C25.646 24.9372 25.9042 25.0388 26.2798 25.0388C26.8275 25.0388 27.2774 24.7612 27.4965 24.2842C27.6529 23.9402 27.6568 23.514 27.5043 23.1895C27.3008 22.7516 26.7062 22.2472 25.9668 21.8836C25.1296 21.477 24.2259 21.3284 23.3065 21.4418Z" fill="white" />
                  </svg>
                </button>
              </div>
            </li>
            <li className={`${styles['general__accounts-item']} ${styles['general__accounts-item--vk']}`}>
              <div className={styles['general__accounts-item-logo']}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.16667 0C4.10405 0 0 4.10406 0 9.16667V34.8333C0 39.8959 4.10406 44 9.16667 44H34.8333C39.8959 44 44 39.8959 44 34.8333V9.16667C44 4.10405 39.8959 0 34.8333 0H9.16667Z" fill="url(#paint0_linear_456_4358)" />
                  <path d="M23.1558 31C14.2727 31 9.20779 24.6301 9 14.0136H13.4675C13.6104 21.799 16.8831 25.0929 19.4805 25.7734V14.0136H23.6753V20.7238C26.2338 20.438 28.9351 17.3755 29.8442 14H34.026C33.685 15.7473 33.0039 17.4022 32.0251 18.8612C31.0464 20.3202 29.7911 21.552 28.3377 22.4796C29.9597 23.3257 31.3921 24.5225 32.5405 25.9912C33.6889 27.4599 34.5271 29.167 35 31H30.3896C29.4026 27.7742 26.9351 25.2698 23.6753 24.9295V31H23.1558Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_456_4358" x1="0" y1="0" x2="55.3025" y2="64.2389" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0062D2" />
                      <stop offset="1" stopColor="#0092EC" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className={styles['general__accounts-item-text-wrapper']}>
                  <div className={styles['general__accounts-item-title']}>
                    Вконтакте
                    <span>Привязан</span>
                  </div>
                  <div className={styles['general__accounts-item-id']}>
                    @rusmobile
                  </div>
                  <div className={styles['general__accounts-item-inf']}>
                    Привязан: 01.01.2025
                  </div>
                  <div className={styles['general__accounts-item-inf']}>
                    ID: 123456789
                  </div>
                </div>
              </div>
              <div className={styles['general__accounts-item-btns']}>
                <button className={`btn-reset ${styles['general__accounts-item-btn']}`}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="12.5" fill="white" fillOpacity="0.1" />
                    <path d="M29 25.9V30.1C29 33.6 27.6 35 24.1 35H19.9C16.4 35 15 33.6 15 30.1V25.9C15 22.4 16.4 21 19.9 21H24.1C27.6 21 29 22.4 29 25.9Z" fill="#E4E4E4" />
                    <path d="M30.0998 15H25.8998C22.8167 15 21.3707 16.0941 21.0695 18.739C21.0065 19.2923 21.4648 19.75 22.0217 19.75H24.0998C28.2998 19.75 30.2498 21.7 30.2498 25.9V27.9781C30.2498 28.535 30.7074 28.9933 31.2608 28.9303C33.9057 28.629 34.9998 27.1831 34.9998 24.1V19.9C34.9998 16.4 33.5998 15 30.0998 15Z" fill="#E4E4E4" />
                  </svg>
                </button>
                <button className={`btn-reset ${styles['general__accounts-item-btn']}`}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="12.5" fill="white" fillOpacity="0.1" />
                    <path d="M29.4917 15.0453C29.1122 15.1196 28.5684 15.2955 28.2593 15.4558C27.649 15.7608 27.4339 15.9524 25.4113 17.9698C23.4552 19.9208 23.4434 19.9326 23.4434 20.0929C23.4434 20.3705 23.5256 20.4096 24.1711 20.4565C24.8205 20.5034 25.1961 20.5738 25.7477 20.7576C26.0137 20.8475 26.1937 20.8866 26.2563 20.8709C26.3189 20.8553 26.9018 20.304 27.7468 19.4673C28.5449 18.6736 29.2139 18.0402 29.3156 17.9816C29.9689 17.6062 30.7866 17.618 31.393 18.005C31.6434 18.1614 31.9798 18.5329 32.105 18.787C32.3202 19.2249 32.3671 19.7723 32.2263 20.2375C32.0854 20.7067 32.0659 20.7302 29.656 23.1425C28.1028 24.6987 27.2813 25.4924 27.1365 25.5823C26.7962 25.7856 26.5223 25.8638 26.1233 25.8716C25.556 25.8794 25.2352 25.7582 24.6992 25.332C24.3315 25.0388 24.1163 24.9567 23.7134 24.9567C22.6884 24.9567 22.0781 26.0124 22.5593 26.9429C22.5945 27.0094 22.7158 27.154 22.8253 27.2674C23.5491 27.9751 24.4841 28.4247 25.513 28.5577C26.0842 28.628 27.0113 28.5381 27.5903 28.3504C27.9659 28.2331 28.5801 27.9047 28.9166 27.6506C29.0809 27.5255 30.2976 26.3369 31.6238 25.0075C33.6346 22.9901 34.0728 22.5365 34.2606 22.2472C34.5384 21.8249 34.7614 21.3245 34.8944 20.824C34.9922 20.4682 35 20.3822 35 19.6589C35 18.9356 34.9922 18.8496 34.8944 18.4938C34.4445 16.8204 33.1769 15.5536 31.5143 15.1157C31.1935 15.0336 31.0252 15.014 30.4658 15.0023C29.9885 14.9945 29.7147 15.0062 29.4917 15.0453Z" fill="white" />
                    <path d="M23.3065 21.4418C22.5671 21.5395 21.7025 21.8875 21.1118 22.3293C20.9279 22.4701 19.8286 23.5413 18.3928 24.9802C15.7756 27.6076 15.7091 27.6858 15.3804 28.4443C15.1183 29.0425 15.0284 29.4569 15.0049 30.1568C14.9814 30.8566 15.0401 31.2906 15.2357 31.8576C15.3844 32.2994 15.4939 32.5144 15.7678 32.9328C16.4563 33.9728 17.5008 34.6687 18.7567 34.9307C19.1009 35.0011 19.2496 35.0089 19.8051 34.9932C20.5328 34.9737 20.9631 34.8838 21.5304 34.6374C22.2854 34.3129 22.3598 34.2504 24.5506 32.0726C26.5654 30.0669 26.5732 30.059 26.5732 29.9026C26.5732 29.625 26.491 29.582 25.8455 29.5351C25.2 29.4882 24.8323 29.4178 24.2533 29.2341C23.9911 29.148 23.7994 29.105 23.7447 29.1207C23.6977 29.1363 23.0248 29.7775 22.2502 30.5438C21.4482 31.3415 20.7675 31.9866 20.6658 32.0413C19.2965 32.8194 17.6143 31.7911 17.7043 30.2389C17.7238 29.8401 17.8295 29.5234 18.0212 29.2458C18.0955 29.1324 19.1948 28.0103 20.4585 26.7513C22.8605 24.3546 22.884 24.335 23.3535 24.1943C23.6664 24.1005 23.9872 24.0848 24.3041 24.1513C24.6758 24.2295 24.9183 24.3507 25.2822 24.6439C25.646 24.9372 25.9042 25.0388 26.2798 25.0388C26.8275 25.0388 27.2774 24.7612 27.4965 24.2842C27.6529 23.9402 27.6568 23.514 27.5043 23.1895C27.3008 22.7516 26.7062 22.2472 25.9668 21.8836C25.1296 21.477 24.2259 21.3284 23.3065 21.4418Z" fill="white" />
                  </svg>
                </button>
              </div>
            </li>
            <li className={`${styles['general__accounts-item']} ${styles['general__accounts-item--google']}`}>
              <div className={styles['general__accounts-item-logo']}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.16667 0C4.10405 0 0 4.10406 0 9.16667V34.8333C0 39.8959 4.10406 44 9.16667 44H34.8333C39.8959 44 44 39.8959 44 34.8333V9.16667C44 4.10405 39.8959 0 34.8333 0H9.16667Z" fill="url(#paint0_linear_456_4362)" />
                  <path d="M33.44 22.2705C33.44 21.4255 33.3642 20.613 33.2233 19.833H22V24.448H28.4133C28.1317 25.9322 27.2867 27.1888 26.0192 28.0338V31.0347H29.8867C32.14 28.9547 33.44 25.8997 33.44 22.2705Z" fill="#4285F4" />
                  <path d="M21.9997 33.9171C25.2172 33.9171 27.9147 32.8554 29.8863 31.0354L26.0188 28.0346C24.9572 28.7496 23.603 29.1829 21.9997 29.1829C18.9013 29.1829 16.2688 27.0921 15.3263 24.2754H11.3613V27.3521C13.3222 31.2412 17.3413 33.9171 21.9997 33.9171Z" fill="#34A853" />
                  <path d="M15.3254 24.2642C15.087 23.5492 14.9462 22.7908 14.9462 22C14.9462 21.2092 15.087 20.4508 15.3254 19.7358V16.6592H11.3604C10.5479 18.2625 10.082 20.0717 10.082 22C10.082 23.9283 10.5479 25.7375 11.3604 27.3408L14.4479 24.9358L15.3254 24.2642Z" fill="#FBBC05" />
                  <path d="M21.9997 14.828C23.7547 14.828 25.3147 15.4347 26.5605 16.6047L29.973 13.1922C27.9038 11.2638 25.2172 10.083 21.9997 10.083C17.3413 10.083 13.3222 12.7588 11.3613 16.6588L15.3263 19.7355C16.2688 16.9188 18.9013 14.828 21.9997 14.828Z" fill="#EA4335" />
                  <defs>
                    <linearGradient id="paint0_linear_456_4362" x1="0" y1="0" x2="55.3025" y2="64.2389" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="#E6E6E6" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className={styles['general__accounts-item-text-wrapper']}>
                  <div className={styles['general__accounts-item-title']}>
                    Google
                    <span>Привязан</span>
                  </div>
                  <div className={styles['general__accounts-item-id']}>
                    @rusmobile
                  </div>
                  <div className={styles['general__accounts-item-inf']}>
                    Привязан: 01.01.2025
                  </div>
                  <div className={styles['general__accounts-item-inf']}>
                    ID: 123456789
                  </div>
                </div>
              </div>
              <div className={styles['general__accounts-item-btns']}>
                <button className={`btn-reset ${styles['general__accounts-item-btn']}`}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="12.5" fill="white" fillOpacity="0.1" />
                    <path d="M29 25.9V30.1C29 33.6 27.6 35 24.1 35H19.9C16.4 35 15 33.6 15 30.1V25.9C15 22.4 16.4 21 19.9 21H24.1C27.6 21 29 22.4 29 25.9Z" fill="#E4E4E4" />
                    <path d="M30.0998 15H25.8998C22.8167 15 21.3707 16.0941 21.0695 18.739C21.0065 19.2923 21.4648 19.75 22.0217 19.75H24.0998C28.2998 19.75 30.2498 21.7 30.2498 25.9V27.9781C30.2498 28.535 30.7074 28.9933 31.2608 28.9303C33.9057 28.629 34.9998 27.1831 34.9998 24.1V19.9C34.9998 16.4 33.5998 15 30.0998 15Z" fill="#E4E4E4" />
                  </svg>
                </button>
                <button className={`btn-reset ${styles['general__accounts-item-btn']}`}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="12.5" fill="white" fillOpacity="0.1" />
                    <path d="M29.4917 15.0453C29.1122 15.1196 28.5684 15.2955 28.2593 15.4558C27.649 15.7608 27.4339 15.9524 25.4113 17.9698C23.4552 19.9208 23.4434 19.9326 23.4434 20.0929C23.4434 20.3705 23.5256 20.4096 24.1711 20.4565C24.8205 20.5034 25.1961 20.5738 25.7477 20.7576C26.0137 20.8475 26.1937 20.8866 26.2563 20.8709C26.3189 20.8553 26.9018 20.304 27.7468 19.4673C28.5449 18.6736 29.2139 18.0402 29.3156 17.9816C29.9689 17.6062 30.7866 17.618 31.393 18.005C31.6434 18.1614 31.9798 18.5329 32.105 18.787C32.3202 19.2249 32.3671 19.7723 32.2263 20.2375C32.0854 20.7067 32.0659 20.7302 29.656 23.1425C28.1028 24.6987 27.2813 25.4924 27.1365 25.5823C26.7962 25.7856 26.5223 25.8638 26.1233 25.8716C25.556 25.8794 25.2352 25.7582 24.6992 25.332C24.3315 25.0388 24.1163 24.9567 23.7134 24.9567C22.6884 24.9567 22.0781 26.0124 22.5593 26.9429C22.5945 27.0094 22.7158 27.154 22.8253 27.2674C23.5491 27.9751 24.4841 28.4247 25.513 28.5577C26.0842 28.628 27.0113 28.5381 27.5903 28.3504C27.9659 28.2331 28.5801 27.9047 28.9166 27.6506C29.0809 27.5255 30.2976 26.3369 31.6238 25.0075C33.6346 22.9901 34.0728 22.5365 34.2606 22.2472C34.5384 21.8249 34.7614 21.3245 34.8944 20.824C34.9922 20.4682 35 20.3822 35 19.6589C35 18.9356 34.9922 18.8496 34.8944 18.4938C34.4445 16.8204 33.1769 15.5536 31.5143 15.1157C31.1935 15.0336 31.0252 15.014 30.4658 15.0023C29.9885 14.9945 29.7147 15.0062 29.4917 15.0453Z" fill="white" />
                    <path d="M23.3065 21.4418C22.5671 21.5395 21.7025 21.8875 21.1118 22.3293C20.9279 22.4701 19.8286 23.5413 18.3928 24.9802C15.7756 27.6076 15.7091 27.6858 15.3804 28.4443C15.1183 29.0425 15.0284 29.4569 15.0049 30.1568C14.9814 30.8566 15.0401 31.2906 15.2357 31.8576C15.3844 32.2994 15.4939 32.5144 15.7678 32.9328C16.4563 33.9728 17.5008 34.6687 18.7567 34.9307C19.1009 35.0011 19.2496 35.0089 19.8051 34.9932C20.5328 34.9737 20.9631 34.8838 21.5304 34.6374C22.2854 34.3129 22.3598 34.2504 24.5506 32.0726C26.5654 30.0669 26.5732 30.059 26.5732 29.9026C26.5732 29.625 26.491 29.582 25.8455 29.5351C25.2 29.4882 24.8323 29.4178 24.2533 29.2341C23.9911 29.148 23.7994 29.105 23.7447 29.1207C23.6977 29.1363 23.0248 29.7775 22.2502 30.5438C21.4482 31.3415 20.7675 31.9866 20.6658 32.0413C19.2965 32.8194 17.6143 31.7911 17.7043 30.2389C17.7238 29.8401 17.8295 29.5234 18.0212 29.2458C18.0955 29.1324 19.1948 28.0103 20.4585 26.7513C22.8605 24.3546 22.884 24.335 23.3535 24.1943C23.6664 24.1005 23.9872 24.0848 24.3041 24.1513C24.6758 24.2295 24.9183 24.3507 25.2822 24.6439C25.646 24.9372 25.9042 25.0388 26.2798 25.0388C26.8275 25.0388 27.2774 24.7612 27.4965 24.2842C27.6529 23.9402 27.6568 23.514 27.5043 23.1895C27.3008 22.7516 26.7062 22.2472 25.9668 21.8836C25.1296 21.477 24.2259 21.3284 23.3065 21.4418Z" fill="white" />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
          <div className={styles['general__accounts-safe']}>
            <img src="general/general-accounts-safe.png" alt="" />
            <div className={styles['general__accounts-safe-text']}>
              Аккаунт полностью защищен
              <span>Все методы авторизации привязаны</span>
            </div>
          </div>
        </div>
        <div className={styles['general__history']}>
          <h2 className={`main-title ${styles['general__title']}`}>История смены ников</h2>
          <div className={styles['general__history-table']}>
            <div className={styles['general__history-table-header']}>
              <div className={styles['general__history-table-header-column']}>Старый ник</div>
              <div className={styles['general__history-table-header-column']}>Новый ник</div>
              <div className={styles['general__history-table-header-column']}>Дата смены</div>
              <div className={styles['general__history-table-header-column']}>Способ</div>
              <div className={styles['general__history-table-header-column']}>Кто сменил</div>
            </div>
            <div className={styles['general__history-table-row']}>
              <div className={styles['general__history-table-column']}>Emmanuel Katanov</div>
              <div className={styles['general__history-table-column']}>Denny Walker</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Донат</div>
              </div>
              <div className={styles['general__history-table-column']}>Сам игрок</div>
            </div>
            <div className={styles['general__history-table-row']}>
              <div className={styles['general__history-table-column']}>Emmanuel Katanov</div>
              <div className={styles['general__history-table-column']}>Denny Walker</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Донат</div>
              </div>
              <div className={styles['general__history-table-column']}>Сам игрок</div>
            </div>
            <div className={styles['general__history-table-row']}>
              <div className={styles['general__history-table-column']}>Emmanuel Katanov</div>
              <div className={styles['general__history-table-column']}>Denny Walker</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Донат</div>
              </div>
              <div className={styles['general__history-table-column']}>Сам игрок</div>
            </div>
            <div className={styles['general__history-table-row']}>
              <div className={styles['general__history-table-column']}>Emmanuel Katanov</div>
              <div className={styles['general__history-table-column']}>Denny Walker</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Донат</div>
              </div>
              <div className={styles['general__history-table-column']}>Сам игрок</div>
            </div>
            <div className={styles['general__history-table-row']}>
              <div className={styles['general__history-table-column']}>Emmanuel Katanov</div>
              <div className={styles['general__history-table-column']}>Denny Walker</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Донат</div>
              </div>
              <div className={styles['general__history-table-column']}>Сам игрок</div>
            </div>
          </div>
          <div className={styles['general__history-inf']}>
            <div className={styles['general__history-current']}>
              Текущий ник:
              <span>Denny Walker</span>
            </div>
            <div className={styles['general__history-text']}>
              <div className={styles['general__history-label']}>
                Всего 5 смен
              </div>
              <div className={styles['general__history-label']}>
                Последняя смена: 29 дней назад
              </div>
              <div className={styles['general__history-descr']}>
                Следующая бесплатная смена доступна через 335 дней
              </div>
            </div>
          </div>

          <h2 className={`main-title ${styles['general__title']}`}>История IP адресов</h2>
          <div className={styles['general__history-table']}>
            <div className={`${styles['general__history-table-header']} ${styles['general__history-table-header--6']}`}>
              <div className={styles['general__history-table-header-column']}>IP адрес</div>
              <div className={styles['general__history-table-header-column']}>Новый ник</div>
              <div className={styles['general__history-table-header-column']}>Дата смены</div>
              <div className={styles['general__history-table-header-column']}>Кол-во входов</div>
              <div className={styles['general__history-table-header-column']}>Кол-во входов</div>
              <div className={styles['general__history-table-header-column']}>Статус</div>
            </div>
            <div className={`${styles['general__history-table-row']} ${styles['general__history-table-row--6']}`}>
              <div className={styles['general__history-table-column']}>98.162.43.51</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>Сегодня 14:35</div>
              <div className={styles['general__history-table-column']}>323</div>
              <div className={styles['general__history-table-column']}>Москва, RU</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Активный</div>
              </div>
            </div>
            <div className={`${styles['general__history-table-row']} ${styles['general__history-table-row--6']}`}>
              <div className={styles['general__history-table-column']}>98.162.43.51</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>Сегодня 14:35</div>
              <div className={styles['general__history-table-column']}>323</div>
              <div className={styles['general__history-table-column']}>Москва, RU</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Активный</div>
              </div>
            </div>
            <div className={`${styles['general__history-table-row']} ${styles['general__history-table-row--6']}`}>
              <div className={styles['general__history-table-column']}>98.162.43.51</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>Сегодня 14:35</div>
              <div className={styles['general__history-table-column']}>323</div>
              <div className={styles['general__history-table-column']}>Москва, RU</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Активный</div>
              </div>
            </div>
            <div className={`${styles['general__history-table-row']} ${styles['general__history-table-row--6']}`}>
              <div className={styles['general__history-table-column']}>98.162.43.51</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>Сегодня 14:35</div>
              <div className={styles['general__history-table-column']}>323</div>
              <div className={styles['general__history-table-column']}>Москва, RU</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Активный</div>
              </div>
            </div>
            <div className={`${styles['general__history-table-row']} ${styles['general__history-table-row--6']}`}>
              <div className={styles['general__history-table-column']}>98.162.43.51</div>
              <div className={styles['general__history-table-column']}>26.12.2025 19:40</div>
              <div className={styles['general__history-table-column']}>Сегодня 14:35</div>
              <div className={styles['general__history-table-column']}>323</div>
              <div className={styles['general__history-table-column']}>Москва, RU</div>
              <div className={styles['general__history-table-column']}>
                <div className={styles['general__history-table-column-label']}>Активный</div>
              </div>
            </div>
          </div>
          <div className={styles['general__history-inf']}>
            <div className={styles['general__history-current']}>
              Основной IP:
              <span>98.162.43.51</span>
            </div>
            <div className={styles['general__history-text']}>
              <div className={styles['general__history-label']}>
                Всего уникальных IP: 3
              </div>
              <div className={styles['general__history-label']}>
                Последняя смена IP: 29 дней назад
              </div>
              <div className={styles['general__history-descr']}>
                Подозрительная активность с IP: <span>98.162.43.51</span>
              </div>
            </div>
          </div>

          <div className={styles['general__history-twin']}>
            <h3 className={styles['general__history-twin-title']}>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7801 29.1916C13.7441 29.1916 13.6961 29.2156 13.6601 29.2156C11.3321 28.0636 9.43607 26.1557 8.27207 23.8277C8.27207 23.7917 8.29607 23.7437 8.29607 23.7077C9.76007 24.1397 11.2721 24.4637 12.7721 24.7157C13.0361 26.2277 13.3481 27.7276 13.7801 29.1916Z" fill="white" />
                <path d="M29.728 23.8397C28.54 26.2277 26.56 28.1596 24.148 29.3236C24.604 27.7996 24.988 26.2637 25.24 24.7157C26.752 24.4637 28.24 24.1397 29.704 23.7077C29.692 23.7557 29.728 23.8037 29.728 23.8397Z" fill="white" />
                <path d="M29.824 13.3519C28.312 12.8959 26.788 12.5239 25.24 12.2599C24.988 10.7119 24.616 9.17596 24.148 7.67597C26.632 8.86396 28.636 10.8679 29.824 13.3519Z" fill="white" />
                <path d="M13.78 7.80806C13.348 9.27205 13.036 10.76 12.784 12.272C11.236 12.512 9.69997 12.896 8.17597 13.352C9.33997 10.94 11.272 8.96005 13.66 7.77206C13.696 7.77206 13.744 7.80806 13.78 7.80806Z" fill="white" />
                <path d="M23.188 12.008C20.404 11.696 17.596 11.696 14.812 12.008C15.112 10.364 15.496 8.71998 16.036 7.13599C16.06 7.04 16.048 6.968 16.06 6.872C17.008 6.644 17.98 6.5 19 6.5C20.008 6.5 20.992 6.644 21.928 6.872C21.94 6.968 21.94 7.04 21.964 7.13599C22.504 8.73198 22.888 10.364 23.188 12.008Z" fill="white" />
                <path d="M12.508 22.6876C10.852 22.3876 9.22 22.0036 7.636 21.4636C7.54 21.4396 7.468 21.4516 7.372 21.4396C7.144 20.4916 7 19.5196 7 18.4996C7 17.4916 7.144 16.5076 7.372 15.5716C7.468 15.5596 7.54 15.5596 7.636 15.5356C9.232 15.0077 10.852 14.6117 12.508 14.3117C12.208 17.0956 12.208 19.9036 12.508 22.6876Z" fill="white" />
                <path d="M31 18.4996C31 19.5196 30.856 20.4916 30.628 21.4396C30.532 21.4516 30.46 21.4396 30.364 21.4636C28.768 21.9916 27.136 22.3876 25.492 22.6876C25.804 19.9036 25.804 17.0956 25.492 14.3117C27.136 14.6117 28.78 14.9957 30.364 15.5356C30.46 15.5596 30.532 15.5716 30.628 15.5716C30.856 16.5196 31 17.4916 31 18.4996Z" fill="white" />
                <path d="M23.188 24.992C22.888 26.648 22.504 28.28 21.964 29.864C21.94 29.96 21.94 30.032 21.928 30.128C20.992 30.356 20.008 30.5 19 30.5C17.98 30.5 17.008 30.356 16.06 30.128C16.048 30.032 16.06 29.96 16.036 29.864C15.508 28.268 15.112 26.648 14.812 24.992C16.204 25.148 17.596 25.256 19 25.256C20.404 25.256 21.808 25.148 23.188 24.992Z" fill="white" />
                <path d="M23.516 23.0159C20.5147 23.3945 17.4853 23.3945 14.484 23.0159C14.1053 20.0146 14.1053 16.9852 14.484 13.9839C17.4853 13.6053 20.5147 13.6053 23.516 13.9839C23.8946 16.9852 23.8946 20.0146 23.516 23.0159Z" fill="white" />
              </svg>
              Возможные твинки по IP
            </h3>
            <div className={styles['general__history-twin-blocks']}>
              <div className={styles['general__history-twin-block']}>
                <div className={styles['general__history-twin-block-text']}>
                  Denny Walker
                  <span>ID:874924924</span>
                </div>
                <div className={styles['general__history-twin-block-check']}>
                  Общий IP:94.180.130.179
                  <button className={`btn-reset ${styles['general__history-twin-block-check-btn']}`}>Проверить</button>
                </div>
              </div>
              <div className={styles['general__history-twin-block']}>
                <div className={styles['general__history-twin-block-text']}>
                  Denny Walker
                  <span>ID:874924924</span>
                </div>
                <div className={styles['general__history-twin-block-check']}>
                  Общий IP:94.180.130.179
                  <button className={`btn-reset ${styles['general__history-twin-block-check-btn']}`}>Проверить</button>
                </div>
              </div>
            </div>
            <div className={styles['general__history-twin-descr']}>
              Найдено 2 аккаунта с совпадающим IP адресами. Рекомендуется провести дополнительную проверку
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
