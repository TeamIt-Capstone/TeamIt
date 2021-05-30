import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import userAction from '../../services/redux/actions/userActions'
import {connect} from 'react-redux'

const actionCreators = {
  update: userAction.handleUpdate,
  downloadUser: userAction.handleDownloadUser,
}

function mapStateToProps(state) {
  const {user, auth} = state;
  return {user, auth};
}

export default connect(mapStateToProps, actionCreators)(
class Profile extends Component {

  componentDidMount() {
    const uid = this.props.auth.user.user.uid;

    this.props.downloadUser(uid);
  }

  render() {
    if (this.props.user.user) {
      console.log(this.props.user.user.profile);
    }
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          {/* <Image style={styles.avatar} source={{uri: this.state.profilePic}}/> */}
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name} /*source={{uri: this.state.profile.encrypted.fullName}}*/>John Doe</Text>
              <Text style={styles.info} /*source={{uri: this.state.profile.skills}}*/>UX Designer / Mobile developer</Text>
              <Text style={styles.description}/*source={{uri: this.state.profile.description}}}*/>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an</Text>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Tech 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Tech 2</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});

                                            