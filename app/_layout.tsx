import '@/i18n/i18n'
import { Colors } from '@/utils/Colors'
import '@/utils/gesture-handler'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'

export default function RootLayout() {
  const { t } = useTranslation()

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary[500],
          },
          headerTintColor: Colors.light,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            title: t('navigation.tabs.title'),
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="details/[id]"
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="settings"
          options={{ headerTitle: t('navigation.settings.headerTitle') }}
        />
      </Stack>
    </>
  )
}
