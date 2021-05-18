import { firebase } from '../../firebase'
import { userDefaultDataStructure, userEncryptedDefaultDataStructure } from '../../../utils/defaultDataStructures'
import UserRepository from '../../database/UserRepository';

const auth = firebase.auth();
const db = {
    user: new UserRepository()
}

export default class Auth {
    async signIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                const uid = res.user.uid;
                // const usersRef = firebase.firestore().collection('users')
                // usersRef
                //     .doc(uid)
                //     .get()
                //     .then(firestoreDocument => {
                //         if (!firestoreDocument.exists) {
                //             alert("User does not exist anymore.")
                //             return;
                //         }
                //         const user = firestoreDocument.data()
                //         navigation.navigate('Home', {user: user})
                //     })
                //     .catch(error => {
                //         alert(error)
                //     });
                db.user.setConnectionStatusByUserId(uid, true);
                return res;
            })
    }

    async register(data) {
        return auth.createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                const uid = res.user.uid
                const user_data = userDefaultDataStructure;
                const encrypted_data = userEncryptedDefaultDataStructure;
                encrypted_data.fullName = data.fullName;
                
                db.user.setSingleUserById(uid, user_data);
                db.user.setSingleUserEncryptedById(uid, encrypted_data);
                navigation.navigate('SignIn');
            });
    }
}