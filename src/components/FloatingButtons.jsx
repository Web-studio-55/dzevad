import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './FloatingButtons.css'
import { FaWhatsapp, FaVideo } from 'react-icons/fa'

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
        href={`https://wa.me/385994468065?text=${encodeURIComponent(T.float_whatsapp_msg)}`}
        className="floating-buttons__whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Javite se na WhatsApp"
      >
        <FaWhatsapp />
        <span className="floating-buttons__whatsapp-label">{T.float_whatsapp}</span>
      </a>
    </div>
  )
}

export default FloatingButtons
