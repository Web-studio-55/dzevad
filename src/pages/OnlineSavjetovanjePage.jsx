import { useState } from 'react'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './OnlineSavjetovanjePage.css'

function OnlineSavjetovanjePage() {
  const { lang } = useLang()
  const T = t[lang]

  const [form, setForm] = useState({ ime: '', email: '', telefon: '', poruka: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <div className="os-page">
      <section className="os-page__hero">
        <div className="os-page__hero-overlay" />
        <div className="os-page__hero-content">
          <h1 className="os-page__hero-title">{T.os_hero_title}</h1>
          <p className="os-page__hero-sub">{T.os_hero_sub}</p>
        </div>
      </section>

      <div className="os-page__body">
        <div className="os-page__col os-page__col--info">
          <h2 className="os-page__heading">{T.os_how_heading}</h2>
          <p className="os-page__text">{T.os_p1}</p>
          <p className="os-page__text">{T.os_p2}</p>

          <h3 className="os-page__subheading">{T.os_what_heading}</h3>
          <ul className="os-page__list">
            <li>{T.os_li1}</li>
            <li>{T.os_li2}</li>
            <li>{T.os_li3}</li>
            <li>{T.os_li4}</li>
            <li>{T.os_li5}</li>
          </ul>

          <h3 className="os-page__subheading">{T.os_contact_heading}</h3>
          <div className="os-page__contact-items">
            <div className="os-page__contact-item">
              <span className="os-page__contact-label">E-{lang === 'hr' ? 'pošta' : 'mail'}</span>
              <a href="mailto:odvjetnik.zahirovic@gmail.com" className="os-page__contact-value">
                odvjetnik.zahirovic@gmail.com
              </a>
            </div>
            <div className="os-page__contact-item">
              <span className="os-page__contact-label">{T.contact_phone_label}</span>
              <span className="os-page__contact-value">+385 99 210 3025</span>
            </div>
            <div className="os-page__contact-item">
              <span className="os-page__contact-label">{T.os_addr_label}</span>
              <span className="os-page__contact-value">Ulica Vjekoslava Babukića 5, Zagreb</span>
            </div>
          </div>
        </div>

        <div className="os-page__col os-page__col--form">
          <h2 className="os-page__heading">{T.os_form_heading}</h2>
          <p className="os-page__tagline">{T.os_form_tagline}</p>
          <p className="os-page__text">{T.os_form_sub}</p>

          {sent ? (
            <div className="os-page__success">
              <span className="os-page__success-check">✓</span>
              <p>{T.os_success}</p>
            </div>
          ) : (
            <form className="os-page__form" onSubmit={submit}>
              <div className="os-page__field">
                <label className="os-page__label">{T.os_name_label}</label>
                <input
                  className="os-page__input"
                  type="text"
                  name="ime"
                  value={form.ime}
                  onChange={handle}
                  required
                  placeholder={T.os_name_ph}
                />
              </div>
              <div className="os-page__field">
                <label className="os-page__label">{T.os_email_label}</label>
                <input
                  className="os-page__input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  required
                  placeholder="ime@gmail.com"
                />
              </div>
              <div className="os-page__field">
                <label className="os-page__label">{T.os_phone_label}</label>
                <input
                  className="os-page__input"
                  type="tel"
                  name="telefon"
                  value={form.telefon}
                  onChange={handle}
                  placeholder="+385 xx xxx xxxx"
                />
              </div>
              <div className="os-page__field">
                <label className="os-page__label">{T.os_msg_label}</label>
                <textarea
                  className="os-page__textarea"
                  name="poruka"
                  value={form.poruka}
                  onChange={handle}
                  required
                  rows={6}
                  placeholder={T.os_msg_ph}
                />
              </div>
              <button type="submit" className="os-page__submit">{T.os_submit}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default OnlineSavjetovanjePage
