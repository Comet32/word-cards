import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { green, red, white, black } from '../utils/colors'

export default class QuizScreen extends Component {
  state = {
    currentQuestion: 0,
    correctQuestion: 0,
    isAnswer: false,
    isEnd: false
  }

  handleAnswerSwitch = () => {
    this.setState(state => ({
      isAnswer: !state.isAnswer
    }))
  }

  handleCorrect = () => {
    this.setState(state => ({
      isAnswer: false,
      currentQuestion: state.currentQuestion + 1,
      correctQuestion: state.correctQuestion + 1
    }))
    
    this.judgeEqual()
  }

  handleIncorrect = () => {
    this.setState(state => ({
      isAnswer: false,
      currentQuestion: state.currentQuestion + 1
    }))
    
    this.judgeEqual()
  }

  judgeEqual() {
    const { questions } = this.props.navigation.state.params
    if (this.state.currentQuestion + 1 === questions.length) {
      this.setState(state => ({
        isEnd: true,
        endCorrectAmount: state.correctQuestion
      }))
    }
  }

  render() {
    const { currentQuestion, correctQuestion, isAnswer,isEnd } = this.state
    const { questions } = this.props.navigation.state.params

    if(isEnd){
      successRate = Math.round((correctQuestion / questions.length) * 100)

      return(
        <View style={[styles.container,{justifyContent: 'center'}]}>
          <Text style={styles.endText}>Total Cards： {questions.length}</Text>
          <Text style={styles.endText}>Your Correct Cards： {correctQuestion}</Text>
          <Text style={styles.endText}>Correct Rate：{successRate + '%'}</Text>
        </View>
      )
    }

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
              {isAnswer ? 'Question' : 'Answer'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.handleCorrect}
            style={[styles.Btn, styles.correctBtn]}
          >
            <Text style={{ color: white, fontSize: 18 }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleIncorrect}
            style={[styles.Btn, styles.incorrectBtn]}
          >
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
  },
  endText: {
    fontSize: 30,
  }
})
