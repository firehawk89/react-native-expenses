import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import { Expense } from '@/global/types'
import { Colors } from '@/utils/Colors'
import { useNavigation } from 'expo-router'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './styles'

interface ExpenseDetailsProps {
  data?: Expense
  isNew?: boolean
}

const ExpenseDetails: FC<ExpenseDetailsProps> = ({ data, isNew }) => {
  const { id, title, date, amount } = data ?? {}

  const { t } = useTranslation()
  const navigation = useNavigation()

  const handleDeleteExpense = () => {}

  const handleCancelEdit = () => {
    navigation.goBack()
  }

  const handleSave = () => {}

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          text={t('screens.expenseDetails.cancel')}
          onPress={handleCancelEdit}
          variant="flat"
          style={styles.button}
        />
        <Button
          text={isNew ? 'Add' : t('screens.expenseDetails.save')}
          onPress={handleSave}
          style={styles.button}
        />
      </View>
      {!isNew && (
        <View style={styles.deleteButton}>
          <IconButton
            name="trash"
            label={t('screens.expenseDetails.deleteExpense')}
            onPress={handleDeleteExpense}
            size={36}
            color={Colors.error[500]}
          />
        </View>
      )}
      {!isNew && (
        <Text>
          {date?.toDateString()}: {title} - {amount}
        </Text>
      )}
      <Text>{isNew ? 'New Expense' : `Expense ID: ${id}`}</Text>
    </View>
  )
}

export default ExpenseDetails
