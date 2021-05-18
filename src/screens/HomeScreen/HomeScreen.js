import React, { useEffect, useState } from 'react'
import {FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../services/firebase'
import SwipeCards from "react-native-swipe-cards-deck";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entityText: null,
            cards: []
        }
//        this.cards = this.cardsSetter.bind(this);
//        this.setCards = this.cardsSetter.bind(this);
//        this.effect = this.effect.bind(this)
//        this.onAddButtonPress = this.onAddButtonPress.bind(this);
          this.cardsSetter = this.cardsSetter.bind(this);
      }
    cardsSetter(val) {
      this.setState({
        cards: val,

      })
      // return useState()
    }

    componentDidMount() {
      this.cardsSetter(
        [
            { text: "Profil 1", backgroundColor: "red" },
            { text: "Profil 2", backgroundColor: "purple" },
            { text: "Profil 3", backgroundColor: "green" },
            { text: "Profil 4", backgroundColor: "blue" },
            { text: "Profil 5", backgroundColor: "cyan" },
            { text: "Profil 6", backgroundColor: "orange" },
        ]);
    };

    render() {
        return (
        <View style={styles.container}>
        {this.state.cards ? (
          <SwipeCards
            cards={this.state.cards}
            renderCard={(cardData) => <Card data={cardData} />}
            keyExtractor={(cardData) => String(cardData.text)}
            renderNoMoreCards={() => <StatusCard text="No more profils..." />}
            handleYup={handleYup}
            handleNope={handleNope}
            handleMaybe={handleMaybe}
            hasMaybeAction={true}
  
            // If you want a stack of cards instead of one-per-one view, activate stack mode
             stack={true}
             stackDepth={3}
          />
        ) : (
          <StatusCard text="Loading..." />
        )}
      </View> 
        )
    }
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

function Card({ data }) {
    return (
      <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
        <Text>{data.text}</Text>
      </View>
    );
}

function StatusCard({ text })  {
    return (
      <View>
        <Text style={styles.cardsText}>{text}</Text>
      </View>
    );
}