import { useLang } from '../context/LangContext'
import t from '../translations'
import './Hero.css'

function Hero() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <section className="hero">
      <div className="hero__inner">
      <div className="hero__content">
        <div className="hero__name-row">
          <span className="hero__name">Zahirović<br />Dževad</span>
        </div>

        <h1 className="hero__heading">{T.hero_heading}</h1>

        <p className="hero__subtext">
          <span className="hero__subtext--highlight">
            {lang === 'en'
              ? <>Expert and efficient legal assistance in disputes, <strong>real&nbsp;estate</strong>, <strong>family</strong>, <strong>inheritance</strong> and <strong>criminal&nbsp;law</strong>.</>
              : <>Stručna i učinkovita pravna pomoć u području <strong>sporova</strong>, <strong>nekretnina</strong>, <strong>obiteljskog</strong>, <strong>nasljednog</strong> i <strong>kaznenog&nbsp;prava</strong>.</>}
          </span>
          <br />
          <span className="hero__subtext--secondary">{T.hero_sub.split('\n')[1]}</span>
        </p>

        <a href="#podrucje-rada" className="hero__cta">{T.hero_cta}</a>
      </div>
      <div className="hero__photo">
        <img src="/dzevad-hero.jpg" alt="Zahirović Dževad" />
      </div>
      </div>
    </section>
  )
}

export default Hero
