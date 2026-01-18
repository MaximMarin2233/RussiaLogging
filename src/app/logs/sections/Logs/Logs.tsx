import styles from './Logs.module.scss'

export default function Logs() {
  return (
    <section className={styles['logs']}>
      <div className="container">
        <div className={styles['logs__filters-wrapper']}>
          <div className={styles['logs__filters-nav']}>
            <div className={styles['logs__filters-nav-block']}>
              <div className={styles['logs__filters-nav-title']}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25 10.2036C25 7.99447 23.2091 6.20361 21 6.20361H10C7.79086 6.20361 6 7.99447 6 10.2036V21.2036C6 23.4128 7.79086 25.2036 10 25.2036H21C23.2091 25.2036 25 23.4128 25 21.2036V10.2036ZM10.5238 19.834C10.5238 19.1497 11.0786 18.5949 11.7629 18.5949H19.2371C19.9214 18.5949 20.4762 19.1497 20.4762 19.834C20.4762 20.5184 19.9214 21.0732 19.2371 21.0732H11.7629C11.0786 21.0732 10.5238 20.5184 10.5238 19.834ZM20.4762 15.7036C20.4762 15.0193 19.9214 14.4645 19.2371 14.4645H11.7629C11.0786 14.4645 10.5238 15.0193 10.5238 15.7036C10.5238 16.388 11.0786 16.9427 11.7629 16.9427H19.2371C19.9214 16.9427 20.4762 16.388 20.4762 15.7036ZM10.5238 11.5732C10.5238 10.8888 11.0786 10.334 11.7629 10.334H19.2371C19.9214 10.334 20.4762 10.8888 20.4762 11.5732C20.4762 12.2575 19.9214 12.8123 19.2371 12.8123H11.7629C11.0786 12.8123 10.5238 12.2575 10.5238 11.5732Z" fill="#0D0D0D" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M25 10.2036C25 7.99447 23.2091 6.20361 21 6.20361H10C7.79086 6.20361 6 7.99447 6 10.2036V21.2036C6 23.4128 7.79086 25.2036 10 25.2036H21C23.2091 25.2036 25 23.4128 25 21.2036V10.2036ZM10.5238 19.834C10.5238 19.1497 11.0786 18.5949 11.7629 18.5949H19.2371C19.9214 18.5949 20.4762 19.1497 20.4762 19.834C20.4762 20.5184 19.9214 21.0732 19.2371 21.0732H11.7629C11.0786 21.0732 10.5238 20.5184 10.5238 19.834ZM20.4762 15.7036C20.4762 15.0193 19.9214 14.4645 19.2371 14.4645H11.7629C11.0786 14.4645 10.5238 15.0193 10.5238 15.7036C10.5238 16.388 11.0786 16.9427 11.7629 16.9427H19.2371C19.9214 16.9427 20.4762 16.388 20.4762 15.7036ZM10.5238 11.5732C10.5238 10.8888 11.0786 10.334 11.7629 10.334H19.2371C19.9214 10.334 20.4762 10.8888 20.4762 11.5732C20.4762 12.2575 19.9214 12.8123 19.2371 12.8123H11.7629C11.0786 12.8123 10.5238 12.2575 10.5238 11.5732Z" fill="url(#paint0_linear_400_844)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M25 10.2036C25 7.99447 23.2091 6.20361 21 6.20361H10C7.79086 6.20361 6 7.99447 6 10.2036V21.2036C6 23.4128 7.79086 25.2036 10 25.2036H21C23.2091 25.2036 25 23.4128 25 21.2036V10.2036ZM10.5238 19.834C10.5238 19.1497 11.0786 18.5949 11.7629 18.5949H19.2371C19.9214 18.5949 20.4762 19.1497 20.4762 19.834C20.4762 20.5184 19.9214 21.0732 19.2371 21.0732H11.7629C11.0786 21.0732 10.5238 20.5184 10.5238 19.834ZM20.4762 15.7036C20.4762 15.0193 19.9214 14.4645 19.2371 14.4645H11.7629C11.0786 14.4645 10.5238 15.0193 10.5238 15.7036C10.5238 16.388 11.0786 16.9427 11.7629 16.9427H19.2371C19.9214 16.9427 20.4762 16.388 20.4762 15.7036ZM10.5238 11.5732C10.5238 10.8888 11.0786 10.334 11.7629 10.334H19.2371C19.9214 10.334 20.4762 10.8888 20.4762 11.5732C20.4762 12.2575 19.9214 12.8123 19.2371 12.8123H11.7629C11.0786 12.8123 10.5238 12.2575 10.5238 11.5732Z" fill="url(#paint1_linear_400_844)" />
                  <defs>
                    <linearGradient id="paint0_linear_400_844" x1="5" y1="8.99773" x2="37.9273" y2="13.7522" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFBF80" />
                      <stop offset="1" stopColor="#B36E0D" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_400_844" x1="6" y1="6.20361" x2="29" y2="25.2036" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD943" />
                      <stop offset="1" stopColor="#FFA100" />
                    </linearGradient>
                  </defs>
                </svg>
                Серверы
              </div>
              <div className={styles['logs__filters-nav-content']}>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №1</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №2</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №3</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №4</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Сервер №5</div>
                </label>
              </div>
            </div>
            <div className={styles['logs__filters-nav-block']}>
              <div className={styles['logs__filters-nav-title']}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.4872 6.20361H11.5223C8.06253 6.20361 6 8.26511 6 11.7231V19.6746C6 23.1421 8.06253 25.2036 11.5223 25.2036H19.4777C22.9374 25.2036 25 23.1421 25 19.6841V11.7231C25.0095 8.26511 22.9469 6.20361 19.4872 6.20361ZM9.08904 15.5991C9.11755 13.9271 9.78288 12.3501 10.9615 11.1721C12.1781 9.95611 13.7939 9.29111 15.5047 9.29111C17.2156 9.29111 18.8314 9.95611 20.0385 11.1721C20.067 11.2006 20.0955 11.2386 20.124 11.2766V10.4596C20.124 10.0701 20.4472 9.74711 20.8369 9.74711C21.2266 9.74711 21.5497 10.0701 21.5497 10.4596V12.9771C21.5497 13.3666 21.2266 13.6896 20.8369 13.6896H18.3181C17.9284 13.6896 17.6053 13.3666 17.6053 12.9771C17.6053 12.5876 17.9284 12.2646 18.3181 12.2646H19.107C19.0785 12.2361 19.0595 12.2076 19.031 12.1791C18.09 11.2386 16.8354 10.7161 15.5047 10.7161C14.1741 10.7161 12.9194 11.2386 11.9785 12.1791C11.0565 13.1006 10.5433 14.3261 10.5243 15.6276C10.5148 16.0076 10.1916 16.3211 9.80189 16.3211H9.79239C9.4027 16.3211 9.08904 15.9886 9.08904 15.5991ZM20.0385 20.2351C18.8314 21.4416 17.2156 22.1161 15.5047 22.1161C13.7939 22.1161 12.1781 21.4511 10.971 20.2351C10.9425 20.2066 10.9139 20.1686 10.8854 20.1306V20.9381C10.8854 21.3276 10.5623 21.6506 10.1726 21.6506C9.78288 21.6506 9.45972 21.3276 9.45972 20.9381V18.4206C9.45972 18.0311 9.78288 17.7081 10.1726 17.7081H12.6913C13.081 17.7081 13.4042 18.0311 13.4042 18.4206C13.4042 18.8101 13.081 19.1331 12.6913 19.1331H11.9024C11.931 19.1616 11.95 19.1901 11.9785 19.2186C12.9194 20.1591 14.1741 20.6816 15.5047 20.6816C16.8354 20.6816 18.09 20.1591 19.031 19.2186C19.9625 18.2876 20.4852 17.0431 20.4852 15.7131C20.4852 15.3236 20.8084 15.0006 21.1981 15.0006C21.5878 15.0006 21.9109 15.3236 21.9109 15.7131C21.9109 17.4326 21.2456 19.0381 20.0385 20.2351Z" fill="url(#paint0_linear_400_890)" />
                  <defs>
                    <linearGradient id="paint0_linear_400_890" x1="6" y1="6.20361" x2="29" y2="25.2036" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD943" />
                      <stop offset="1" stopColor="#FFA100" />
                    </linearGradient>
                  </defs>
                </svg>
                Тип операции
              </div>
              <div className={styles['logs__filters-nav-content']}>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Денежные операции</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Админ-действия</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Наказания</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Чаты</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Организации</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Семьи</div>
                </label>
              </div>
            </div>
            <div className={`${styles['logs__filters-nav-block']} ${styles['logs__filters-nav-block--bg']}`}>
              <div className={styles['logs__filters-nav-title']}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 8.20361H10.75C7.9 8.20361 6 9.98103 6 12.6472V17.9794C6 20.6455 7.9 22.4229 10.75 22.4229H14.55L18.7775 25.0535C19.4045 25.4446 20.25 25.0269 20.25 24.3159V22.4229C23.1 22.4229 25 20.6455 25 17.9794V12.6472C25 9.98103 23.1 8.20361 20.25 8.20361Z" fill="url(#paint0_linear_392_5118)" />
                  <defs>
                    <linearGradient id="paint0_linear_392_5118" x1="6" y1="8.20361" x2="26.8891" y2="27.49" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD943" />
                      <stop offset="1" stopColor="#FFA100" />
                    </linearGradient>
                  </defs>
                </svg>
                Тип чата
              </div>
              <div className={styles['logs__filters-nav-content']}>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Обычный чат (/b, /s, /w )</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Фракционный (/f, /r, /d )</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Семейный (/fam)</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>VIP чат (/vip)</div>
                </label>
                <label className={styles['logs__filters-nav-label']}>
                  <input type="checkbox" />
                  <div className={styles['logs__filters-nav-label-square']}>
                    <span></span>
                  </div>
                  <div className={styles['logs__filters-nav-label-text']}>Личные сообщения (/pm)</div>
                </label>
              </div>
            </div>
          </div>
          <div className={styles['logs__filters-form']}>
            <div className={styles['logs__filters-form-blocks']}>
              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>
                  Поиск по нику
                </div>
                <input className={styles['logs__filters-form-input']} placeholder='Введите ник игрока...' />
              </div>
              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>
                  Сумма от
                </div>
                <input className={styles['logs__filters-form-input']} placeholder='0' />
              </div>
              <div className={styles['logs__filters-form-block']}>
                <div className={styles['logs__filters-nav-title']}>
                  Сумма до
                </div>
                <input className={styles['logs__filters-form-input']} placeholder='0' />
              </div>
            </div>
            <div className={styles['logs__filters-form-btns']}>
              <button className={`btn-reset ${styles['logs__filters-form-btn']}`}>
                Применить фильтры
              </button>
              <button className={`btn-reset ${styles['logs__filters-form-btn']}`}>
                Сбросить
              </button>
              <button className={`btn-reset ${styles['logs__filters-form-btn']}`}>
                Экспорт
              </button>
            </div>
          </div>
        </div>
        <div className={styles['logs__filters-table']}>
          <div className={styles['logs__filters-table-header']}>
            <div className={styles['logs__filters-table-header-column']}>
              Время
            </div>
            <div className={`${styles['logs__filters-table-header-column']} ${styles['logs__column-center']}`}>
              Сервер
            </div>
            <div className={styles['logs__filters-table-header-column']}>
              Тип
            </div>
            <div className={styles['logs__filters-table-header-column']}>
              Игрок
            </div>
            <div className={styles['logs__filters-table-header-column']}>
              Действие
            </div>
            <div className={`${styles['logs__filters-table-header-column']} ${styles['logs__column-center']}`}>
              Сумма
            </div>
            <div className={`${styles['logs__filters-table-header-column']} ${styles['logs__column-end']}`}>
              Баланс
            </div>
          </div>
          <div className={styles['logs__filters-table-row']}>
            <div className={styles['logs__filters-table-column']}>
              2025-12-13 14:34:22
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="41" rx="10" fill="url(#paint0_linear_401_1155)" />
                <rect x="0.5" y="0.5" width="39" height="40" rx="9.5" stroke="white" strokeOpacity="0.1" />
                <path d="M21.9973 16V25H19.9813V16.672L20.9893 17.584L17.1613 18.256V16.672L20.4973 16H21.9973Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_401_1155" x1="2.37288" y1="2.4322" x2="33.454" y2="40.2508" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6BC82" />
                    <stop offset="1" stopColor="#C94718" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles['logs__filters-table-column']}>
              <div className={styles['logs__filters-table-column-label']}>
                Денежные операции
              </div>
            </div>
            <div className={styles['logs__filters-table-column']}>
              <div className={styles['logs__filters-table-column-inf']}>
                Denny Walker
                <span>ID: 3449594</span>
              </div>
            </div>
            <div className={styles['logs__filters-table-column']}>
              Передал деньги игроку Ivan_Petrov через банк
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
              - 1.250.000 ₽
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-end']}`}>
              250.000.00 ₽
            </div>
          </div>
          <div className={styles['logs__filters-table-row']}>
            <div className={styles['logs__filters-table-column']}>
              2025-12-13 14:34:22
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="41" rx="10" fill="url(#paint0_linear_401_1155)" />
                <rect x="0.5" y="0.5" width="39" height="40" rx="9.5" stroke="white" strokeOpacity="0.1" />
                <path d="M21.9973 16V25H19.9813V16.672L20.9893 17.584L17.1613 18.256V16.672L20.4973 16H21.9973Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_401_1155" x1="2.37288" y1="2.4322" x2="33.454" y2="40.2508" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6BC82" />
                    <stop offset="1" stopColor="#C94718" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles['logs__filters-table-column']}>
              <div className={styles['logs__filters-table-column-label']}>
                Денежные операции
              </div>
            </div>
            <div className={styles['logs__filters-table-column']}>
              <div className={styles['logs__filters-table-column-inf']}>
                Denny Walker
                <span>ID: 3449594</span>
              </div>
            </div>
            <div className={styles['logs__filters-table-column']}>
              Передал деньги игроку Ivan_Petrov через банк
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
              - 1.250.000 ₽
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-end']}`}>
              250.000.00 ₽
            </div>
          </div>
          <div className={styles['logs__filters-table-row']}>
            <div className={styles['logs__filters-table-column']}>
              2025-12-13 14:34:22
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="41" rx="10" fill="url(#paint0_linear_401_1155)" />
                <rect x="0.5" y="0.5" width="39" height="40" rx="9.5" stroke="white" strokeOpacity="0.1" />
                <path d="M21.9973 16V25H19.9813V16.672L20.9893 17.584L17.1613 18.256V16.672L20.4973 16H21.9973Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_401_1155" x1="2.37288" y1="2.4322" x2="33.454" y2="40.2508" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6BC82" />
                    <stop offset="1" stopColor="#C94718" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles['logs__filters-table-column']}>
              <div className={styles['logs__filters-table-column-label']}>
                Денежные операции
              </div>
            </div>
            <div className={styles['logs__filters-table-column']}>
              <div className={styles['logs__filters-table-column-inf']}>
                Denny Walker
                <span>ID: 3449594</span>
              </div>
            </div>
            <div className={styles['logs__filters-table-column']}>
              Передал деньги игроку Ivan_Petrov через банк
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
              - 1.250.000 ₽
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-end']}`}>
              250.000.00 ₽
            </div>
          </div>
          <div className={styles['logs__filters-table-row']}>
            <div className={styles['logs__filters-table-column']}>
              2025-12-13 14:34:22
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="41" rx="10" fill="url(#paint0_linear_401_1155)" />
                <rect x="0.5" y="0.5" width="39" height="40" rx="9.5" stroke="white" strokeOpacity="0.1" />
                <path d="M21.9973 16V25H19.9813V16.672L20.9893 17.584L17.1613 18.256V16.672L20.4973 16H21.9973Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_401_1155" x1="2.37288" y1="2.4322" x2="33.454" y2="40.2508" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F6BC82" />
                    <stop offset="1" stopColor="#C94718" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={styles['logs__filters-table-column']}>
              <div className={styles['logs__filters-table-column-label']}>
                Денежные операции
              </div>
            </div>
            <div className={styles['logs__filters-table-column']}>
              <div className={styles['logs__filters-table-column-inf']}>
                Denny Walker
                <span>ID: 3449594</span>
              </div>
            </div>
            <div className={styles['logs__filters-table-column']}>
              Передал деньги игроку Ivan_Petrov через банк
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-center']}`}>
              - 1.250.000 ₽
            </div>
            <div className={`${styles['logs__filters-table-column']} ${styles['logs__column-end']}`}>
              250.000.00 ₽
            </div>
          </div>
        </div>

        <div className={styles['logs__filters-pagination']}>
          <button className={`btn-reset ${styles['logs__filters-pagination-btn']} ${styles['logs__filters-pagination-btn--nav']} ${styles['logs__filters-pagination-btn--inactive']}`}>
            Предыдущая
          </button>
          <button className={`btn-reset ${styles['logs__filters-pagination-btn']} ${styles['logs__filters-pagination-btn--active']}`}>
            1
          </button>
          <button className={`btn-reset ${styles['logs__filters-pagination-btn']}`}>
            2
          </button>
          <button className={`btn-reset ${styles['logs__filters-pagination-btn']}`}>
            3
          </button>
          <button className={`btn-reset ${styles['logs__filters-pagination-btn']} ${styles['logs__filters-pagination-btn--nav']}`}>
            Следующая
          </button>
        </div>
      </div>
    </section>
  )
}
