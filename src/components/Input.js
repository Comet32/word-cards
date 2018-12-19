import React from 'react'
import { View, TextInput } from 'react-native'
import containers from '../styles/containers'

export default function Input(props) {
  return (
    <View style={containers.inputCtn}>
      <TextInput
        style={{
          borderBottomWidth: 1
        }}
        {...props}
      />
    </View>
  )
}
