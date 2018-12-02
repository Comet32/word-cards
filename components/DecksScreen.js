import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Card from './Card'
import { fetchCardsResults } from "../utils/api";

export default class DecksScreen extends Component {
  state = {
    cards: {}
  }

  componentDidMount() {
    fetchCardsResults()
      .then(results => {
        // 将 results 对象改变为对象数组
        const cards = Object.keys(results).map(item => results[item])
        this.setState(() => ({
          cards
        }))
      })
  }

  renderItem = ({ item }) => {
    return (<TouchableOpacity>
      <Card title={item.title} questions={item.questions} />
    </TouchableOpacity>)
  }

  render() {
    // const date = [{
    //   key: '123',
    // }, {
    //   key: '231',
    // }, {
    //   key: '132'
    // }]
    const { cards } = this.state
    return (
      <View style={style.container}>
        <FlatList data={cards}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }
})
