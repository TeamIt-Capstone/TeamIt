import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

import { useLinkProps } from '@react-navigation/native';
import authAction from '../../services/redux/actions/authActions'
import {connect} from 'react-redux'

const actionCreators = {
    login: authAction.handleLogin,
}

export default connect(null, actionCreators)
(class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        }
        this.onFooterLinkPress = this.onFooterLinkPress.bind(this);
        this.onLoginPress = this.onLoginPress.bind(this);
    }

    onFooterLinkPress () {
        this.props.navigation.navigate('Registration')
    }

    onLoginPress() {
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    style={{ flex: 1, width: '100%' }}
                    keyboardShouldPersistTaps="always">
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/icon.png')}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='Password'
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onLoginPress}>
                        <Text style={styles.buttonTitle}>Log in</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Don't have an account? <Text onPress={this.onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
})
