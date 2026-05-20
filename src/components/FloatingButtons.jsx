import { useLang } from '../context/LangContext'
import t from '../translations'
import './FloatingButtons.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function FloatingButtons() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <div className="floating-buttons">
      <a
        href="tel:+385916214469"
        className="floating-buttons__consulting"
        aria-label="Pozovite nas"
      >
        <FaPhone className="floating-buttons__icon" />
        <span>{lang === 'en' ? 'Call us' : 'Pozovite nas'}</span>
      </a>

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
