import { Expense } from '@/global/types'
import { FC } from 'react'
import { Text, View } from 'react-native'

interface ExpenseDetailsProps {
  data: Expense
}

const ExpenseDetails: FC<ExpenseDetailsProps> = ({ data }) => {
  const { id, title, date, amount } = data

  return (
    <View>
      <Text>
        {date.toDateString()}: {title} - {amount}
      </Text>
    </View>
  )
}

export default ExpenseDetails
