import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC4tXc42aRXBkJT_ULTaW_CkLfjX-aderM",
    authDomain: "parte-2-149c0.firebaseapp.com",
    projectId: "parte-2-149c0",
    storageBucket: "parte-2-149c0.appspot.com",
    messagingSenderId: "510567198277",
    appId: "1:510567198277:web:42233bb6fcef98ef623d2c",
    measurementId: "G-5PEQ305NXT"
  };


  app.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const storage = app.storage()
  export const db = app.firestore()

  