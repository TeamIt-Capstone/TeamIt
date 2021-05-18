import HomeScreen from '../screens/HomeScreen/HomeScreen'
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import PricingScreen from '../screens/PricingScreen/PricingScreen'
import SubscriptionOptionScreen from '../screens/PricingScreen/SubscriptionOptionScreen'
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen'
import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import authAction from '../services/redux/actions/authActions'
import {connect} from 'react-redux'
import {View} from 'react-native'
import Header from '../components/Header'

const navigationOption = {
    header: (props) => <Header {...props}/>
}

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
            <Stack.Navigator
                headerMode="screen"
            >
                { props.auth.user && props.auth.user.user.uid ? (   
                <>
                    <Stack.Screen name="Home" options={navigationOption}>
                        {props => <HomeScreen {...props}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Pricing" component={PricingScreen} options={navigationOption}/>
                    <Stack.Screen name="SubscriptionOption" component={SubscriptionOptionScreen} options={navigationOption}/>
                    <Stack.Screen name="Favorite" component={FavoriteScreen} options={navigationOption}/>
                </>
                ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Registration" component={RegistrationScreen} />
                    <Stack.Screen name="Pricing" component={PricingScreen} />
                    <Stack.Screen name="SubscriptionOption" component={SubscriptionOptionScreen} />
                    <Stack.Screen name="Favorite" component={FavoriteScreen} />
                </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
})