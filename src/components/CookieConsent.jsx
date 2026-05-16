import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './CookieConsent.css'

const defaultPrefs = {
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
  personalization: true,
}

function CookieConsent() {
  const { lang } = useLang()
  const T = t[lang]

  const [visible, setVisible] = useState(false)
  const [view, setView] = useState('banner')
  const [prefs, setPrefs] = useState(defaultPrefs)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const save = (overridePrefs) => {
    const final = overridePrefs ?? prefs
    localStorage.setItem('cookie_consent', JSON.stringify(final))
    setView('saved')
    setTimeout(() => setVisible(false), 1800)
  }

  const acceptAll = () => save({ necessary: true, functional: true, analytics: true, marketing: true, personalization: true })
  const declineAll = () => save({ necessary: true, functional: false, analytics: false, marketing: false, personalization: false })
  const toggle = (key) => setPrefs(p => ({ ...p, [key]: !p[key] }))

  if (!visible) return null

  if (view === 'saved') {
    return (
      <div className="cookie-overlay">
        <div className="cookie-modal cookie-modal--saved">
          <span className="cookie-saved__check">✓</span>
          <p className="cookie-saved__text">{T.cookie_saved}</p>
        </div>
      </div>
    )
  }

  if (view === 'settings') {
    return (
      <div className="cookie-overlay">
        <div className="cookie-modal cookie-modal--wide">
          <div className="cookie-modal__header">
            <h3 className="cookie-modal__title">{T.cookie_settings_title}</h3>
            <button className="cookie-modal__close" onClick={declineAll} aria-label="Zatvori">✕</button>
          </div>
          <p className="cookie-modal__text">{T.cookie_settings_text}</p>

          <div className="cookie-categories">
            <div className="cookie-cat">
              <div className="cookie-cat__info">
                <strong>{T.cookie_necessary}</strong>
                <span>{T.cookie_necessary_desc}</span>
              </div>
              <div className="cookie-toggle cookie-toggle--locked">
                <span className="cookie-toggle__label">{T.cookie_always}</span>
              </div>
            </div>

            <div className="cookie-cat">
              <div className="cookie-cat__info">
                <strong>{T.cookie_functional}</strong>
                <span>{T.cookie_functional_desc}</span>
              </div>
              <label className="cookie-toggle__switch">
                <input type="checkbox" checked={prefs.functional} onChange={() => toggle('functional')} />
                <span className="cookie-toggle__slider" />
              </label>
            </div>

            <div className="cookie-cat">
              <div className="cookie-cat__info">
                <strong>{T.cookie_analytics}</strong>
                <span>{T.cookie_analytics_desc}</span>
              </div>
              <label className="cookie-toggle__switch">
                <input type="checkbox" checked={prefs.analytics} onChange={() => toggle('analytics')} />
                <span className="cookie-toggle__slider" />
              </label>
            </div>

            <div className="cookie-cat">
              <div className="cookie-cat__info">
                <strong>{T.cookie_marketing}</strong>
                <span>{T.cookie_marketing_desc}</span>
              </div>
              <label className="cookie-toggle__switch">
                <input type="checkbox" checked={prefs.marketing} onChange={() => toggle('marketing')} />
                <span className="cookie-toggle__slider" />
              </label>
            </div>

            <div className="cookie-cat">
              <div className="cookie-cat__info">
                <strong>{T.cookie_personalization}</strong>
                <span>{T.cookie_personalization_desc}</span>
              </div>
              <label className="cookie-toggle__switch">
                <input type="checkbox" checked={prefs.personalization} onChange={() => toggle('personalization')} />
                <span className="cookie-toggle__slider" />
              </label>
            </div>
          </div>

          <div className="cookie-modal__actions cookie-modal__actions--settings">
            <button className="cookie-modal__btn cookie-modal__btn--accept" onClick={acceptAll}>{T.cookie_accept}</button>
            <button className="cookie-modal__btn cookie-modal__btn--save" onClick={() => save()}>{T.cookie_save}</button>
            <button className="cookie-modal__btn cookie-modal__btn--decline" onClick={declineAll}>{T.cookie_decline}</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cookie-overlay">
      <div className="cookie-modal">
        <div className="cookie-modal__header">
          <h3 className="cookie-modal__title">{T.cookie_title}</h3>
          <button className="cookie-modal__close" onClick={declineAll} aria-label="Zatvori">✕</button>
        </div>
        <p className="cookie-modal__text">{T.cookie_text}</p>
        <div className="cookie-modal__actions">
          <button className="cookie-modal__btn cookie-modal__btn--accept" onClick={acceptAll}>{T.cookie_accept}</button>
          <button className="cookie-modal__btn cookie-modal__btn--decline" onClick={declineAll}>{T.cookie_decline}</button>
          <button className="cookie-modal__btn cookie-modal__btn--manage" onClick={() => setView('settings')}>{T.cookie_manage}</button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
