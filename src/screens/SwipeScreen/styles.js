import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    card: {
      justifyContent: "center",
      alignItems: "center",
      width: 300,
      height: 480,
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: "white"
    },

    cardsText: {
      fontSize: 40,
    },

    logo: {
      flex: 1,
      height: 4,
      width: 250,
      alignSelf: "center",
      marginBottom: 20,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 1,
      borderColor: '#d1d1d1',
    },

    projectname: {
      fontSize: 22,
      fontWeight: 'bold',
      height: 100,
      fontFamily: 'roboto',
      color: '#3b4a5b',
      left: 15,
    },

    projectdomain: {
      position: 'absolute',
      fontSize: 10,
      fontWeight: 'bold',
      alignSelf: 'flex-end',
      margin: 3,
      bottom: 75,
      fontFamily: 'roboto',
      color: '#3b4a5b',
      right: 20
    },

    tags: {
      position: 'absolute',
      bottom: 20,
      left: 15
    },

    itemText: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 1,
      padding: 5,
      fontFamily: 'roboto',
      color: '#3b4a5b'
    },

    item: {
      padding: 3,
    }
  });