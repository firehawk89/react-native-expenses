import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text } from 'react-native'

import { namespace } from '../..'
import { Expense, PeriodType } from '../../types'
import styles from './styles'

interface ExpensesSummaryProps {
  data: Expense[]
  period: PeriodType
}

const ExpensesSummary: FC<ExpensesSummaryProps> = ({ data, period }) => {
  const { t } = useTranslation()

  const totalSum = useMemo(() => {
    const sum = data.reduce((acc, expense) => acc + expense.amount, 0)
    return sum.toFixed(2)
  }, [data])

  return (
    <View style={styles.container}>
      <Text style={styles.period}>
        {t(`components.${namespace}.period.${period}`)}
      </Text>
      <Text style={styles.total}>
        {t(`components.${namespace}.total`)} ${totalSum}
      </Text>
    </View>
  )
}

export default ExpensesSummary
