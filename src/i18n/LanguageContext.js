import { createContext } from 'react'

// Delad "behållare" för valt språk. Alla komponenter under LanguageProvider kan läsa den.
export const LanguageContext = createContext(null)
