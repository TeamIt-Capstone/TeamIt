import React, { useEffect, useState } from 'react'
import {FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ListItem, Avatar, Icon } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
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



    
(class FavoriteScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            oldList: this.props.user.favList.slice(),
            newList: this.props.user.favList,
        }
        this.goToProfile = this.goToProfile.bind(this);
        this.unFav = this.unFav.bind(this);
        this.addFav = this.addFav.bind(this);
    }
    
    goToProfile = (name) => {
       // this.props.navigation.navigate('Profile')
        alert("Go to " + name + "'s Profile")

    }
    
    unFav = (profile) => {
        profile.fav = !profile.fav
        alert("You remove " + profile.name + " from your favories")

        let newList = this.state.newList;

        this.props.update(null);
        newList.splice(newList.findIndex(function (i) { return i.id === profile.id; }), 1);
        
        this.setState({newList: newList});
    }

    
    addFav = (profile) => {
        profile.fav = !profile.fav
        alert("You add " + profile.name + " to your favories")

        let newList = this.state.newList;

        this.props.update(null);
        newList.push(profile)
        
        this.setState({newList: newList});
    }



    render() {
        return (
            <View>                
                {/* {this.props.user.favList.map((l, i) => ( */}
                 {this.state.oldList.map((l, i) => (
                        <ListItem
                            key={i}
                            topDivider
                            Component={TouchableScale}
                            friction={900} 
                            tension={400} 
                            activeScale={0.9} 
                            onPress={() => this.goToProfile(l.name)}>
                            
                            <Avatar source={{ uri: l.avatar_url }} />
                            
                            <ListItem.Content>
                                <ListItem.Title  style={{ color: 'black', fontWeight: 'bold' }}>{l.name}</ListItem.Title>
                                <ListItem.Subtitle style={{ color: 'black' }}>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                        
                        <ListItem.Chevron name="star" color={ this.state.newList.find(profile => profile.id == l.id) ? "red" : "grey"} size={30} onPress={this.state.newList.find(profile => profile.id == l.id) ? () => this.unFav(l) : () => this.addFav(l)}/>
                        </ListItem>
                    ))
                }
            </View>
        )
    }
})