import React from "react"
import { View } from "react-native";
import { Icon } from "react-native-elements";
import style from "./style";

export default function Header({navigation, scene, insets}) {
    const containerStyle = {
        ...style.container,
        marginTop: insets.top
    };

    return (
        <View style={containerStyle}>
            <Icon name='briefcase' type="feather" color={scene.route.name === "Home" ? "#2BD999" : "black"} onPress={() => navigation.navigate("Home")}/>
            <Icon name='star' type="feather" color={scene.route.name === "Favorite" ? "#2BD999" : "black"} onPress={() => navigation.navigate("Favorite")}/>
            <Icon name='message-circle' type="feather" color={scene.route.name === "Messages" ? "#2BD999" : "black"} onPress={() => navigation.navigate("Matchs")}/>
            <Icon name='user' type="feather" color={scene.route.name === "Profile" ? "#2BD999" : "black"} onPress={() => navigation.navigate("Profile")}
            />
        </View>
    );
}