import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration


  var firebaseConfig = {
    apiKey: "zaCELgL. 0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
    authDomain: "muro-interactivo-04.firebaseapp.com",
    projectId: "muro-interactivo-04",
    storageBucket: "muro-interactivo-04.appspot.com",
    messagingSenderId: "320218486977",
    appId: "1:3236584586977:web:a3eefb6d82253679249c40"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
