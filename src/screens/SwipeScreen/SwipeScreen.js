import React, { useEffect, useState } from 'react'
import {Image, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../services/firebase'
import updateAction from '../../services/redux/actions/userActions'
import SwipeCards from "react-native-swipe-cards-deck";
import { formatData } from '../../services/formdata/formdata';
import {connect} from 'react-redux'

const actionCreators = {
  update: updateAction.update,
}

function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps, actionCreators)

(class SwipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: this.props.user.usersProjects,
          numColumns: 5,
          projectsList: this.props.user.usersProjects,
        };
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
    
    renderYup() {
      return (
        <View
          style={styles.item}
        >
          <Text style={styles.itemText}>get it boy</Text>
        </View>
      );
    }

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
        return (
        <View style={styles.container}>
        {this.state.cards ? (
          <SwipeCards
            cards={this.state.cards}
            renderCard={(cardData) => <this.Card data={cardData} />}
            keyExtractor={(cardData) => String(cardData.text)}
            renderNoMoreCards={() => <StatusCard text="No more Projects..." />}
            handleYup={handleYup}
            handleNope={handleNope}
            handleMaybe={handleMaybe}
            hasMaybeAction={true}
            yupText={"Like"}
            maybeText={"Favorite"}
            stack={true}
            stackDepth={3}
          />
        ) : (
          <StatusCard text="Loading..." />
        )}
      </View> 
        )
    }
})

function renderYup() {
  console.log("test test test")
  return (
    <View>
      <Text>get it boy</Text>
    </View>
  );
}

function handleYup(card) {
    console.log(`Yup for ${card.text}`);
    return true; // return false if you wish to cancel the action
}

function handleNope(card) {
    console.log(`Nope for ${card.text}`);
    return true;
  }
function handleMaybe(card)  {
    console.log(`Maybe for ${card.text}`);
    return true;
  }

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