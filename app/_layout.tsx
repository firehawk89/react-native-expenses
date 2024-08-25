import '@/utils/gesture-handler'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: 'Expenses Overview', headerShown: false }}
        />
        <Stack.Screen
          name="manage"
          options={{ headerTitle: 'Manage Expense' }}
        />
      </Stack>
    </>
  )
}
