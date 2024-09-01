import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

import languageDetector from './languageDetector'
import enLocales from './locales/en/app.json'
import ukLocales from './locales/uk/app.json'

export const DEFAULT_LANGUAGE = 'en'

const resources: Resource = {
  en: { app: enLocales },
  uk: { app: ukLocales },
}

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: ['app'],
    compatibilityJSON: 'v3',
    debug: true,
    cleanCode: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
