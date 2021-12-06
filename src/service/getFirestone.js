import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdN1Ebvn_3Rr6jSpIkCDjTYOxM0nALl90",
    authDomain: "lasalba-d3f5c.firebaseapp.com",
    projectId: "lasalba-d3f5c",
    storageBucket: "lasalba-d3f5c.appspot.com",
    messagingSenderId: "891580408649",
    appId: "1:891580408649:web:7cad92a61ca92927a57098"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFiresore(){
    return firebase.firestore(app);
};