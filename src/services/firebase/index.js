import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import {firebaseSettings} from "../../utils/settings";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseSettings);
}

export { firebase };
