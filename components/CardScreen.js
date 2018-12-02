import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { black, lightGray, white } from '../utils/colors'

export default class CardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  render() {
    const { title, questions } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 200 }}>
          <Text style={styles.cardName}>{title}</Text>
          <Text style={styles.cardAmount}>{questions.length} cards</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('addCardScreen', {
              title
            })
          }
          style={styles.addBtn}
        >
          <Text style={{ fontSize: 18 }}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={{ fontSize: 18, color: white }}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardName: {
    fontSize: 45,
    color: black,
    textAlign: 'center',
    marginBottom: 15
  },
  cardAmount: {
    fontSize: 22,
    color: lightGray,
    textAlign: 'center'
  },
  addBtn: {
    width: 256,
    height: 69,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 13
  },
  startBtn: {
    width: 256,
    height: 69,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: black
  }
})
