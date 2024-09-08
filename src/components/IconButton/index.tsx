import { Colors } from '@/utils/Colors'
import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, View } from 'react-native'

import { styles } from './styles'

const DEFAULT_SIZE = 24
const DEFAULT_COLOR = Colors.dark

interface IconButtonProps {
  name: keyof typeof Ionicons.glyphMap
  size?: number
  color?: string
  onPress: () => void
}

const IconButton: FC<IconButtonProps> = ({
  name,
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  )
}

export default IconButton
