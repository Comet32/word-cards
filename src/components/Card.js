import React, { Component } from 'react'
import { Text, View } from 'react-native'
import containers from '../styles/containers'
import text from '../styles/text'

export default class Card extends Component {
  render() {
    const { title, questions } = this.props
    return (
      <View style={containers.cardCtn}>
        <Text style={text.cardName}>{title}</Text>
        <Text style={text.cardAmount}>{questions.length} cards</Text>
      </View>
    )
  }
}
