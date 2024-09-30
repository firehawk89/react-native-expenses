import IconButton from '@/components/IconButton'
import { Colors } from '@/utils/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Tabs, useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

import { NEW_EXPENSE_ID } from '../details/[id]'

export default function TabLayout() {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary[500] },
        headerTintColor: Colors.light,
        tabBarStyle: { backgroundColor: Colors.primary[500] },
        tabBarActiveTintColor: Colors.accent[500],
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => router.push(`/details/${NEW_EXPENSE_ID}`)}
          />
        ),
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
