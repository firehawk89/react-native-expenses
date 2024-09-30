import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  content: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  label: { fontSize: 16, fontWeight: '500' },
  iconContainer: {
    borderRadius: 24,
  },
})
