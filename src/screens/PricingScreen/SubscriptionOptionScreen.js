import React, { useState } from 'react'
import { Image,Icon, Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { Card } from 'react-native-elements';
import styles from './styles';
import Highlight from './OptionsScreen/HighlightScreen';
import Extension  from './OptionsScreen/ExtensionScreen';
import Package  from './OptionsScreen/PackageScreen';
import {connect} from 'react-redux'

const actionCreators = {
}

export default connect(null, actionCreators)
(class SubscriptionOptionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options:null,
            subCategory:this.props.route.params.subCategory,
            sub: this.props.route.params.sub,
            userProjects:this.props.route.params.userProjects,
        }
        this.goToPayment = this.goToPayment.bind(this);
    }

    goToPayment = () => {
        console.log(this.state.options)
      //  alert("You choose the \"" + this.state.setValue + "\" subscription !\nYou have to pay "+ this.state.prize+ " !")
        this.props.navigation.navigate('Home');
        
    }
    

    render() {
        const eventhandler = data =>  this.setState({options:data})
        return (
            <View>
                
                <Card containerStyle={{ height:700}}>
                    <Card.Title style={{color:this.state.sub.theme_color}} h4>Choose your options</Card.Title>
                    <Card.Divider />
                    <ScrollView>
                    {(this.state.subCategory == 'highlight') ? (

                            <Highlight sub={this.state.sub} onChange={eventhandler} userProjects={ this.state.userProjects.profile.projects}/>
                        ) : ( (this.state.subCategory == 'extension') ?
                            (<Extension  sub={this.state.sub} onChange={eventhandler} userData={ this.state.userProjects.profile}/>
                                ) : (
                            <Package sub={this.state.sub} onChange={eventhandler} userProjects={ this.state.userProjects.profile.projects}/>
                        ))
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
