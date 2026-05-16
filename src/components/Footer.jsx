import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './Footer.css'

function Footer() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <footer className="footer">
      <div className="footer__links">
        <Link to="/pravila-privatnosti" className="footer__link">{T.footer_privacy}</Link>
        <span className="footer__sep">|</span>
        <Link to="/uvjeti-koristenja" className="footer__link">{T.footer_terms}</Link>
        <span className="footer__sep">|</span>
        <Link to="/pravila-kolacica" className="footer__link">{T.footer_cookies}</Link>
        <span className="footer__sep">|</span>
        <a href="#" className="footer__link" onClick={e => e.preventDefault()}>{T.footer_settings}</a>
      </div>
    </footer>
  )
}

export default Footer
