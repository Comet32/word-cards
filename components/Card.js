import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { black, lightGray } from '../utils/colors'

export default class Card extends Component {
  render() {
    const { title, questions } = this.props
    return (
      <View style={style.container}>
        <Text style={style.cardName}>{title}</Text>
        <Text style={style.cardAmount}>{questions.length} cards</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 200
  },
  cardName: {
    fontSize: 27,
    color: black,
  },
  cardAmount: {
    fontSize: 16,
    color: lightGray
  }
})
