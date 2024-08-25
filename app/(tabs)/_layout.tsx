import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'All' }} />
      <Tabs.Screen name="recent" options={{ title: 'Recent' }} />
    </Tabs>
  )
}
