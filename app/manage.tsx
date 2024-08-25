import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function ManageExpense() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Manage Expense</Text>
      <Link href="/(tabs)">Back to All Expenses</Link>
    </View>
  )
}
