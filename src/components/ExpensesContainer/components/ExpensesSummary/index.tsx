import React, { FC, useMemo } from 'react'
import { View, Text } from 'react-native'

import { Expense, PeriodType } from '../../types'

interface ExpensesSummaryProps {
  data: Expense[]
  period: PeriodType
}

const ExpensesSummary: FC<ExpensesSummaryProps> = ({ data, period }) => {
  const periodTitleMap = {
    [PeriodType.WEEK]: 'Last week:',
    [PeriodType.MONTH]: 'Last month:',
    [PeriodType.YEAR]: 'Last year:',
  }

  const displayPeriod = periodTitleMap[period]

  const totalSum = useMemo(() => {
    const sum = data.reduce((acc, expense) => acc + expense.amount, 0)
    return sum.toFixed(2)
  }, [data])

  return (
    <View>
      <Text>{displayPeriod}</Text>
      <Text>Total: ${totalSum}</Text>
    </View>
  )
}

export default ExpensesSummary
