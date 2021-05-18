import React, { useEffect, useState } from 'react'
import {FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../services/firebase'
import Store from '../../services/firebase/store';

export default class HomeScreen extends React.Component {
    db = new Store('entities')
    constructor(props) {
        super(props);
        this.state = {
            entityText: null,
        }
        this.onAddButtonPress = this.onAddButtonPress.bind(this);
        this.onPricingBtnPress = this.onPricingBtnPress.bind(this);
        this.gotoFav = this.gotoFav.bind(this);
    }

    async onAddButtonPress() {
        alert(this.state.entityText)
    }
    
    gotoFav = () => {
        this.props.navigation.navigate('Favorite')
        
    }

    
    onPricingBtnPress  = () => {
        this.props.navigation.navigate('Pricing');
    }

    render() {
        return (
            <View style={styles.container}>
                
                    <TouchableOpacity style={styles.button} onPress={this.onPricingBtnPress}>
                        <Text style={styles.buttonText}>Button Pricing tmp</Text>
                    </TouchableOpacity>
               
            </View>
        )
    }
}
function oldHomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id

    useEffect(() => {
        entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add new entity'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    )
}