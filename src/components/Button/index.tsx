import { FC } from 'react'
import { Pressable, PressableProps, Text, View, ViewProps } from 'react-native'

import styles from './styles'

export type ButtonVariant = 'default' | 'flat'

interface ButtonProps extends ViewProps {
  text: string
  variant?: ButtonVariant
  onPress?: PressableProps['onPress']
}

const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  style,
  onPress,
  ...props
}) => {
  return (
    <View style={style} {...props}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View
          style={[
            styles.buttonContent,
            variant === 'flat' && styles.flatButtonContent,
          ]}
        >
          <Text style={[styles.text, variant === 'flat' && styles.flatText]}>
            {text}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Button
