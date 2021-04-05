import React, { useState } from 'react'
import { Image,Icon, Text, Animated, TouchableOpacity, View } from 'react-native'
import { Slider } from 'react-native-elements';
import styles from './styles';

import { useLinkProps } from '@react-navigation/native';
//import authAction from '../../services/redux/actions/authActions'
import {connect} from 'react-redux'

const actionCreators = {
}

export default connect(null, actionCreators)
(class SubscriptionOptionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            setValue: '',
            prize: '',
        }
        this.goToPayment = this.goToPayment.bind(this);
        this.valOnChange = this.valOnChange.bind(this);
    }

    goToPayment = () => {
        alert("You choose the \"" + this.state.setValue + "\" subscription !\nYou have to pay "+ this.state.prize+ " !")
        this.props.navigation.navigate('Home');
        
    }
    
    valOnChange = (val) => {
        switch (val) {
            case 1:
                this.setState({ setValue: 'A day' });
                this.setState({ prize: '$4.99' });
                break;
            case 2:
                this.setState({ setValue: '3 days' });
                this.setState({ prize: '$12.99' });
                
                break;
            case 3:
                this.setState({ setValue: 'A week' });
                this.setState({ prize: '$28.99' });
                
                break;
            case 4:
                this.setState({ setValue: '3 weeks' });
                this.setState({ prize: '$84.99' });
                
                break;
        
            default:
                break;
        }
               // this.setState({ value });
        
    }

    render() {
        
    let { value } = this.state
        return (
            <View >
                <Text>Subsciption Option</Text>
                <Text>{"\n\n\n\n"}</Text>


                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Slider
                        value={value}
                        onValueChange={(value) => {this.setState({ value }),this.valOnChange(value)}}
                        maximumValue={4}
                        minimumValue={1}
                        step={1}
                        trackStyle={{ height: 20, backgroundColor: 'transparent' }}
                        thumbStyle={{ height: 30, width: 30, backgroundColor: 'transparent' }} />
                    
                    <Text>Subscription duration: {this.state.setValue} </Text>
                    <Text>{"\n"}</Text>
                    <Text>Amount you have to pay: {this.state.prize}</Text>
                </View>


                <Text>{"\n\n\n\n"}</Text>
                <TouchableOpacity style={styles.button}  onPress={this.goToPayment}>
                    <Text style={styles.buttonText}>Payment here, but go to Home for now XD</Text>
                </TouchableOpacity>
            </View>
        )
    }
})
