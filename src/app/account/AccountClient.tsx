'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import navStyles from './sections/Nav/Nav.module.scss'

import General from '@/app/account/sections/General/General'
import Punishments from '@/app/account/sections/Punishments/Punishments'
import Money from '@/app/account/sections/Money/Money'
import Activity from '@/app/account/sections/Activity/Activity'
import Inventory from '@/app/account/sections/Inventory/Inventory'
import Cars from '@/app/account/sections/Cars/Cars'

type CurrentCharacter = {
  char_id: number
  char_bank_money: number
  char_exp: number
  char_is_online: number
  char_last_ip: string
  char_level: number
  char_money: number
  char_name: string
  char_reg_time: number
  char_sex: number
  char_skin: number
  char_family_name: string
  char_fraction_name: string
  char_phone_number: string
  char_business_info: string
}

type Character = {
  char_id: number
  char_name: string
  char_skin: number
  char_level: number
  char_game_for_hour: string
  char_reg_time: number
  char_is_online: number
  seconds_for_day: number
}

type NicknameHistoryItem = {
  char_id: number
  old_name: string
  new_name: string
  time: string
  type: number
  admin_name: string
}

type IpHistoryItem = {
  count: number
  ip: string
  last_date: string
}

enum Tabs {
  GENERAL = 'general',
  PUNISHMENTS = 'punishments',
  MONEY = 'money',
  ACTIVITY = 'activity',
  INVENTORY = 'inventory',
  CARS = 'cars',
}

