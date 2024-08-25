import { FC } from 'react'
import { Text, View } from 'react-native'

import { Expense } from '../../types'

interface ExpenseCardProps {
  data: Expense
}

const ExpenseCard: FC<ExpenseCardProps> = ({ data }) => {
  return (
    <View>
      <Text>{data.title}</Text>
    </View>
  )
}

export default ExpenseCard
