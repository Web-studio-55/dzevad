import { useState } from 'react'
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './ContactPage.css'

function ContactPage() {
  const { lang } = useLang()
  const T = t[lang]

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    alert(T.cp_alert)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="contact-page">

      <section className="contact-page__hero">
        <h1 className="contact-page__hero-title">{T.cp_hero_title}</h1>
        <p className="contact-page__hero-sub">{T.cp_hero_sub}</p>
        <p className="contact-page__hero-tagline">
          {lang === 'en'
            ? 'First consultation and basic case assessment free of charge.'
            : 'Prvi razgovor i osnovna procjena slučaja bez naknade.'}
        </p>
      </section>

      <section className="contact-page__body">

        <div className="contact-page__info">
          <div className="contact-page__section-label">{T.cp_label}</div>
          <h2 className="contact-page__section-title">
            Zahirović Dževad
            <span className="contact-page__title-line" />
          </h2>

          <p className="contact-page__desc">{T.cp_desc}</p>

          <p className="contact-page__tagline">
            {lang === 'en'
              ? 'First consultation and basic case assessment free of charge.'
              : 'Prvi razgovor i osnovna procjena slučaja bez naknade.'}
          </p>

          <ul className="contact-page__details">
            <li className="contact-page__detail-item">
              <span className="contact-page__detail-icon"><FaMapMarkerAlt /></span>
              <div>
                <strong>{T.cp_addr}</strong>
                <span>Ulica Vjekoslava Babukića 5</span>
              </div>
            </li>
            <li className="contact-page__detail-item">
              <span className="contact-page__detail-icon"><FaMobileAlt /></span>
              <div>
                <strong>{T.cp_phone}</strong>
                <a href="tel:+385916214469">+385916214469</a>
              </div>
            </li>
            <li className="contact-page__detail-item">
              <span className="contact-page__detail-icon"><FaEnvelope /></span>
              <div>
                <strong>E-mail</strong>
                <a href="mailto:odvjetnik.zahirovic@gmail.com">odvjetnik.zahirovic@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-page__form-wrap">
          <form className="contact-page__form" onSubmit={handleSubmit}>
            <div className="contact-page__form-row">
              <div className="contact-page__field">
                <label>{T.cp_name_label}</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={T.cp_name_ph}
                  required
                />
              </div>
              <div className="contact-page__field">
                <label>{T.cp_email_label}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ime@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="contact-page__field">
              <label>{T.cp_phone_label}</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+385 ..."
              />
            </div>
            <div className="contact-page__field">
              <label>{T.cp_msg_label}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={T.cp_msg_ph}
                rows={6}
                required
              />
            </div>
            <button type="submit" className="contact-page__submit">{T.cp_submit}</button>
          </form>
        </div>
      </section>

      <section className="contact-page__map">
        <iframe
          title="Lokacija ureda"
          src="https://maps.google.com/maps?q=Ulica+Vjekoslava+Babuki%C4%87a+5,+Zagreb,+Croatia&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </div>
  )
}

export default ContactPage
