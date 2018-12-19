import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import containers from '../styles/containers'
import text from '../styles/text'
import { white } from '../utils/colors'

class CardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params

    return {
      title: title
    }
  }

  render() {
    const { title } = this.props.navigation.state.params
    const { questions } = this.props

    return (
      <View style={containers.centerCtn}>
        <View style={{ marginBottom: 200 }}>
          <Text style={[text.cardName, { fontSize: 45 }]}>{title}</Text>
          <Text style={[text.cardAmount, { fontSize: 22 }]}>
            {questions.length} cards
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('AddCardScreen', {
              title
            })
          }
          style={containers.addBtnCtn}
        >
          <Text style={{ fontSize: 18 }}>Add Card</Text>
        </TouchableOpacity>
        {questions[0] !== undefined && (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('QuizScreen', {
                title,
                questions
              })
            }}
            style={containers.startBtnCtn}
          >
            <Text style={{ fontSize: 18, color: white }}>Start Quiz</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

mapStateToProps = (state, props) => {
  const { title } = props.navigation.state.params

  return {
    questions: state[title].questions
  }
}

export default connect(mapStateToProps)(CardScreen)
