import "rxjs/Rx"
import Expo from "expo"
import React, { Component } from "react"

import Screens from "./screens"

import api from "./api"

class App extends Component {
  componentDidMount() {
    api()
  }
  render() {
    return <Screens />
  }
}

Expo.registerRootComponent(App)

/*
Phase 1: One can look up representatives based on address & able to call 'em
Phase 2: Set up firebase account system
Phase 3: Get points for making calls
Phase 4: Get points getting others to make calls
Phase 5: Internet Defenders list

TODO: [ Phase 1 ]: Setup Google Civic Info API requests
TODO: [ Phase 1 ]: Make screen for search
TODO: [ Phase 1 ]: Get results & able to make calls
TODO: [ Basic ] - Setup firebase example
TODO: [ Feature ] - Integrate router w/ redux
*/
