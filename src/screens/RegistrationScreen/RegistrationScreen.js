import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { connect } from 'react-redux';
import authAction from '../../services/redux/actions/authActions';

const actionCreators = {
    register: authAction.handleRegister
}

export default connect(null, actionCreators)
(class RegistrationScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            password: null,
            confirmPassword: null,
        }
        this.onFooterLinkPress = this.onFooterLinkPress.bind(this);
        this.onRegisterPress = this.onRegisterPress.bind(this);
    }

    onFooterLinkPress () {
        this.props.navigation.navigate('Login');
    }

    onRegisterPress () {
        if (!this.state.password || !this.state.confirmPassword ||
            this.state.password !== this.state.confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        const data = {
            email: this.state.email,
            password: this.state.password,
            fullName: this.state.fullName
        }
        this.props.register(data);
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
                        placeholder='Full Name'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => this.setState({fullName: text})}
                        value={this.state.fullName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
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
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='Confirm Password'
                        onChangeText={(text) => this.setState({confirmPassword: text})}
                        value={this.state.confirmPassword}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onRegisterPress}>
                        <Text style={styles.buttonTitle}>Create account</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Already got an account? <Text onPress={this.onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    };
})
