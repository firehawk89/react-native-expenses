import { Expense } from '@/global/types'
import { FC } from 'react'
import { View } from 'react-native'

import ExpensesList from './components/ExpensesList'
import ExpensesSummary from './components/ExpensesSummary'
import styles from './styles'
import { PeriodType } from './types'

// FIXME: Replace with real data
export const EXPENSES: Expense[] = [
  {
    id: '1',
    title: 'Coffee',
    amount: 3.5,
    date: new Date(),
  },
  {
    id: '2',
    title: 'Groceries',
    amount: 50,
    date: new Date(),
  },
  {
    id: '3',
    title: 'Lunch',
    amount: 12,
    date: new Date(),
  },
]

export const namespace = 'expensesContainer'

interface ExpensesContainerProps {
  expenses: Expense[]
  period: PeriodType
}

const ExpensesContainer: FC<ExpensesContainerProps> = ({
  expenses,
  period,
}) => {
  console.log('ExpensesContainer', { expenses })

  return (
    <View style={styles.container}>
      <ExpensesSummary data={EXPENSES} period={period} />
      <ExpensesList data={EXPENSES} />
    </View>
  )
}

export default ExpensesContainer
