import HomeScreen from '../screens/HomeScreen/HomeScreen'
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import React, {useState, useEffect} from 'react'
import {firebase} from '../services/firebase'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import authAction from '../services/redux/actions/authActions'
import {connect} from 'react-redux'
import SwipeScreen from '../screens/SwipeScreen/SwipeScreen'

const Stack = createStackNavigator();

const actionCreators = {
    login: authAction.handleLogin,
}

function mapStateToProps(state) {
    const {auth} = state;
    return {auth};
}

export default connect(mapStateToProps, actionCreators)
(function Screens(props) {
    

    if (props.auth.user) {
        console.log('download data');
    }

    return (
        <NavigationContainer>
        <Stack.Navigator>
            { props.auth.user && props.auth.user.user.uid ? (
            <Stack.Screen name="Home" component={ SwipeScreen } />
            ) : (
            <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
            )}
        </Stack.Navigator>
        </NavigationContainer>
    );
})