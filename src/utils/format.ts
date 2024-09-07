import { CURRENCY_MAP } from '@/helpers/constants'
import i18n, { DEFAULT_LANGUAGE } from '@/i18n/i18n'

export const getFormattedDate = (date: Date): string => {
  const formattedDate = new Intl.DateTimeFormat(i18n.language, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)

  return formattedDate
}

export const getFormattedPrice = (price: number): string => {
  const language = i18n.language

  const formattedPrice = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    currency: CURRENCY_MAP[language] ?? CURRENCY_MAP[DEFAULT_LANGUAGE],
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price)

  return formattedPrice
}
