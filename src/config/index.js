import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDjRcmzgg9H5yxGbHywuLLEw0N6bM5f5e4",
    authDomain: "pet-care-100a3.firebaseapp.com",
    databaseURL: "https://pet-care-100a3-default-rtdb.firebaseio.com",
    projectId: "pet-care-100a3",
    storageBucket: "pet-care-100a3.appspot.com",
    messagingSenderId: "1061902834491",
    appId: "1:1061902834491:web:df8037d7a3ab7b8291751e"
});
const FIREBASE = firebase;

export default FIREBASE;