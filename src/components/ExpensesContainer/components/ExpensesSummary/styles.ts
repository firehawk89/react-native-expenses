import { Colors } from '@/utils/Colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: Colors.primary[50],
  },
  period: {
    fontSize: 16,
    color: Colors.primary[400],
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary[500],
  },
})

export default styles
