import { Colors } from '@/utils/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 24,
    borderRadius: 6,
    elevation: 3,
    shadowRadius: 4,
    shadowColor: Colors.gray[500],
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
    backgroundColor: Colors.primary[500],
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: Colors.primary[50],
  },
  title: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  amountContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: Colors.light,
  },
  amount: {
    fontWeight: 'bold',
    color: Colors.primary[500],
  },
})
