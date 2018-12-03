import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { black, white, red } from '../utils/colors'
import { addCardsAction } from '../actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Input from './Input'

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
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            What is the title of your new deck?
          </Text>
        </View>
          <Input
            value={inputValue}
            onChangeText={this.handleChangeInput}
            placeholder="Deck Title"
          />
        {isHint && (
          <View style={styles.hint}>
            <Text style={{ color: red, fontSize: 16 }}>
              The title cannot be empty !
            </Text>
          </View>
        )}
        <TouchableOpacity onPress={this.handleSubmitPress} style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleView: {
    width: 370,
    marginBottom: 50
  },
  titleText: {
    color: black,
    fontSize: 50,
    textAlign: 'center'
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

export default connect()(NewDeckScreen)
