//utils/languageDetectorPlugin.ts

import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization'
import { LanguageDetectorAsyncModule } from 'i18next'

import { DEFAULT_LANGUAGE } from './i18n'

const STORE_LANGUAGE_KEY = 'settings.lang'

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback) => {
    const deviceLanguage =
      Localization.getLocales()[0].languageCode ?? DEFAULT_LANGUAGE

    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) =>
        language
          ? // if language was stored before, use this language in the app
            callback(language)
          : // if language was not stored yet, use device's locale
            callback(deviceLanguage)
      )
    } catch (error) {
      console.error('Error reading language', error)
      return deviceLanguage
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language)
    } catch (error) {
      console.error('Error setting language', error)
    }
  },
}

export default languageDetector
