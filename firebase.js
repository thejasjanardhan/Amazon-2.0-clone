import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoRJCaGKCXsr9uWZwkyVoYzLuUeIxWDfA",
  authDomain: "tinder-clone-3f1b9.firebaseapp.com",
  databaseURL: "https://tinder-clone-3f1b9.firebaseio.com",
  projectId: "tinder-clone-3f1b9",
  storageBucket: "tinder-clone-3f1b9.appspot.com",
  messagingSenderId: "975661845145",
  appId: "1:975661845145:web:a7056a4d854d4abc2f0608",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
