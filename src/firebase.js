import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASS-NthSgymRM078ghwA1e4yyPKpJ5DbA",
  authDomain: "instagram-reels-b6c72.firebaseapp.com",
  projectId: "instagram-reels-b6c72",
  storageBucket: "instagram-reels-b6c72.appspot.com",
  messagingSenderId: "1057712769732",
  appId: "1:1057712769732:web:a96dc530b16f81aba25791",
  measurementId: "G-MERGGZXXFD"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
//const auth = firebase.auth();

export default db ;
//export { auth, db };