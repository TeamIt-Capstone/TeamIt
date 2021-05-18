import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Slider, Card,CardStack , ListItem, CheckBox } from 'react-native-elements';
import { Animated } from 'react-native';


class PackageScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.sub.type,
            
            automaticPrelevement: false,
            automaticSubscription: false,
            

            totalPrize: this.props.sub.prize,
        }
    }

    updateParent = () => {
        if (this.props.onChange) {
            let dataToSend = new Object();
            dataToSend.type = this.state.type;
            dataToSend.totalPrize = this.state.totalPrize;
            dataToSend.automaticSubscription = this.state.automaticSubscription;
            dataToSend.automaticPrelevement = this.state.automaticPrelevement;
            this.props.onChange(dataToSend);
        }
    }



    render() {

        return (
            <View>
                <ScrollView >
                    <Card containerStyle={{ marginTop: 0}}>
                        <Card.Title style={{ marginTop: -10 }} h5>Resume of your subscription</Card.Title>

                        {this.props.sub.info.map((info, k) => (
                            <Text key={k}>{ info}</Text>
                        ))}
                        
                        <CheckBox
                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent'}}
                            center
                            title="Automatic subscription"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checkedColor={this.props.sub.theme_color}
                            onPress= {() => {this.setState({automaticSubscription:!this.state.automaticSubscription}), this.updateParent()}}
                            checked= {this.state.automaticSubscription}
                        />
                        {(this.state.automaticSubscription) ? (
                            <CheckBox
                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent'}}
                            center
                            title="Automatic prelevement"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checkedColor={this.props.sub.theme_color}
                            onPress= {() => {this.setState({automaticPrelevement:!this.state.automaticPrelevement}), this.updateParent()}}
                            checked= {this.state.automaticPrelevement}
                        />
                        ) : (null)}
                        


                    </Card>

                    <Card.Title style={{textAlign: 'center', color:'grey',marginTop:20, marginBottom:9}} h4>Amount you have to pay:</Card.Title>
                    <Text style={{ textAlign: 'center', color:this.props.sub.theme_color , marginBottom:0, fontWeight: 'bold', fontSize:24}} > ${this.state.totalPrize}</Text>
                </ScrollView>
            </View>
        );
    }
}

export default PackageScreen;