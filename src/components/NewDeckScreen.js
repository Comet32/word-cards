import React, { Component } from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { addCardsAction } from '../actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Input from './Input'
import containers from '../styles/containers'
import text from '../styles/text'

class NewDeckScreen extends Component {
  state = {
    inputValue: '',
    isHint: false
  }

  handleChangeInput = input => {
    this.setState(() => ({
      inputValue: input
    }))
  }

  handleSubmitPress = () => {
    if (this.state.inputValue === '') {
      this.setState(() => ({
        isHint: true
      }))
      return
    }

    this.props.dispatch(addCardsAction(this.state.inputValue))

    this.setState(() => ({
      inputValue: '',
      isHint: false
    }))

    this.toHome()
  }

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'DecksScreen' })
      // NavigationActions.back({key: 'NewDeckScreen'})
    )
  }

  render() {
    const { inputValue, isHint } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={containers.centerCtn}>
        <View
          style={{
            width: 370,
            marginBottom: 50
          }}
        >
          <Text style={text.titleText}>
            What is the title of your new deck?
          </Text>
        </View>
        <Input
          value={inputValue}
          onChangeText={this.handleChangeInput}
          placeholder="Deck Title"
        />
        {isHint && (
          <View style={containers.hintCtn}>
            <Text style={text.hintText}>
              The title cannot be empty !
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={this.handleSubmitPress}
          style={[containers.btnCtn, { marginTop: isHint === true ? 0 : 30}]}
        >
          <Text style={text.btnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeckScreen)
