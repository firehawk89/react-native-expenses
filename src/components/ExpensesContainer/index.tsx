import { FC } from 'react'
import { View } from 'react-native'

import ExpensesList from './components/ExpensesList'
import ExpensesSummary from './components/ExpensesSummary'
import { Expense, PeriodType } from './types'

// FIXME: Replace with real data
const EXPENSES: Expense[] = [
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
    <View>
      <ExpensesSummary data={EXPENSES} period={period} />
      <ExpensesList data={EXPENSES} />
    </View>
  )
}

export default ExpensesContainer
