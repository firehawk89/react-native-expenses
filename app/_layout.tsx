import '@/i18n/i18n'
import '@/utils/gesture-handler'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'

export default function RootLayout() {
  const { t } = useTranslation()

  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="manage"
          options={{ headerTitle: t('navigation.manageExpense.headerTitle') }}
        />
        <Stack.Screen
          name="settings"
          options={{ headerTitle: t('navigation.settings.headerTitle') }}
        />
      </Stack>
    </>
  )
}
