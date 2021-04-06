import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, MaterialCommunityIcons } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PricingCard, Card } from 'react-native-elements';
import updateAction from '../../services/redux/actions/userActions'
import {connect} from 'react-redux'

const actionCreators = {
    update: updateAction.update,
}

function mapStateToProps(state) {
    const {user} = state;
    return {user};
}

export default connect(mapStateToProps, actionCreators)

(class PricingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.btnPrincingPress = this.btnPrincingPress.bind(this);
    }

    btnPrincingPress = (subType,  sub) => {
        alert("You choose the \"" + subType + "\" subscription !")
        switch (subType) {

            case ("highlight"):
                console.log("redirection vers une page pour choisir la durée de l'abonnement et/ou quel projet mettre en avant"); break;
            case ("extension"):
                console.log("redirection vers une page pour choisir le nombre d'extension on souhaite rajouter");break;
            default: // "package"
                console.log("redirection vers une page pour choisir si on veux que l'argent de l'abonnement soit prélevé automatiquement");break;
        }
        
        this.props.navigation.navigate('SubscriptionOption', {subCategory:subType, sub:sub, userProjects:this.props.user.userData});
    }

    render() {
        return (
            <View >
                <KeyboardAwareScrollView keyboardShouldPersistTaps="always">

                    <Card>
                    <Card.Title>SUBSCRIPTION</Card.Title>
                        <Card.Divider />
                        {this.props.user.subscriptions.package.map((pk, i) => (
                            <PricingCard
                                key={i}
                                color={pk.theme_color}
                                title={pk.title}
                                price={"$" + pk.prize + "/" + pk.duration.persistence[0]}
                                info={pk.info}
                                button={{ title: '    GET NOW', icon: pk.icon }}
                                onButtonPress={() => {this.btnPrincingPress("package", pk)} }/>
                        ))}
                    </Card>

                    <Card>
                    <Card.Title>MORE VISIBILITY</Card.Title>
                        <Card.Divider />
                        {this.props.user.subscriptions.highlight.map((hl, j) => (
                            <PricingCard
                                key={j + this.props.user.subscriptions.package.length}
                                color={hl.theme_color}
                                title={hl.title}
                                price={"From $" + hl.prize}
                                info={hl.info}
                                button={{ title: '    GET NOW', icon: hl.icon }}
                                onButtonPress={() => { this.btnPrincingPress("highlight", hl) }} />
                        ))}
                    </Card>

                    <Card>
                    <Card.Title>MORE SLOTS</Card.Title>
                        <Card.Divider />
                        {this.props.user.subscriptions.extension.map((ex, k) => (
                            <PricingCard
                                key={k + this.props.user.subscriptions.package.length + this.props.user.subscriptions.highlight.length}
                                color={ex.theme_color}
                                title={ex.title}
                                price={"$" + ex.prize}
                                info={ex.info}
                                button={{ title: '    GET NOW', icon: ex.icon }} 
                                onButtonPress={() => {this.btnPrincingPress("extension", ex)} }/>
                        ))}
                    </Card>
                    
                </KeyboardAwareScrollView>
            </View>
        )
    }
})
