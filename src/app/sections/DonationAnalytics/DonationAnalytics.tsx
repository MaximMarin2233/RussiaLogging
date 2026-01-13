import cardsInfStyles from '@/components/CardsInf/CardsInf.module.scss'

export default function MainInf() {
  return (
    <section className={cardsInfStyles['cards-inf']}>
      <div className="container">
        <h2 className={`main-title ${cardsInfStyles['cards-inf__title']}`}>Аналитика доната</h2>

        <ul className={`${cardsInfStyles['cards-inf__list']} list-reset`}>
          <li className={`${cardsInfStyles['cards-inf__item']} ${cardsInfStyles['cards-inf__item--column']} ${cardsInfStyles['cards-inf__item--purple']}`}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="donation-analytics/donation-analytics-1.png" alt="" aria-hidden={true} />
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>Всего выполнено</div>
            <h3 className={`${cardsInfStyles['cards-inf__item-subtitle']}`}>1.450.000 ₽</h3>
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>За текущий месяц</div>
          </li>
          <li className={`${cardsInfStyles['cards-inf__item']} ${cardsInfStyles['cards-inf__item--column']} ${cardsInfStyles['cards-inf__item--purple']}`}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="donation-analytics/donation-analytics-2.png" alt="" aria-hidden={true} />
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>Всего RC выдано</div>
            <h3 className={`${cardsInfStyles['cards-inf__item-subtitle']}`}>3.534.000 RC</h3>
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>С учетом акция (+30)</div>
          </li>
          <li className={`${cardsInfStyles['cards-inf__item']} ${cardsInfStyles['cards-inf__item--column']} ${cardsInfStyles['cards-inf__item--purple']}`}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="donation-analytics/donation-analytics-3.png" alt="" aria-hidden={true} />
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>RC потрачено</div>
            <h3 className={`${cardsInfStyles['cards-inf__item-subtitle']}`}>1.334.000 RC</h3>
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>На покупки в игре</div>
          </li>
          <li className={`${cardsInfStyles['cards-inf__item']} ${cardsInfStyles['cards-inf__item--column']} ${cardsInfStyles['cards-inf__item--grey']}`}>
            <img className={cardsInfStyles['cards-inf__item-img']} src="donation-analytics/donation-analytics-4.png" alt="" aria-hidden={true} />
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>Остаток RC</div>
            <h3 className={`${cardsInfStyles['cards-inf__item-subtitle']}`}>3.534.000 RC</h3>
            <div className={`${cardsInfStyles['cards-inf__item-text']}`}>У всех игроков</div>
          </li>
        </ul>
      </div>
    </section>
  )
}
