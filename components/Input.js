import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { black } from '../utils/colors'

export default function Input(props) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.textInput}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputView: {
    width: 380,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10
  },
  textInput: {
    borderBottomWidth: 1
  }
})
