
import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB5rW3jnRckonCLtaIYfEi5sFlMbYtcsQQ",
    authDomain: "vue-js-crud-5b971.firebaseapp.com",
    databaseURL: "https://vue-js-crud-5b971.firebaseio.com",
    projectId: "vue-js-crud-5b971",
    storageBucket: "vue-js-crud-5b971.appspot.com",
    messagingSenderId: "208769103406",
    appId: "1:208769103406:web:360472839982d221ef91bf",
    measurementId: "G-FZ1Z2XTQDZ"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();