import { useLang } from '../context/LangContext'
import t from '../translations'
import './PracticeAreas.css'
import {
  FaUsers,
  FaSearch,
  FaBalanceScale,
  FaFileContract,
  FaHandshake,
  FaFileAlt,
  FaGavel,
  FaHome,
  FaBuilding,
  FaLightbulb,
} from 'react-icons/fa'

const icons = [
  <FaUsers />, <FaBuilding />, <FaBalanceScale />, <FaFileContract />,
  <FaHandshake />, <FaFileAlt />, <FaGavel />, <FaHome />,
  <FaSearch />, <FaLightbulb />,
]

const areaKeys = [
  ['pa_1_title', 'pa_1_desc'],
  ['pa_9_title', 'pa_9_desc'],
  ['pa_3_title', 'pa_3_desc'],
  ['pa_4_title', 'pa_4_desc'],
  ['pa_5_title', 'pa_5_desc'],
  ['pa_6_title', 'pa_6_desc'],
  ['pa_7_title', 'pa_7_desc'],
  ['pa_8_title', 'pa_8_desc'],
  ['pa_2_title', 'pa_2_desc'],
  ['pa_10_title', 'pa_10_desc'],
]

function PracticeAreaCard({ icon, title, desc }) {
  return (
    <div className="pa-card">
      <div className="pa-card__header">
        <div className="pa-card__icon">{icon}</div>
        <h3 className="pa-card__title">{title}</h3>
      </div>
      <p className="pa-card__desc">{desc}</p>
    </div>
  )
}

function PracticeAreas() {
  const { lang } = useLang()
  const T = t[lang]

  const areas = areaKeys.map(([tk, dk], i) => ({
    icon: icons[i],
    title: T[tk],
    desc: T[dk],
  }))

  return (
    <section className="practice-areas" id="podrucje-rada">
      <div className="practice-areas__header">
        <h2 className="practice-areas__title">{T.pa_title}</h2>
        <div className="practice-areas__underline"></div>
        <p className="practice-areas__subtitle">{T.pa_subtitle}</p>
      </div>

      <div className="practice-areas__grid">
        {areas.slice(0, 9).map((area, i) => (
          <PracticeAreaCard key={i} icon={area.icon} title={area.title} desc={area.desc} />
        ))}
      </div>

      <div className="practice-areas__last-row">
        <PracticeAreaCard icon={areas[9].icon} title={areas[9].title} desc={areas[9].desc} />
      </div>
    </section>
  )
}

export default PracticeAreas
