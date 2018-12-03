import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { green, red, white, black } from '../utils/colors'

export default class QuizScreen extends Component {
  state = {
    currentQuestion: 0,
    correctQuestion: 0,
    isAnswer: false
  }

  handleAnswerSwitch = () => {
    this.setState((state)=>({
      isAnswer: !state.isAnswer
    }))
  }

  render() {
    const { currentQuestion, correctQuestion, isAnswer } = this.state
    const { questions } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text style={styles.sequenceText}>
          {' '}
          {currentQuestion + 1} / {questions.length}{' '}
        </Text>
        <View>
          <Text style={{ fontSize: 50, textAlign: 'center' }}>
            {isAnswer
              ? questions[currentQuestion].answer
              : questions[currentQuestion].question}
          </Text>
          <TouchableOpacity onPress={this.handleAnswerSwitch}>
            <Text style={{ fontSize: 18, color: red, textAlign: 'center' }}>
            {isAnswer
              ? 'Question'
              : 'Answer'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.Btn, styles.correctBtn]}>
            <Text style={{ color: white, fontSize: 18 }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.Btn, styles.incorrectBtn]}>
            <Text style={{ color: white, fontSize: 18 }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sequenceText: {
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 18
  },
  Btn: {
    width: 257,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  correctBtn: {
    marginBottom: 13,
    backgroundColor: green
  },
  incorrectBtn: {
    backgroundColor: red,
    marginBottom: 30
  }
})
