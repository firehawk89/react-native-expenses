import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function AllExpenses() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>All Expenses</Text>
      <Link href="/manage"> Manage Expense</Link>
    </View>
  )
}
