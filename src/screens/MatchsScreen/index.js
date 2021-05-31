import React from 'react'
import {FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ListItem, Avatar, Badge } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import userAction from '../../services/redux/actions/userActions'
import {connect} from 'react-redux'
import homeActions from '../../services/redux/actions/homeActions'
import {formateMatchsData} from '../../services/formdata/formdata'

const actionCreators = {
    update: homeActions.handleUpdateUsersList,
    downloadUser: userAction.handleDownloadUser,
}

function mapStateToProps(state) {
    const {user, auth, home} = state;
    return {user, auth, home};
}

export default connect(mapStateToProps, actionCreators)
(class MatchsScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            matchsList: null,
        }
    }

    componentDidMount() {
        const uid = this.props.auth.user.user.uid;
        this.props.update();
        this.props.downloadUser(uid);
      };
  
      componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
          if (this.props.home.usersList && this.props.user.user) {
            const formatedMatchs = formateMatchsData(this.props.user.user.matchs, this.props.home.usersList);
            this.setState({
                matchsList: (this.props.user.user.favorites) ? formatedMatchs.slice() : []
            });
          }
        }
      }

    render() {
        return (
            <View>                
                 {(this.state.matchsList) ? this.state.matchsList.map((l, i) => (
                        <ListItem
                            key={i}
                            topDivider
                            Component={TouchableScale}
                            friction={900} 
                            tension={400}
                            activeScale={0.9}
                        >   
                            {
                                (l.avatar_url !== '') ? (
                                    <Avatar rounded title={l.name[0]} source={{ uri: l.avatar_url }} />
                                ) : (
                                    <Avatar rounded containerStyle={{ backgroundColor: 'grey' }} title={l.name[0]} />
                                    )
                            }
                            <Badge
                                status={l.connected ? "success" : "warning"}
                                containerStyle={{ position: 'absolute', top: 15, left: 45 }}
                            />

                            <ListItem.Content>
                                <ListItem.Title  style={{ color: 'black', fontWeight: 'bold' }}>{l.name}</ListItem.Title>
                                <ListItem.Subtitle style={{ color: 'black' }}>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                : null}
            </View>
        )
    }
})