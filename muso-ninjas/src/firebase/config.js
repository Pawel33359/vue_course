import firebase from'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAksJQ4_cdn1S1Vm5YdlLpLobm_6x8F5bQ",
    authDomain: "muso-ninjas-f78f7.firebaseapp.com",
    projectId: "muso-ninjas-f78f7",
    storageBucket: "muso-ninjas-f78f7.appspot.com",
    messagingSenderId: "532611511621",
    appId: "1:532611511621:web:296120d1f614b140ec7a2c"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, projectAuth, projectStorage, timestamp}