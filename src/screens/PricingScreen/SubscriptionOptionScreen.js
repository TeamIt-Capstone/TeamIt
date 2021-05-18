import React, { useState } from 'react'
import { Image,Icon, Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './styles';
import Highlight from './OptionsScreen/HighlightScreen';
import {connect} from 'react-redux';

const actionCreators = {
}

export default connect(null, actionCreators)
(class SubscriptionOptionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subCategory:this.props.route.params.subCategory,
            sub: this.props.route.params.sub,
            userProjects:this.props.route.params.userProjects,
        }
        this.goToPayment = this.goToPayment.bind(this);
        this.valOnChange = this.valOnChange.bind(this);
    }

    goToPayment = () => {
        alert("You choose the \"" + this.state.setValue + "\" subscription !\nYou have to pay "+ this.state.prize+ " !")
        this.props.navigation.navigate('CardFormScreen');
        
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
    }
    

    render() {
        
        let { value } = this.state;
        return (
            <View>
                
                <Card containerStyle={{ height:700}}>
                    <Card.Title style={{color:this.state.sub.theme_color}} h4>Choose your options</Card.Title>
                    <Card.Divider />
                    <ScrollView>
                    {(this.state.subCategory == 'highlight') ? (

                    <Highlight sub={this.state.sub} userProjects={ this.state.userProjects.profile.projects}/>
                    ) : (
                        <Text> {this.state.subCategory}</Text>
                    )
                    }



                    



                        <TouchableOpacity style={styles.button}  onPress={this.goToPayment}>
                            <Text style={styles.buttonText}>Payment here</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </Card>
            </View>
        )
    }
})
