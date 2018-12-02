import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import DecksScreen from './components/DecksScreen'
import NewDeckScreen from './components/NewDeckScreen'
import { yellow, white, black } from './utils/colors'

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
      backgroundColor: white,
    }
  }
}

const Tabs =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

const MainNavigator = createAppContainer(Tabs)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 20 }} />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
