import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import  'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDs47HMBQFpTIZIjw35IGYvpNEjt9gU7fk",
  authDomain: "linkedin-clone-f8953.firebaseapp.com",
  projectId: "linkedin-clone-f8953",
  storageBucket: "linkedin-clone-f8953.appspot.com",
  messagingSenderId: "1027177164303",
  appId: "1:1027177164303:web:14c56cd86ecaeda0627d7a",
  measurementId: "G-JJD64Y0HY9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage  = firebase.storage();

export{auth,provider,storage}

export default db;