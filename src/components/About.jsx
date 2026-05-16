import { useLang } from '../context/LangContext'
import t from '../translations'
import './About.css'

function About() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="about__label">{T.about_label}</span>

          <div className="about__name-row">
            <span className="about__name">Zahirović Dževad</span>
          </div>

          <div className="about__paragraphs">
            <p>{T.about_p1}</p>
            <p>{T.about_p2}</p>
            <p>{T.about_p3}</p>
          </div>
        </div>

        <div className="about__photo-wrap">
          <div className="about__photo-circle">
            <img src="/dzevad-about.jpg" alt="Zahirović Dževad" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
