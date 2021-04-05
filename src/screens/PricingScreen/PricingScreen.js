import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useLinkProps } from '@react-navigation/native';
//import authAction from '../../services/redux/actions/authActions'
import {connect} from 'react-redux'

const actionCreators = {
}

export default connect(null, actionCreators)
(class PricingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.onFooterLinkPress = this.onFooterLinkPress.bind(this);
    }

    onFooterLinkPress () {
        this.props.navigation.navigate('Registration')
    }

    render() {
        return (
            <View >
                <KeyboardAwareScrollView
                    style={{ flex: 1, width: '100%' }}
                    keyboardShouldPersistTaps="always">
                    
                </KeyboardAwareScrollView>
            </View>
        )
    }
})
