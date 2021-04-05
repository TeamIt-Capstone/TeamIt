import { firebase } from '../../firebase'

export default class auth {
    async signIn(email, password) {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
            // .then((response) => {
            //     const uid = response.user.uid
            //     const usersRef = firebase.firestore().collection('users')
            //     usersRef
            //         .doc(uid)
            //         .get()
            //         .then(firestoreDocument => {
            //             if (!firestoreDocument.exists) {
            //                 alert("User does not exist anymore.")
            //                 return;
            //             }
            //             const user = firestoreDocument.data()
            //             navigation.navigate('Home', {user: user})
            //         })
            //         .catch(error => {
            //             alert(error)
            //         });
            // })
            // .catch(error => {
            //     alert(error)
            // })
    }

    async register(email, password) {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
            // .then((response) => {
            //     const uid = response.user.uid
            //     const data = {
            //         id: uid,
            //         email,
            //         fullName,
            //     };
            //     const usersRef = firebase.firestore().collection('users')
            //     usersRef
            //         .doc(uid)
            //         .set(data)
            //         .then(() => {
            //             navigation.navigate('Home', {user: data})
            //         })
            //         .catch((error) => {
            //             alert(error)
            //         });
            // })
            // .catch((error) => {
            //     alert(error)
        // });
    }
}