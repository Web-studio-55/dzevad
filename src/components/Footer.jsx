import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './Footer.css'
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'

function Footer() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__contact-item">
          <FaMapMarkerAlt className="footer__contact-icon" />
          <span>Ulica Vjekoslava Babukića 5</span>
        </div>
        <div className="footer__contact-item">
          <FaMobileAlt className="footer__contact-icon" />
          <span>+385 91 621 4469</span>
        </div>
        <div className="footer__contact-item">
          <FaEnvelope className="footer__contact-icon" />
          <span>odvjetnik.zahirovic@gmail.com</span>
        </div>
      </div>
      <div className="footer__links">
        <Link to="/pravila-privatnosti" className="footer__link">{T.footer_privacy}</Link>
        <span className="footer__sep">|</span>
        <Link to="/uvjeti-koristenja" className="footer__link">{T.footer_terms}</Link>
        <span className="footer__sep">|</span>
        <Link to="/pravila-kolacica" className="footer__link">{T.footer_cookies}</Link>
        <span className="footer__sep">|</span>
        <a href="#" className="footer__link" onClick={e => e.preventDefault()}>{T.footer_settings}</a>
      </div>
      <div className="footer__copy">
        © {new Date().getFullYear()} Odvjetnik Dževad Zahirović. {lang === 'en' ? 'All rights reserved.' : 'Sva prava pridržana.'}
      </div>
    </footer>
  )
}

export default Footer
