import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { black, white } from '../utils/colors'
import { addCardsAction } from '../actions'
import { connect } from 'react-redux'

class NewDeckScreen extends Component {
  state = {
    inputValue: ''
  }

  handleChangeInput = input => {
    this.setState(() => ({
      inputValue: input
    }))
  }

  handleSubmitPress = () => {
    this.props.dispatch(addCardsAction(this.state.inputValue))

    this.setState(() => ({
      inputValue: ''
    }))
  }

  render() {
    const { inputValue } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            What is the title of your new deck?
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={inputValue}
            onChangeText={this.handleChangeInput}
            style={styles.textInput}
            placeholder="Deck Title"
          />
        </View>
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
  inputView: {
    width: 380,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 50
  },
  textInput: {
    borderBottomWidth: 1
  },
  btn: {
    width: 143,
    height: 54,
    backgroundColor: black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  btnText: {
    color: white,
    fontSize: 20
  }
})

export default connect()(NewDeckScreen)
