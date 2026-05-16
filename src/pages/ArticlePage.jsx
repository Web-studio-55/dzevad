import { useParams, Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './ArticlePage.css'

const articleImages = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=500&fit=crop',
  'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=1200&h=500&fit=crop',
  'https://images.unsplash.com/photo-1758691737357-12839a28de6d?w=1200&h=500&fit=crop',
  'https://images.unsplash.com/photo-1664463760781-f159dfe3af30?w=1200&h=500&fit=crop',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=500&fit=crop',
  'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1200&h=500&fit=crop',
]

function ArticlePage() {
  const { id } = useParams()
  const { lang } = useLang()
  const T = t[lang]

  const idx = parseInt(id) - 1
  if (idx < 0 || idx > 5) return null

  const n = idx + 1
  const title = T[`news_${n}_title`]
  const date = T[`news_${n}_date`]
  const cat = T[`news_${n}_cat`]
  const body = T[`news_${n}_body`]
  const image = articleImages[idx]

  const backLabel = lang === 'hr' ? '← Natrag na vijesti' : '← Back to news'
  const contactLabel = lang === 'hr'
    ? 'Imate pitanja? Kontaktirajte nas'
    : 'Have questions? Contact us'
  const contactBtn = lang === 'hr' ? 'Stupite u kontakt' : 'Get in touch'

  return (
    <div className="article-page">
      <div className="article-page__hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="article-page__hero-overlay" />
        <div className="article-page__hero-content">
          <span className="article-page__cat">{cat}</span>
          <h1 className="article-page__title">{title}</h1>
          <span className="article-page__date">{date}</span>
        </div>
      </div>

      <div className="article-page__body">
        <Link to="/vijesti" className="article-page__back">{backLabel}</Link>

        <div className="article-page__text">
          {body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="article-page__cta">
          <p>{contactLabel}</p>
          <Link to="/kontakt" className="article-page__cta-btn">{contactBtn}</Link>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
