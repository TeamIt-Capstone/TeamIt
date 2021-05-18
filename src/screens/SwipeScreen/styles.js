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
      width: 250,
      height: 400,
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
      alignSelf: 'flex-start',
      margin: 1,
      height: 100,
    },

    projectdomain: {
      position: 'absolute',
      fontSize: 10,
      fontWeight: 'bold',
      alignSelf: 'flex-end',
      margin: 3,
      bottom: 75,
    },

    tags: {
      position: 'absolute',
      bottom: 20,
      left: 0
    },

    itemText: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 1,
      padding: 5,
    },

    item: {
      padding: 3,
    }
  });