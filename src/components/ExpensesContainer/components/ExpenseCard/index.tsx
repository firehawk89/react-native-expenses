import { getFormattedDate, getFormattedPrice } from '@/utils/format'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Expense } from '../../types'
import { styles } from './styles'

interface ExpenseCardProps {
  data: Expense
  onPress: (data: Expense) => void
}

const ExpenseCard: FC<ExpenseCardProps> = ({ data, onPress }) => {
  const { title, date, amount } = data

  const formattedDate = getFormattedDate(date)
  const formattedAmount = getFormattedPrice(amount)

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={() => onPress(data)}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{formattedDate}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{formattedAmount}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseCard
