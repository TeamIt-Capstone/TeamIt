import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, MaterialCommunityIcons } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PricingCard, Card } from 'react-native-elements';

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
        this.btnPrincingPress = this.btnPrincingPress.bind(this);
    }

    btnPrincingPress = (subType) => {
        alert("You choose the \"" + subType + "\" subscription !")
        switch (subType) {
            case "Profile highlight":
                console.log("redirection vers une page pour choisir la durée de l'abonnement");
                //SubscriptionOption
                 this.props.navigation.navigate('SubscriptionOption');
                break;
        
            case "Project highlight":
                console.log("redirection vers une page pour choisir quel projet on met en avant et la durée de l'abonnement");
                //SubscriptionOption
                 this.props.navigation.navigate('SubscriptionOption');
                break;
            
            case "Project extention":
                console.log("on redirige directement vers le systeme de payment");
                //SubscriptionOption
                 this.props.navigation.navigate('Home');
                break;
            
            case "Favorite extention":
                console.log("on redirige directement vers le systeme de payment");
                //SubscriptionOption
                 this.props.navigation.navigate('Home');
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <View >
                <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
                    
                    <Card>
                    <Card.Title>SUBSCRIPTION</Card.Title>
                    <Card.Divider/>
                    <PricingCard
                        color="#b3b3b3"
                        title="Silver"
                        price="$14.99/month"
                        info={['Unlimited likes', '+ 3 more favorite sluts']}
                        button={{ title: '    GET NOW', icon: 'add-shopping-cart' }}
                        onButtonPress={() => {this.btnPrincingPress('Profile highlight')} }/>
                    
                    <PricingCard
                        color="#FFD700"
                        title="Gold"
                        price="$34.99/month"
                        info={['Unlimited likes', '+ 5 more favorite slots', '+ Profile highlight', '+ 1 more project']}//Profile highlight + 1 more project +  unlimited like + 5 more favorites
                        button={{ title: '    GET NOW', icon: 'add-shopping-cart' }}
                        onButtonPress={() => {this.btnPrincingPress('Profile highlight')} }/>
                    
                    <PricingCard
                        color="#b9f2ff"
                        title="Diamond"
                        price="$54.99/month"
                        info={['Unlimited likes', '+ Unlimited favorite slots', '+ Profile highlight','+ 1 project highlight', '+ 2 more projects']}
                        button={{ title: '    GET NOW', icon: 'add-shopping-cart' }}
                        onButtonPress={() => {this.btnPrincingPress('Profile highlight')} }/>
                    
                    </Card>
                    <Card>
                    <Card.Title>MORE VISIBILITY</Card.Title>
                    <Card.Divider/>
                    <PricingCard
                        color="#00cc00"
                        title="More visibility for your profile ?"
                        price="From $4.99"
                        info={['Don\'t wait any longer !', 'Let everyone see you !!!', 'Highlight your profile for: \na day / 3 days / a week / 3 weeks !']}
                        button={{ title: '    GET NOW', icon: 'visibility' }}
                        onButtonPress={() => {this.btnPrincingPress('Profile highlight')} }/>
                    
                    <PricingCard
                        color="#e600ac"
                        title="More visibility for your project ?"
                        price="From $6.99"
                        info={['Highlight your project', 'Attract a maximum of profile NOW !!!','You can choose the duration of the highlight : \na day / 3 days / a week / 3 weeks !']}
                        button={{ title: '    GET NOW', icon: 'trending-up' }} 
                        onButtonPress={() => { this.btnPrincingPress('Project highlight') }} />
                    
                    </Card>
                    <Card>
                    <Card.Title>MORE SLOTS</Card.Title>
                    <Card.Divider/>
                    <PricingCard
                        color="#4f9deb"
                        title="More Projects ?"
                        price="$12.99"
                        info={['No longer be limited in your ambitions', 'Get one more dedicated space to your new project !']}
                        button={{ title: '    GET NOW', icon: 'library-add' }} 
                        onButtonPress={() => {this.btnPrincingPress('Project extention')} }/>
                    <PricingCard
                        color="#ffcc00"
                        title="More Favories ?"
                        price="$14.99"
                        info={['Safely keep more interesting profiles', 'Extend your favorites list with 3 new slots !']}
                        button={{ title: '    GET NOW', icon: 'star' }} 
                            onButtonPress={() => { this.btnPrincingPress('Favorite extention') }} />
                    <PricingCard
                        color="#FF1E1E"
                        title="More likes ?"
                        price="$6.99"
                        info={['Like more interesting profiles', 'Extend your like list with 3 new slots !', 'Increase your chances of having a match !']}
                        button={{ title: '    GET NOW', icon: 'favorite' }} 
                            onButtonPress={() => { this.btnPrincingPress('Favorite extention') }} />  
                        
                    </Card>
                    
                </KeyboardAwareScrollView>
            </View>
        )
    }
})
