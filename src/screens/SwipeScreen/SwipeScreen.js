import React, { useEffect, useState } from 'react'
import {Image, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import SwipeCards from "react-native-swipe-cards-deck";
import { formatData, filterProfiles, formateCardData } from '../../services/formdata/formdata';
import { connect } from 'react-redux';
import homeActions from '../../services/redux/actions/homeActions';
import userActions from '../../services/redux/actions/userActions';
import {Icon} from 'react-native-elements'

const actionCreators = {
  update: homeActions.handleUpdateUsersList,
  downloadUser: userActions.handleDownloadUser,
  updateSeen: userActions.handleUpdateSeen,
  updateMatchs: userActions.handleUpdateMatchs,
  updateFavorites: userActions.handleUpdateFavorites,
}

function mapStateToProps(state) {
  const {user, home, auth} = state;
  return {user, home, auth};
}


export default connect(mapStateToProps, actionCreators)(
  class SwipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entityText: null,
            cards: [],
            numColumns: 5,
        }
        this.cardsSetter = this.cardsSetter.bind(this);
        this.handleNope = this.handleNope.bind(this);
        this.handleYup = this.handleYup.bind(this);
        this.handleMaybe = this.handleMaybe.bind(this);
      }
      
      componentDidMount() {
        const uid = this.props.auth.user.user.uid;
        this.props.update();
        this.props.downloadUser(uid);
      };
  
      componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
          if (this.props.home.usersList && this.props.user.user) {
            const uid = this.props.auth.user.user.uid;
            const filteredProfiles = filterProfiles(this.props.home.usersList, this.props.user.user.seen, uid);
            formateCardData(filteredProfiles).then(res => {
              console.log(res);
              this.cardsSetter(res)
            }
            );
          }
        }
      }
    
    cardsSetter(val) {
      this.setState({
        cards: val,
      })
    }

    handleYup(card) {
      const uid = this.props.auth.user.user.uid;

      this.props.updateSeen(uid, card.id);
      this.props.updateMatchs(uid, card.id);
      return true; // return false if you wish to cancel the action
    }
    
    handleNope(card) {
      const uid = this.props.auth.user.user.uid;

      this.props.updateSeen(uid, card.id);
      return true;
    }

    handleMaybe(card)  {
      const uid = this.props.auth.user.user.uid;

      this.props.updateSeen(uid, card.id);
      this.props.updateFavorites(uid, card.id);
      return true;
    }


    renderItem({ item, index }) {
      if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
      }
      return (
        <View
          style={styles.item}
        >
          <Text style={styles.itemText}>{item.key}</Text>
        </View>
      );
    };

    Card({ data }) {
      var keyWords = [];
      var nbkey = 0;
      for (let keyword in data.keyWords) {
        keyWords.push(
          <View style={styles.keywords}>
            <Text>
              { keyword }
            </Text>
          </View>
        )
        nbkey = nbkey + 1
      }
      return (
        <View style={styles.card}>
          <Image
            style={styles.logo}
            source={data.img} 
          />
          <Text style={styles.projectname}>{data.projectName}</Text>
          <Text style={styles.projectdomain}>{data.domain}</Text>
          <FlatList
            data={formatData(data.keyWords, 5)}
            style={styles.tags}
            renderItem={renderItem}
            numColumns={4}
          />
        </View>
      );
    }

    render() {
      console.log(this.state.cards)
        return (
        <View style={styles.container}>
        {this.state.cards ? (
            <SwipeCards
              cards={this.state.cards}
              renderCard={(cardData) => <this.Card data={cardData} />}
              keyExtractor={(cardData) => String(cardData.text)}
              renderNoMoreCards={() => <StatusCard text="No more Projects..." />}
              yupView={
                <Icon
                  name='check'
                  type="feather"
                  color={"#2BD999"}
                  iconStyle={styles.iconStyle}
                  containerStyle={styles.containerStyle}
                />
              }
              maybeView={
                <Icon
                  name='star'
                  type="feather"
                  color={"#2BD999"}
                  iconStyle={styles.iconStyle}
                  containerStyle={styles.containerStyle}
                />
              }
              nopeView={
                <Icon
                  name='x'
                  type="feather"
                  color={"#2BD999"}
                  iconStyle={styles.iconStyle}
                  containerStyle={styles.containerStyle}
                />
              }
              handleYup={this.handleYup}
              handleNope={this.handleNope}
              handleMaybe={this.handleMaybe}
              showMaybe={true}
              showYup={true}
              showNope={true}
              hasMaybeAction={true}
              stack={true}
              stackDepth={3}
            />
        ) : (
          <StatusCard text="Loading..." />
        )}
      </View> 
        )
    }
});

function StatusCard({ text })  {
    return (
      <View>
        <Text style={styles.cardsText}>{text}</Text>
      </View>
    );
}

function renderItem({ item, index }) {
  if (item.empty === true) {
    return <View style={[styles.item, styles.itemInvisible]} />;
  }
  return (
    <View
      style={styles.item}
    >
      <Text style={styles.itemText}>#{item.key}</Text>
    </View>
  );
};