import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native'
import { green, red, white, black } from '../utils/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'

export default class QuizScreen extends Component {
  state = {
    currentQuestion: 0,
    correctQuestion: 0,
    isAnswer: false,
    isEnd: false,
    bounceValue: new Animated.Value(1)
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

  handleReturn = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'CardScreen' })
    )
  }

  handleReTest = () => {
    this.setState(() => ({
      currentQuestion: 0,
      correctQuestion: 0,
      isAnswer: false,
      isEnd: false,
      bounceValue: new Animated.Value(1)
    }))
  }

  render() {
    const {
      currentQuestion,
      correctQuestion,
      isAnswer,
      isEnd,
      bounceValue
    } = this.state
    const { questions } = this.props.navigation.state.params

    if (isEnd) {
      successRate = Math.round((correctQuestion / questions.length) * 100)

      Animated.sequence([
        Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
        Animated.spring(bounceValue, { toValue: 1, friction: 4 })
      ]).start()

      return (
        <Animated.View
          style={[
            styles.container,
            { justifyContent: 'center', transform: [{ scale: bounceValue }] }
          ]}
        >
          <MaterialCommunityIcons
            name={'emoticon-happy'}
            size={80}
            color={green}
          />
          <Text style={styles.endText}>Total Cards： {questions.length}</Text>
          <Text style={styles.endText}>
            Your Correct Cards： {correctQuestion}
          </Text>
          <Text style={styles.endText}>Correct Rate：{successRate + '%'}</Text>
          <TouchableOpacity
            onPress={this.handleReturn}
            style={[styles.Btn, { backgroundColor: black, marginTop: 50 }]}
          >
            <Text style={{ color: white, fontSize: 18 }}>Return to Deck</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleReTest}
            style={[styles.Btn, { backgroundColor: black, marginTop: 20 }]}
          >
            <Text style={{ color: white, fontSize: 18 }}>Retest</Text>
          </TouchableOpacity>
        </Animated.View>
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
    fontSize: 30
  }
})
