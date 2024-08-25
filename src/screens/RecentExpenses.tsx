import ExpensesContainer from '@/components/ExpensesContainer'
import { PeriodType } from '@/components/ExpensesContainer/types'
import { FC } from 'react'

const RecentExpenses: FC = () => {
  return <ExpensesContainer expenses={[]} period={PeriodType.WEEK} />
}

export default RecentExpenses
