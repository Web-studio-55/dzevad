import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './FloatingButtons.css'
import { FaEnvelope, FaVideo } from 'react-icons/fa'

function FloatingButtons() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <div className="floating-buttons">
      <Link
        to="/online-savjetovanje"
        className="floating-buttons__consulting"
        aria-label="Online savjetovanje"
      >
        <FaVideo className="floating-buttons__icon" />
        <span>{T.float_consulting}</span>
      </Link>

      <a
        href="mailto:odvjetnik.zahirovic@gmail.com"
        className="floating-buttons__whatsapp"
        aria-label="Pošaljite e-mail"
      >
        <FaEnvelope />
        <span className="floating-buttons__whatsapp-label">
          {lang === 'en' ? 'Email us' : 'Pošaljite e-mail'}
          <span className="floating-buttons__whatsapp-sub">odvjetnik.zahirovic@gmail.com</span>
        </span>
      </a>
    </div>
  )
}

export default FloatingButtons
