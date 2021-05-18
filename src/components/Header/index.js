import React from "react"
import { View } from "react-native";
import { Icon } from "react-native-elements";
import style from "./style";

export default function Header(props) {
    return (
        <View style={style.container}>
            <Icon name='rowing'/>
            <Icon name='rowing'/>
            <Icon name='rowing'/>
            <Icon name='rowing'/>
        </View>
    )
}