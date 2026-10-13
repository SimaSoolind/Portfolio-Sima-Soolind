import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import { texts } from './texts'

// Ger komponenten valt språk, en funktion för att byta språk och texterna för det språket.
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage måste användas inuti LanguageProvider')
  }
  return { ...context, t: texts[context.lang] }
}
