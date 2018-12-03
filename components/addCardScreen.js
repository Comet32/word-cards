import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Input from './Input'
import { black, white, red } from '../utils/colors'
import { addCardAction } from '../actions'
import { NavigationActions } from 'react-navigation'

export class addCardScreen extends Component {
  state = {
    questionValue: '',
    answerValue: '',
    isQuestionHint: false,
    isAnswerHint: false
  }

  handleChangeQuestion = input => {
    this.setState(() => ({
      questionValue: input
    }))
  }

  handleChangeAnswer = input => {
    this.setState(() => ({
      answerValue: input
    }))
  }

  handleSubmit = () => {
    const { title } = this.props.navigation.state.params
    const { questionValue, answerValue } = this.state

    if(questionValue === ''){
      this.setState(()=>({
        isQuestionHint: true
      }))
      return
    }

    if(answerValue === ''){
      this.setState(()=>({
        isAnswerHint: true
      }))
      return
    }

    this.props.dispatch(addCardAction(title, questionValue, answerValue))

    this.setState(() => ({
      questionValue: '',
      answerValue: ''
    }))

    this.toHome()
  }

  toHome = () => {
    this.props.navigation.dispatch(
      // NavigationActions.back({ key: 'AddCardScreen' })
      NavigationActions.navigate({ routeName: 'CardScreen' })
      )
    
  }

  render() {
    const { questionValue, answerValue,isQuestionHint, isAnswerHint } = this.state

    return (
      <View style={styles.container}>
        <View style={{ height: 25 }} />
        <Input
          value={questionValue}
          onChangeText={this.handleChangeQuestion}
          placeholder="Question"
        />
        {isQuestionHint && (
          <View style={styles.hint}>
            <Text style={{ color: red, fontSize: 14 }}>
              The question cannot be empty !
            </Text>
          </View>
        )}
        <View style={{ height: 40 }} />
        <Input
          value={answerValue}
          onChangeText={this.handleChangeAnswer}
          placeholder="Answer"
        />
        {isAnswerHint && (
          <View style={styles.hint}>
            <Text style={{ color: red, fontSize: 14 }}>
              The answer cannot be empty !
            </Text>
          </View>
        )}
        <TouchableOpacity onPress={this.handleSubmit} style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(addCardScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    width: 143,
    height: 54,
    backgroundColor: black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 40
  },
  btnText: {
    color: white,
    fontSize: 20
  },
  hint: {
    alignSelf: 'flex-start',
    paddingLeft: 20
  }
})
