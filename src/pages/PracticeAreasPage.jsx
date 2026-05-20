import PracticeAreas from '../components/PracticeAreas'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './PracticeAreasPage.css'

function PracticeAreasPage() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <div className="pa-page">
      <PracticeAreas />
    </div>
  )
}

export default PracticeAreasPage
