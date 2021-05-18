import React, { useState } from 'react'
import { Image,Icon, Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './styles';
import Highlight from './OptionsScreen/HighlightScreen';
import {connect} from 'react-redux'

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
    }

    goToPayment = () => {
      //  alert("You choose the \"" + this.state.setValue + "\" subscription !\nYou have to pay "+ this.state.prize+ " !")
        this.props.navigation.navigate('Home');
        
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
                            <Text style={styles.buttonText}>Payment here, but go to Home for now XD</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </Card>
            </View>
        )
    }
})
