import { useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext'

// De språk som sidan stöder. Allt annat räknas som ogiltigt.
const SUPPORTED = ['sv', 'en']
const STORAGE_KEY = 'sprak'

// Läser besökarens tidigare val. Värdet i localStorage kan ha ändrats av vem som helst
// i webbläsaren, så det kontrolleras mot listan innan det används.
function readSavedLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return SUPPORTED.includes(saved) ? saved : 'sv'
  } catch {
    // localStorage kan vara blockerat (t.ex. privat läge). Då används svenska.
    return 'sv'
  }
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSavedLanguage)

  useEffect(() => {
    // lang-attributet på <html> gör att skärmläsare läser upp texten med rätt uttal
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Om sparandet misslyckas fungerar sidan ändå, valet glöms bara vid nästa besök.
    }
  }, [lang])

  const toggleLang = () => setLang((current) => (current === 'sv' ? 'en' : 'sv'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
