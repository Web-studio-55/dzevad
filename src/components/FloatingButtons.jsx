import { useLang } from '../context/LangContext'
import t from '../translations'
import './FloatingButtons.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function FloatingButtons() {
  const { lang } = useLang()
  const T = t[lang]
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <div className="floating-buttons">
      {isMobile ? (
        <a
          href="tel:+385916214469"
          className="floating-buttons__consulting"
          aria-label="Pozovite nas"
        >
          <FaPhone className="floating-buttons__icon" />
          <span className="floating-buttons__consulting-text">
            <span>{lang === 'en' ? 'Call us now' : 'Nazovite odmah'}</span>
            <span className="floating-buttons__consulting-sub">{lang === 'en' ? 'Response within 24h' : 'Odgovor u roku 24h'}</span>
          </span>
        </a>
      ) : (
        <div className="floating-buttons__consulting">
          <FaPhone className="floating-buttons__icon" />
          <span className="floating-buttons__consulting-text">
            <span>{lang === 'en' ? 'Call us now' : 'Nazovite odmah'}</span>
            <span className="floating-buttons__consulting-sub">{lang === 'en' ? 'Response within 24h' : 'Odgovor u roku 24h'}</span>
          </span>
        </div>
      )}

      <a
        href="mailto:odvjetnik.zahirovic@gmail.com"
        className="floating-buttons__whatsapp"
        aria-label="Pošaljite e-mail"
      >
        <FaEnvelope />
        <span className="floating-buttons__whatsapp-label">
          {lang === 'en' ? 'Email us' : 'Pošaljite e-mail'}
        </span>
      </a>
    </div>
  )
}

export default FloatingButtons
