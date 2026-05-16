import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './Navbar.css'

function Navbar() {
  const { lang, setLang } = useLang()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isNews = location.pathname === '/vijesti'
  const isContact = location.pathname === '/kontakt'
  const isPractice = location.pathname === '/podrucje-rada'
  const T = t[lang]
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo" onClick={closeMenu}>
        <div className="navbar__logo-icon">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text
              x="26"
              y="31"
              textAnchor="middle"
              fill="#b49e7e"
              opacity="0.5"
              fontSize="26"
              fontFamily="Playfair Display, serif"
              fontWeight="700"
            >
              D
            </text>
            <text
              x="19"
              y="29"
              textAnchor="middle"
              fill="#c8b090"
              fontSize="24"
              fontFamily="Playfair Display, serif"
              fontWeight="700"
            >
              Z
            </text>
          </svg>
        </div>
        <div className="navbar__logo-text">
          <span className="navbar__logo-name">Zahirović<br />Dževad</span>
          <span className="navbar__logo-title">ODVJETNIK</span>
        </div>
      </Link>

      <button
        className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        <li className="navbar__link navbar__link--phone">
          <a href="tel:+385916214469">+385 91 621 4469</a>
        </li>
        <li className="navbar__separator">|</li>
        <li className={`navbar__link ${isHome ? 'navbar__link--active' : ''}`}>
          <Link to="/" onClick={closeMenu}>{T.nav_home}</Link>
        </li>
        <li className="navbar__separator">|</li>
        <li className={`navbar__link ${isPractice ? 'navbar__link--active' : ''}`}>
          <Link to="/podrucje-rada" onClick={closeMenu}>{T.nav_practice}</Link>
        </li>
        <li className="navbar__separator">|</li>
        <li className={`navbar__link ${isNews ? 'navbar__link--active' : ''}`}>
          <Link to="/vijesti" onClick={closeMenu}>{T.nav_news}</Link>
        </li>
        <li className="navbar__separator">|</li>
        <li className={`navbar__link ${isContact ? 'navbar__link--active' : ''}`}>
          <Link to="/kontakt" onClick={closeMenu}>{T.nav_contact}</Link>
        </li>
        <li className="navbar__separator">|</li>
        <li
          className="navbar__link navbar__link--lang"
          onClick={() => { setLang(lang === 'hr' ? 'en' : 'hr'); closeMenu(); }}
          style={{ cursor: 'pointer' }}
        >
          <a href="#" onClick={e => e.preventDefault()}>{lang === 'hr' ? '🇬🇧' : '🇭🇷'}</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
