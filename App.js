import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {decode, encode} from 'base-64'
import store from './src/services/redux/store';
import {Provider} from 'react-redux'
import Screens from './src/screens'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Screens/>
      </Provider>
    );
  }
}
