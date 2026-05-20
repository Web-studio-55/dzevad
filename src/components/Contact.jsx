import { useLang } from '../context/LangContext'
import t from '../translations'
import './Contact.css'
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'

function Contact() {
  const { lang } = useLang()
  const T = t[lang]

  const contactItems = [
    { icon: <FaMapMarkerAlt />, label: T.contact_addr_label, value: 'Ulica Vjekoslava Babukića 5' },
    { icon: <FaMobileAlt />, label: T.contact_phone_label, value: '+385916214469' },
    { icon: <FaEnvelope />, label: 'E-mail', value: 'odvjetnik.zahirovic@gmail.com' },
  ]

  return (
    <section className="contact">
      <div className="contact__map">
        <iframe
          title="Lokacija ureda"
          src="https://maps.google.com/maps?q=Ulica+Vjekoslava+Babuki%C4%87a+5,+Zagreb,+Croatia&z=16&output=embed"
          width="100%"
          height="500"
          style={{ border: 0, display: 'block', width: '100%', height: '500px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="contact__info">
        <div className="contact__heading-row">
          <h2 className="contact__title">{T.contact_title}</h2>
          <span className="contact__title-line"></span>
        </div>

        <p className="contact__subtitle">{T.contact_sub}</p>

        <p className="contact__tagline">
          {lang === 'en'
            ? 'First consultation and basic case assessment free of charge.'
            : 'Prvi razgovor i osnovna procjena slučaja bez naknade.'}
        </p>

        <ul className="contact__list">
          {contactItems.map((item, idx) => (
            <li key={idx} className="contact__item">
              <span className="contact__item-icon">{item.icon}</span>
              <div className="contact__item-text">
                <strong className="contact__item-label">{item.label}</strong>
                <span className="contact__item-value">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>

        <a href="#" className="contact__cta">{T.contact_more}</a>
      </div>
    </section>
  )
}

export default Contact
