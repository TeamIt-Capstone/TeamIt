import React, { useEffect, useState } from 'react'
import {Image, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../services/firebase'
import SwipeCards from "react-native-swipe-cards-deck";
import { formatData } from '../../services/formdata/formdata';

export default class SwipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entityText: null,
            cards: [],
            numColumns: 5,
        }
        this.cardsSetter = this.cardsSetter.bind(this);
      }
    
    cardsSetter(val) {
      this.setState({
        cards: val,

      })
    }

    componentDidMount() {
      this.cardsSetter(
        [
            { projectName: "Project 1", img: require("../../../assets/icon.png"), projectName: "project 1", domain: "tech 1", keyWords: [{ key: 'a1' }, { key: 'a2' }, { key: 'a3' }, { key: 'a4' },] },
            { projectName: "Project 2", img: require("../../../assets/icon.png"), projectName: "project 2", domain: "tech 2", keyWords: [{ key: 'b1' }, { key: 'b2' }, { key: 'b3' },] },
            { projectName: "Project 3", img: require("../../../assets/icon.png"), projectName: "project 3", domain: "tech 1", keyWords: [{ key: 'c1' }, { key: 'c2' }, { key: 'c3' }, { key: 'c4' }, { key: 'c5' },] },
            { projectName: "Project 4", img: require("../../../assets/icon.png"), projectName: "project 4", domain: "tech 1", keyWords: [{ key: 'd1' }, { key: 'd2' }, { key: 'd3' },] },
            { projectName: "Project 5", img: require("../../../assets/icon.png"), projectName: "project 5", domain: "tech 1", keyWords: [{ key: 'e1' }, { key: 'e2' },] },
            { projectName: "Project 6", img: require("../../../assets/icon.png"), projectName: "project 6", domain: "tech 1", keyWords: [{ key: 'f1' }, { key: 'f2' }, { key: 'f3' }, { key: 'f4' }, { key: 'f5' },] },
        ]);
    };

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
}

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