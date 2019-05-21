import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Input from './Input'
import { addCardAction } from '../actions'
import { NavigationActions } from 'react-navigation'
import containers from '../styles/containers'
import text from '../styles/text'

export class AddCardScreen extends Component {
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

    if (questionValue === '') {
      this.setState(() => ({
        isQuestionHint: true
      }))
      return
    }

    if (answerValue === '') {
      this.setState(() => ({
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
    const {
      questionValue,
      answerValue,
      isQuestionHint,
      isAnswerHint
    } = this.state

    return (
      <View style={[containers.comCtn, { alignItems: 'center' }]}>
        <View style={{ height: 25 }} />
        <Input
          value={questionValue}
          onChangeText={this.handleChangeQuestion}
          placeholder="Question"
        />
        {isQuestionHint === true ? (
          <View style={containers.hintCtn}>
            <Text style={text.hintText}>The question cannot be empty !</Text>
          </View>
        ) : (
          <View style={{ height: 30 }} />
        )}
        <Input
          value={answerValue}
          onChangeText={this.handleChangeAnswer}
          placeholder="Answer"
        />
        {isAnswerHint && (
          <View style={containers.hintCtn}>
            <Text style={text.hintText}>The answer cannot be empty !</Text>
          </View>
        )}
        <TouchableOpacity onPress={this.handleSubmit} style={containers.btnCtn}>
          <Text style={text.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddCardScreen)
