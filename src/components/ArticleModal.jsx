import { useEffect } from 'react'
import { useLang } from '../context/LangContext'
import t from '../translations'
import { Link } from 'react-router-dom'
import './ArticleModal.css'

const articleImages = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1758691737357-12839a28de6d?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1664463760781-f159dfe3af30?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1200&h=400&fit=crop',
]

function ArticleModal({ index, onClose }) {
  const { lang } = useLang()
  const T = t[lang]
  const n = index + 1

  const title = T[`news_${n}_title`]
  const date = T[`news_${n}_date`]
  const cat = T[`news_${n}_cat`]
  const body = T[`news_${n}_body`]
  const image = articleImages[index]

  const contactLabel = lang === 'hr' ? 'Imate pitanje?' : 'Have a question?'
  const contactBtn = lang === 'hr' ? 'Kontaktirajte nas' : 'Contact us'

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="amodal-overlay" onClick={onClose}>
      <div className="amodal" onClick={e => e.stopPropagation()}>
        <button className="amodal__close" onClick={onClose} aria-label="Zatvori">✕</button>

        <div className="amodal__hero" style={{ backgroundImage: `url(${image})` }}>
          <div className="amodal__hero-overlay" />
          <div className="amodal__hero-content">
            <span className="amodal__cat">{cat}</span>
            <h2 className="amodal__title">{title}</h2>
            <span className="amodal__date">{date}</span>
          </div>
        </div>

        <div className="amodal__body">
          {body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="amodal__cta">
            <p>{contactLabel}</p>
            <Link to="/kontakt" className="amodal__cta-btn" onClick={onClose}>{contactBtn}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleModal
