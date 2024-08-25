import { FC } from 'react'
import { FlatList } from 'react-native'

import { Expense } from '../../types'
import ExpenseCard from '../ExpenseCard'

interface ExpensesListProps {
  data: Expense[]
}

const ExpensesList: FC<ExpensesListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ExpenseCard data={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList
