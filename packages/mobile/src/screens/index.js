import React from "react"
import { TabNavigator } from "react-navigation"
import { Provider } from "react-redux"
import { SafeAreaView } from "react-native"

import ExampleScreen from "./Example"
import LandingScreen from "./Landing"
import SearchScreen from "./Search"

export default TabNavigator(
  {
    Example: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: "Example"
      }
    },
    Landing: {
      screen: LandingScreen,
      navigationOptions: {
        tabBarLabel: "Landing"
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search"
      }
    }
  },
  {
    animationEnabled: true,
    tabBarPosition: "bottom"
  }
)
