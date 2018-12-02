import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Input from './Input'
import { black, white } from '../utils/colors'

export class addCardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 25 }} />
        <Input
          // value={inputValue}
          // onChangeText={this.handleChangeInput}
          placeholder="Question"
        />
        <View style={{ height: 50 }} />
        <Input
          // value={inputValue}
          // onChangeText={this.handleChangeInput}
          placeholder="Answer"
        />
        <TouchableOpacity onPress={this.handleSubmitPress} style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(addCardScreen)

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
  }
})
