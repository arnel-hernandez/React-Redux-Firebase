
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD6SMou0XJL3-ln5JEpVqM8qLkXQZne3xw",
    authDomain: "arnel-marioplan.firebaseapp.com",
    databaseURL: "https://arnel-marioplan.firebaseio.com",
    projectId: "arnel-marioplan",
    storageBucket: "arnel-marioplan.appspot.com",
    messagingSenderId: "323718177321",
    appId: "1:323718177321:web:e0447e4e92fade5b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;