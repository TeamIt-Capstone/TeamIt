import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Slider, Card,TextInput , ListItem, CheckBox } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input'
import { LightenDarkenColor } from 'lighten-darken-color'; 


class Extension extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.sub.type,
            numberOfSlot: 1,
            totalPrize: this.props.sub.prize,
        }
        
    }
  updateParent = () => {
        if (this.props.onChange) {
            let dataToSend = new Object();
            dataToSend.type = this.state.type;
            dataToSend.numberOfSlot = this.state.numberOfSlot;
            dataToSend.totalPrize = this.state.totalPrize;
            this.props.onChange(dataToSend);
        }
    }

    changeValue = (value) => {
        this.setState({ numberOfSlot: value, totalPrize: this.props.sub.prize * value })
        this.updateParent()
        return value
    }
    findNumberExtension = () => {
        switch (this.props.sub.type) {
            case 'Favorite extension':
                return this.props.userData.subscriptions.extension.fav_slots_max;
                break;
        
            case 'Project extension':
                return this.props.userData.subscriptions.extension.project_slots_max;
                break;
        
            default:
                return this.props.userData.subscriptions.extension.like_slots_max;
                break;
        }
    }

    render() {

        // for the slider
        return (
            <View>
                <ScrollView >
                    <Card containerStyle={{ marginTop: 0, justifyContent: 'center',alignItems: 'center', flex:1}}>
                        <Card.Title style={{ marginTop: -10 }} h5> {this.props.sub.type}</Card.Title>
                        <Card.Title style={{ marginTop: -10 }} h5>You have already  {this.findNumberExtension()} slots </Card.Title>
                        <Card.Title style={{ marginTop: -10 }} h5>How many do you want more ?</Card.Title>
                        <NumericInput
                            style={{ alignItems:'center', marginLeft:10}}
                            value={this.state.numberOfSlot} 
                            onChange={value => this.changeValue(value)} 
                            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                            totalWidth={240} 
                            totalHeight={50} 
                            iconSize={25}
                            step={1}
                            valueType='real'
                            rounded
                            minValue={0}
                            textColor={this.props.sub.theme_color} 
                            iconStyle={{ color: 'white' }} 
                            rightButtonBackgroundColor='#EA3788' 
                            leftButtonBackgroundColor='#E56B70'/>
                    </Card>

                    <Card.Title style={{textAlign: 'center', color:'grey',marginTop:20, marginBottom:9}} h4>Amount you have to pay:</Card.Title>
                    <Text style={{ textAlign: 'center', color:this.props.sub.theme_color , marginBottom:0, fontWeight: 'bold', fontSize:24}} > ${this.state.totalPrize}</Text>
                </ScrollView>
            </View>
        );
    }
}

export default Extension;