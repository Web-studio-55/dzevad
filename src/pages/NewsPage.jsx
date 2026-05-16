import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import t from '../translations'
import './NewsPage.css'

const articleKeys = [
  { date: 'news_1_date', cat: 'news_1_cat', title: 'news_1_title', excerpt: 'news_1_excerpt', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop' },
  { date: 'news_2_date', cat: 'news_2_cat', title: 'news_2_title', excerpt: 'news_2_excerpt', image: 'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=800&h=450&fit=crop' },
  { date: 'news_3_date', cat: 'news_3_cat', title: 'news_3_title', excerpt: 'news_3_excerpt', image: 'https://images.unsplash.com/photo-1758691737357-12839a28de6d?w=800&h=450&fit=crop' },
  { date: 'news_4_date', cat: 'news_4_cat', title: 'news_4_title', excerpt: 'news_4_excerpt', image: 'https://images.unsplash.com/photo-1664463760781-f159dfe3af30?w=800&h=450&fit=crop' },
  { date: 'news_5_date', cat: 'news_5_cat', title: 'news_5_title', excerpt: 'news_5_excerpt', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop' },
  { date: 'news_6_date', cat: 'news_6_cat', title: 'news_6_title', excerpt: 'news_6_excerpt', image: 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=800&h=450&fit=crop' },
]

function NewsPage() {
  const { lang } = useLang()
  const T = t[lang]

  return (
    <div className="news-page">

      <section className="news-page__hero">
        <h1 className="news-page__hero-title">{T.news_hero_title}</h1>
        <p className="news-page__hero-sub">{T.news_hero_sub}</p>
      </section>

      <section className="news-page__articles">
        <h2 className="news-page__section-heading">{T.news_section}</h2>
        <div className="news-page__grid">
          {articleKeys.map((a, i) => (
            <article key={i} className="news-card">
              <div className="news-card__thumbnail">
                <img src={a.image} alt={T[a.title]} />
              </div>
              <div className="news-card__body">
                <span className="news-card__date">{T[a.date]}</span>
                <span className="news-card__category">{T[a.cat]}</span>
                <h3 className="news-card__title">{T[a.title]}</h3>
                <p className="news-card__excerpt">{T[a.excerpt]}</p>
                <Link to={`/vijesti/${i + 1}`} className="news-card__link">
                  {T.news_read} &gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}

export default NewsPage
