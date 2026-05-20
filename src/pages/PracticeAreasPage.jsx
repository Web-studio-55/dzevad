import PracticeAreas from '../components/PracticeAreas'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './PracticeAreasPage.css'

function PracticeAreasPage() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <div className="pa-page">
      <section className="pa-page__hero">
        <div className="pa-page__hero-overlay" />
        <div className="pa-page__hero-content">
          <h1 className="pa-page__hero-title">{T.pap_hero_title}</h1>
          <p className="pa-page__hero-sub">{T.pap_hero_sub}</p>
        </div>
      </section>

      <PracticeAreas />
    </div>
  )
}

export default PracticeAreasPage
