import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
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
          title: 'All',
          headerTitle: 'All Expenses',
          tabBarIcon: (props) => <Ionicons name="hourglass" {...props} />,
        }}
      />
      <Tabs.Screen
        name="recent"
        options={{
          title: 'Recent',
          headerTitle: 'Recent Expenses',
          tabBarIcon: (props) => <Ionicons name="calendar" {...props} />,
        }}
      />
    </Tabs>
  )
}
