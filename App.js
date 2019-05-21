import React from 'react'
import { StyleSheet, View, Platform, AsyncStorage } from 'react-native'
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import DecksScreen from './src/components/DecksScreen'
import NewDeckScreen from './src/components/NewDeckScreen'
import { yellow, white, black } from './src/utils/colors'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/reducers'
import { CARDS_STORAGE_KEY } from './src/utils/_cards'
import CardScreen from './src/components/CardScreen'
import AddCardScreen from './src/components/AddCardScreen'
import QuizScreen from './src/components/QuizScreen'
import { setLocalNotification } from './src/utils/helper'

const store = createStore(reducer)

// 每当 store 发生改变，则改变本地存储
store.subscribe(() => {
  AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(store.getState()))
  // AsyncStorage.removeItem(CARDS_STORAGE_KEY)
})

const RouteConfigs = {
  DecksScreen: {
    screen: DecksScreen,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeckScreen: {
    screen: NewDeckScreen,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    }
  }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: yellow,
    inactiveTintColor: black,
    style: {
      height: 56,
      backgroundColor: white
    }
  }
}

const Tabs =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

const StackNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  CardScreen: {
    screen: CardScreen,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  },
  AddCardScreen: {
    screen: AddCardScreen,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  },
  QuizScreen: {
    screen: QuizScreen,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  }
})

const MainNavigator = createAppContainer(StackNavigator)

export default class App extends React.Component {
  componentDidMount() {
    // 设置通知
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{ height: 25, backgroundColor: black }} />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
