import { Colors } from '@/utils/Colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
  buttonContent: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary[500],
  },
  flatButtonContent: { backgroundColor: 'transparent' },
  text: {
    textAlign: 'center',
    color: Colors.light,
  },
  flatText: { color: Colors.primary[200] },
})

export default styles
