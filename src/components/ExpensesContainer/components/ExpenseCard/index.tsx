import { Expense } from '@/global/types'
import { getFormattedDate, getFormattedPrice } from '@/utils/format'
import { Link } from 'expo-router'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { styles } from './styles'

interface ExpenseCardProps {
  data: Expense
}

const ExpenseCard: FC<ExpenseCardProps> = ({ data }) => {
  const { id, title, date, amount } = data

  const formattedDate = getFormattedDate(date)
  const formattedAmount = getFormattedPrice(amount)

  return (
    <Link href={`/details/${id}`} asChild>
      <Pressable>
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
    </Link>
  )
}

export default ExpenseCard
