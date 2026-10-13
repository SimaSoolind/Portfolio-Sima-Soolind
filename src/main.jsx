import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageProvider from './i18n/LanguageProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* LanguageProvider gör valt språk tillgängligt för hela sidan */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
