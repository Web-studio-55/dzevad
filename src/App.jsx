import { HashRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import FloatingButtons from './components/FloatingButtons'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'
import OnlineSavjetovanjePage from './pages/OnlineSavjetovanjePage'
import ArticlePage from './pages/ArticlePage'
import './App.css'

function App() {
  return (
    <LangProvider>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/vijesti" element={<NewsPage />} />
        <Route path="/podrucje-rada" element={<PracticeAreasPage />} />
        <Route path="/pravila-privatnosti" element={<PrivacyPage />} />
        <Route path="/uvjeti-koristenja" element={<TermsPage />} />
        <Route path="/pravila-kolacica" element={<CookiesPage />} />
        <Route path="/online-savjetovanje" element={<OnlineSavjetovanjePage />} />
        <Route path="/vijesti/:id" element={<ArticlePage />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <CookieConsent />
    </HashRouter>
    </LangProvider>
  )
}

export default App
