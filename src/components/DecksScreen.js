import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import Card from './Card'
import { fetchCardsResults } from '../utils/api'
import { connect } from 'react-redux'
import { receiveCardsAction } from '../actions'
import containers from '../styles/containers' 

class DecksScreen extends Component {
  componentDidMount() {
    fetchCardsResults().then(results => {
      this.props.dispatch(receiveCardsAction(results))
    })
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('CardScreen', {
            title: item.title,
            questions: item.questions
          })
        }
      >
        <Card title={item.title} questions={item.questions} />
      </TouchableOpacity>
    )
  }

  render() {
    const { decks } = this.props
    return (
      <View style={[containers.comCtn, { justifyContent: 'flex-start' }]}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

mapStateToProps = state => {
  // 将 state 对象改变为对象数组
  const decks = Object.keys(state).map(item => state[item])
  return {
    decks
  }
}

export default connect(mapStateToProps)(DecksScreen)
