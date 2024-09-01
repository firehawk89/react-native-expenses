import { Colors } from '@/utils/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { useTranslation } from 'react-i18next'

export default function TabLayout() {
  const { t } = useTranslation()

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary[500] },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: Colors.primary[500] },
        tabBarActiveTintColor: Colors.accent[500],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('navigation.allExpenses.title'),
          headerTitle: t('navigation.allExpenses.headerTitle'),
          tabBarIcon: (props) => <Ionicons name="hourglass" {...props} />,
        }}
      />
      <Tabs.Screen
        name="recent"
        options={{
          title: t('navigation.recentExpenses.title'),
          headerTitle: t('navigation.recentExpenses.headerTitle'),
          tabBarIcon: (props) => <Ionicons name="calendar" {...props} />,
        }}
      />
    </Tabs>
  )
}
