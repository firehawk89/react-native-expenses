import { EXPENSES } from '@/components/ExpensesContainer'
import ExpenseDetails from '@/screens/ExpenseDetails'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const NEW_EXPENSE_ID = 'new'

export default function Details() {
  const { t } = useTranslation()

  const { id } = useLocalSearchParams()
  const navigation = useNavigation()

  const isNewExpense = id === NEW_EXPENSE_ID

  const expense = !isNewExpense
    ? EXPENSES.find((expense) => expense.id === id)
    : undefined

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isNewExpense
        ? t('screens.expenseDetails.newExpense.headerTitle')
        : t('screens.expenseDetails.headerTitle'),
    })
  }, [isNewExpense, navigation, t])

  // TODO Add not found screen
  return <ExpenseDetails data={expense} isNew={isNewExpense} />
}
