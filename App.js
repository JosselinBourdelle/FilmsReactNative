/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import ConnectContainer from './component/ConnectContainer'
import AppNavigation from './app.navigation'

export default class App extends Component {
  render() {

    console.log('connect', ConnectContainer)

    return (
      <ConnectContainer>
        <AppNavigation/>
      </ConnectContainer>
    );
  }
}






