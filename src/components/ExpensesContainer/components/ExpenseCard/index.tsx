import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Expense } from '../../types'
import { styles } from './styles'

interface ExpenseCardProps {
  data: Expense
}

const ExpenseCard: FC<ExpenseCardProps> = ({ data }) => {
  const { title, date, amount } = data

  const ISODate = date.toISOString()

  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{ISODate}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseCard
