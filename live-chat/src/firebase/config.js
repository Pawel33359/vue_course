import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB3Itq6gpcPxJns-oZg6sOCYGi_s0ZkvOA",
    authDomain: "udemy-vue-firebase-sites-e9a10.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-e9a10",
    storageBucket: "udemy-vue-firebase-sites-e9a10.appspot.com",
    messagingSenderId: "659447277579",
    appId: "1:659447277579:web:4ea5335da394928138ff0e"
  }

  //init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFirestore, timestamp}
