import { EXPENSES } from '@/components/ExpensesContainer'
import ExpenseDetails from '@/screens/ExpenseDetails'
import { useLocalSearchParams } from 'expo-router'

export default function Details() {
  const { id } = useLocalSearchParams()

  const expense = EXPENSES.find((expense) => expense.id === id)

  // TODO Add not found screen
  return expense && <ExpenseDetails data={expense} />
}
