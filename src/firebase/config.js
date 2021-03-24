import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAPVGF84HkVIbRR6DFpMjQ539VawX0AOc8',          //ok
  authDomain: 'teamit-299bf.firebaseapp.com',                 // ok
  databaseURL: 'teamit-299bf-default-rtdb.firebaseio.com', // ok
  projectId: 'teamit-299bf',                                        // ok
  storageBucket: 'teamit-299bf.appspot.com',     // ok
  messagingSenderId: '358332545849',             // ok
  appId: '1:358332545849:android:76f42420627b0a46ed46e8', // ok
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
