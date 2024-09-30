import { Colors } from '@/utils/Colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: Colors.primary[800] },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    minWidth: 80,
  },
  deleteButton: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary[200],
    alignItems: 'center',
  },
})

export default styles
