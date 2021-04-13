import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Slider, Card,CardStack , ListItem, CheckBox } from 'react-native-elements';
import { Animated } from 'react-native';


class Highlight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // for the slider
            value: 0,

            // get all project's id of the user and add the field checked for get the choice of the user
            allProjects: this.props.userProjects.slice().map((el) => {
                var o = {id:el};
                o.checked = false;
                return o;
            }),

            // if it's a project sub, count how many project are choosen else the profile is choose by default
            counter: (this.props.userProjects && this.props.sub.type == "Project highlight") ? 0 : 1, 

            // basic prize of the minimum sub * number of highlighting (number of highlighting = counter)
            totalPrize: this.props.sub.prize*((this.props.userProjects && this.props.sub.type == "Project highlight") ? 0 : 1),
        }
    }

    checkThisBox = (itemID) => {
        // check or uncheck
        this.state.allProjects[itemID].checked = !this.state.allProjects[itemID].checked

        // count the total number of projects choosen
        this.state.counter = 0;
        this.state.allProjects.map((pr) => {
            if (pr.checked) {
                this.state.counter++;
            }
        })

        // save + update the prize
        this.setState({ counter:this.state.counter, allProjects:this.state.allProjects, totalPrize:((this.props.sub.prize * (this.state.value*2 + 1))*this.state.counter) })
    }


    render() {

        // for the slider
        let { value } = this.state;
        return (
            <View>
                <ScrollView >
                    <Card containerStyle={{ marginTop: 0}}>
                        <Card.Title style={{ marginTop: -10 }} h5>Choose the duration of highlighting</Card.Title>
                        
                        <Slider
                            value={value}

                            // update the Slider and update the total prize
                            onValueChange={(value) => { this.setState({ value, totalPrize:((this.props.sub.prize * (this.state.value*2 + 1))*this.state.counter) }) }}
                            maximumValue={this.props.sub.duration.persistence.length - 1}
                            minimumValue={0}
                            step={1}
                            minimumTrackTintColor={this.props.sub.theme_color}
                            trackStyle={{ height: 10 }}
                            thumbStyle={{ height: 40, width: 40,top:10,  backgroundColor: 'transparent' }}
                            thumbProps={{Component: Animated.Image,
                                source: {uri: 'https://cdn0.iconfinder.com/data/icons/small-color-v14/512/slider_finger_gesture_hand_move-512.png'},
                            }} />
                        
                        <Card.Title style={{ textAlign: 'left', color: 'grey', marginTop: 20 }}>Subscription duration:
                         
                             {/* get the duration of the sub */}
                            <Text style={{ color:'black' }}> {this.props.sub.duration.persistence[this.state.value]}</Text>
                        </Card.Title>
                    </Card>

                    {/* if it is a project sub and if the user has a project */}
                    {(this.props.userProjects && this.props.sub.type == "Project highlight") ? (
                        <Card containerStyle={{ maxHeight:280}}>
                            <Card.Title style={{ margin: -10, marginBottom: 5 }} h5>Choose your project{"(s)"}: </Card.Title>
                            
                            <ScrollView>
                                {this.state.allProjects.map((p, i) => (
                                    <ListItem key={i}  bottomDivider>
                                        <ListItem.Content>
                                            <CheckBox
                                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent'}}
                                                center
                                                title={'Project ' + p.id}
                                                checkedIcon='dot-circle-o'
                                                uncheckedIcon='circle-o'
                                                checkedColor={this.props.sub.theme_color}
                                                onPress= {() => this.checkThisBox(i)}
                                                checked= {p.checked}
                                            />
                                        </ListItem.Content>
                                    </ListItem>
                                ))}
                            </ScrollView>
                        </Card>
                    ) : (null)}

                    <Card.Title style={{textAlign: 'center', color:'grey',marginTop:20, marginBottom:9}} h4>Amount you have to pay:</Card.Title>
                    <Text style={{ textAlign: 'center', color:this.props.sub.theme_color , marginBottom:0, fontWeight: 'bold', fontSize:24}} > ${this.state.totalPrize}</Text>
                </ScrollView>
            </View>
        );
    }
}

export default Highlight;