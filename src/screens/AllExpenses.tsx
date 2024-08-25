import ExpensesContainer from '@/components/ExpensesContainer'
import { PeriodType } from '@/components/ExpensesContainer/types'
import { FC } from 'react'

const AllExpenses: FC = () => {
  return <ExpensesContainer expenses={[]} period={PeriodType.YEAR} />
}

export default AllExpenses