export default function AccountClient({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.GENERAL)

  const defaultCharacter: CurrentCharacter = {
    char_id: 0,
    char_bank_money: 0,
    char_exp: 0,
    char_is_online: 0,
    char_last_ip: '-',
    char_level: 1,
    char_money: 0,
    char_name: '-',
    char_reg_time: Date.now(),
    char_sex: 0,
    char_skin: 0,
    char_family_name: '-',
    char_fraction_name: '-',
    char_phone_number: '-',
    char_business_info: '-',
  }

  const [character, setCharacter] = useState<CurrentCharacter>(defaultCharacter)
  const [characters, setCharacters] = useState<Character[]>([])
  const [nicknameHistory, setNicknameHistory] = useState<NicknameHistoryItem[]>([])
  const [ipHistory, setIpHistory] = useState<IpHistoryItem[]>([])

  useEffect(() => {
    fetch('/api/account')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCharacter(data.character)
        setCharacters(data.characters || [])
        setNicknameHistory(data.nicknameHistory || [])
        setIpHistory(data.ipHistory || [])
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      <section className={navStyles.nav}>
        <div className="container">
          <div className={navStyles['nav__title-wrapper']}>
            <div className={'main-title-wrapper'}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5314 10.9273L26.6839 12.9235C27.454 14.2575 25.1721 17.017 21.5867 19.087C18.0015 21.1569 14.4707 21.7534 13.7005 20.4194L12.5479 18.4232C11.7778 17.0892 14.0597 14.3297 17.6451 12.2598C21.2302 10.1899 24.7611 9.59326 25.5314 10.9273Z" fill="#EC930D" />
                <path d="M17.6451 12.2598C21.2302 10.1899 24.7611 9.59326 25.5314 10.9273C26.3016 12.2614 24.0195 15.0209 20.4343 17.0908C16.8489 19.1607 13.3181 19.7573 12.5479 18.4232C11.7778 17.0892 14.0597 14.3297 17.6451 12.2598Z" fill="#FFE880" />
                <path d="M18.0759 13.0026C21.0498 11.2856 23.8932 10.6428 24.4266 11.5669C24.96 12.4909 22.9818 14.6319 20.0079 16.3488C17.034 18.0658 14.1908 18.7085 13.6572 17.7845C13.1238 16.8605 15.1021 14.7195 18.0759 13.0026Z" fill="#EC930D" />
                <path d="M24.5045 12.0366C24.3702 13.0983 22.5538 14.8793 20.0072 16.3495C17.4608 17.8197 15.0102 18.5021 14.0234 18.0879C14.158 17.0261 15.9742 15.2451 18.5208 13.7748C21.0672 12.3047 23.5177 11.6222 24.5045 12.0366Z" fill="#FFCF36" />
                <path d="M22.517 22.3262L21.3576 24.8884C20.5828 26.6007 16.224 26.3006 11.6222 24.2181C7.02034 22.1357 3.91802 19.0594 4.69284 17.347L5.85226 14.7849C6.62726 13.0726 10.9859 13.3728 15.5877 15.4552C20.1895 17.5376 23.2918 20.6139 22.517 22.3262Z" fill="#EC930D" />
                <path d="M15.5884 15.4552C20.1903 17.5376 23.2926 20.6139 22.5177 22.3263C21.7429 24.0385 17.3841 23.7385 12.7823 21.656C8.18045 19.5736 5.07818 16.4973 5.853 14.7849C6.628 13.0727 10.9866 13.3727 15.5884 15.4552Z" fill="#FFE880" />
                <path d="M15.1571 16.4086C18.9744 18.1359 21.6336 20.4977 21.0969 21.6837C20.5601 22.8698 17.0307 22.4309 13.2136 20.7035C9.39661 18.9762 6.73732 16.6144 7.2739 15.4284C7.81067 14.2423 11.3401 14.6812 15.1571 16.4086Z" fill="#EC930D" />
                <path d="M20.6852 22.0949C19.537 22.7166 16.4797 22.1824 13.2112 20.7033C9.9427 19.2242 7.52324 17.28 7.23242 16.007C8.38065 15.3853 11.438 15.9194 14.7067 17.3986C17.9752 18.8776 20.3945 20.8219 20.6852 22.0949Z" fill="#FFCF36" />
                <path d="M19.4316 6.69378L19.8615 8.58757C20.1489 9.8531 17.6245 11.5053 14.2231 12.2776C10.8219 13.05 7.83138 12.6501 7.544 11.3846L7.11409 9.49077C6.82671 8.22511 9.35101 6.57295 12.7525 5.80063C16.1537 5.02828 19.1442 5.42813 19.4316 6.69378Z" fill="#EC930D" />
                <path d="M12.7525 5.80063C16.1537 5.02828 19.1442 5.42813 19.4316 6.69378C19.719 7.95941 17.1945 9.61148 13.7932 10.3838C10.3918 11.1563 7.40153 10.7563 7.11409 9.49077C6.82671 8.22511 9.35105 6.57295 12.7525 5.80063Z" fill="#FFE880" />
                <path d="M12.9133 6.50483C15.7348 5.86416 18.1833 6.05543 18.3823 6.93206C18.5814 7.8087 16.4557 9.03873 13.6343 9.6794C10.813 10.3201 8.36444 10.1287 8.16525 9.25208C7.96624 8.37543 10.0921 7.14543 12.9133 6.50483Z" fill="#EC930D" />
                <path d="M18.3264 7.32853C17.9534 8.14953 16.0479 9.13027 13.6319 9.6788C11.216 10.2274 9.07362 10.1659 8.38281 9.58644C8.7558 8.76544 10.6614 7.78482 13.0774 7.23618C15.4932 6.68765 17.6354 6.74914 18.3264 7.32853Z" fill="#FFCF36" />
              </svg>
              <h2 className={'main-title'}>Управление</h2>
            </div>

            {/* <label className={navStyles['nav__label']}>
              <input className={navStyles['nav__input']} placeholder='Поиск по никнейму' />
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="33" height="33" rx="10" fill="white" fillOpacity="0.1" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16.9412 23.1176C15.4687 23.1176 14.1026 22.6685 12.9722 21.8995L11.2593 23.6123C10.7424 24.1292 9.90457 24.1292 9.38767 23.6123C8.87078 23.0954 8.87078 22.2576 9.38767 21.7407L11.1006 20.0278C10.3316 18.8973 9.88249 17.5312 9.88238 16.0588C9.88238 12.1557 13.0381 9 16.9412 9C20.8441 9.00019 24 12.1558 24 16.0588C23.9998 19.9616 20.844 23.1175 16.9412 23.1176ZM16.9412 11.6804C19.3638 11.6806 21.3196 13.6362 21.3196 16.0588C21.3194 18.4813 19.3637 20.437 16.9412 20.4372C14.5186 20.4372 12.5629 18.4814 12.5628 16.0588C12.5628 13.6361 14.5185 11.6804 16.9412 11.6804Z" fill="white" />
              </svg>
            </label> */}
          </div>

          <div className={navStyles['nav__content']}>
            <div className={navStyles['nav__profile']}>
              <div className={navStyles['nav__profile-img-wrapper']}>
                <img src="account-nav/account-nav-img.png" alt="" width={213} height={251} />


                {character.char_is_online === 1 ? (
                  <div className={navStyles['nav__profile-img-label']}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="#43FE0A" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="9" fill="#80FF46" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="5" fill="#80FF46" />
                    </svg>
                    Онлайн
                  </div>
                ) : (
                  <div className={navStyles['nav__profile-img-label']}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="#FE0A0A" fillOpacity="0.1" />
                      <circle cx="12.2458" cy="12.2477" r="7.68525" fill="#FF4646" fillOpacity="0.1" />
                      <circle cx="12.2481" cy="12.2471" r="4.26958" fill="#FF4646" />
                    </svg>
                    Оффлайн
                  </div>
                )}



              </div>

              <ul className={`list-reset ${navStyles['nav__profile-list']}`}>
                <li className={navStyles['nav__profile-item']}>
                  <div className={navStyles['nav__profile-item-block']}>
                    Игровое имя
                    <span>{character.char_name}</span>
                  </div>
                  <div className={navStyles['nav__profile-item-block']}>
                    ID игрока
                    <span>{character.char_id}</span>
                  </div>
                </li>

                <li className={navStyles['nav__profile-item']}>
                  <div className={navStyles['nav__profile-item-block']}>
                    Сеанс
                    <span>Играет на сервер #1</span>
                  </div>
                  <div className={navStyles['nav__profile-item-block']}>
                    Регистрация
                    <span>{new Date(character.char_reg_time * 1000).toLocaleDateString('ru-RU')}</span>
                  </div>
                </li>

                <li className={navStyles['nav__profile-item']}>
                  <div className={navStyles['nav__profile-item-block']}>
                    IP адрес
                    <span>{character.char_last_ip}</span>
                  </div>
                  <div className={navStyles['nav__profile-item-block']}>
                    Уровень
                    <span>{character.char_level} (опыт: {character.char_exp})</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={navStyles['nav__account']}>
              <h3 className={navStyles['nav__account-title']}>
                Управление <br />
                аккаунтом
              </h3>
              <div className={navStyles['nav__account-btns']}>
                {/* <button className={`btn-reset ${navStyles['nav__account-btn']}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                    <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                  </svg>
                  Забанить аккаунт
                </button>
                <button className={`btn-reset ${navStyles['nav__account-btn']}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                    <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                  </svg>
                  Выдать предупреждение
                </button> */}

                <Link
                  href="/logs"
                  className={`btn-reset ${navStyles['nav__account-btn']}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4749 6.99967L12 11.3605L7.52511 6.99967L6 8.48592L12 14.333L18 8.48592L16.4749 6.99967Z" fill="white" />
                    <path d="M7.52511 18.3333L12 13.9725L16.4749 18.3333L18 16.8471L12 11L6 16.8471L7.52511 18.3333Z" fill="white" />
                  </svg>
                  История логов
                </Link>
              </div>
            </div>
          </div>

          <div className={navStyles.nav__tabs}>
            <button
              className={`btn-reset ${navStyles.nav__tab} ${activeTab === Tabs.GENERAL ? navStyles['nav__tab--active'] : ''
                }`}
              onClick={() => setActiveTab(Tabs.GENERAL)}
            >
              Общая информация
            </button>

            <button
              className={`btn-reset inactive ${navStyles.nav__tab} ${activeTab === Tabs.PUNISHMENTS ? navStyles['nav__tab--active'] : ''
                }`}
              onClick={() => setActiveTab(Tabs.PUNISHMENTS)}
            >
              История наказаний
            </button>

            <button
              className={`btn-reset ${navStyles.nav__tab} ${activeTab === Tabs.MONEY ? navStyles['nav__tab--active'] : ''
                }`}
              onClick={() => setActiveTab(Tabs.MONEY)}
            >
              Денежные операции
            </button>

            <button
              className={`btn-reset ${navStyles.nav__tab} ${activeTab === Tabs.ACTIVITY ? navStyles['nav__tab--active'] : ''
                }`}
              onClick={() => setActiveTab(Tabs.ACTIVITY)}
            >
              Активность
            </button>

            <button
              className={`btn-reset ${navStyles.nav__tab} ${activeTab === Tabs.INVENTORY ? navStyles['nav__tab--active'] : ''
                }`}
              onClick={() => setActiveTab(Tabs.INVENTORY)}
            >
              Инвентарь
            </button>

            <button
              className={`btn-reset ${navStyles.nav__tab} ${activeTab === Tabs.CARS ? navStyles['nav__tab--active'] : ''
                }`}
              onClick={() => setActiveTab(Tabs.CARS)}
            >
              Автомобили
            </button>
          </div>
        </div>
      </section>

      {activeTab === Tabs.GENERAL && (
        <General
          character={character}
          characters={characters}
          nicknameHistory={nicknameHistory}
          ipHistory={ipHistory}
          user={user}
        />
      )}
      {activeTab === Tabs.PUNISHMENTS && <Punishments />}
      {activeTab === Tabs.MONEY && <Money />}
      {activeTab === Tabs.ACTIVITY && <Activity
        character={character}
      />}
      {activeTab === Tabs.INVENTORY && <Inventory />}
      {activeTab === Tabs.CARS && <Cars />}
    </div>
  )
}