import { useState } from 'react'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './FloatingButtons.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function FloatingButtons() {
  const { lang } = useLang()
  const T = t[lang]
  const [copied, setCopied] = useState(false)

  const handlePhone = (e) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (!isMobile) {
      e.preventDefault()
      navigator.clipboard.writeText('+385916214469')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="floating-buttons">
      <a
        href="tel:+385916214469"
        className="floating-buttons__consulting"
        aria-label="Pozovite nas"
        onClick={handlePhone}
      >
        <FaPhone className="floating-buttons__icon" />
        <span>
          {copied
            ? (lang === 'en' ? 'Copied!' : 'Kopirano!')
            : (lang === 'en' ? 'Call us' : 'Pozovite nas')}
        </span>
      </a>

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
