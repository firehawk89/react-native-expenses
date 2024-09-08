import { FC } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Expense } from '../../types'
import ExpenseCard from '../ExpenseCard'

const renderExpenseCard = ({ item }: ListRenderItemInfo<Expense>) => {
  return <ExpenseCard data={item} onPress={(data) => console.log(data)} />
}

interface ExpensesListProps {
  data: Expense[]
}

const ExpensesList: FC<ExpensesListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderExpenseCard}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList
