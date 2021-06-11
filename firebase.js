import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCm5ZfZN92Uiki_1ijFnlQPdb5dTpF9ZBk",
  authDomain: "cln-f570d.firebaseapp.com",
  projectId: "cln-f570d",
  storageBucket: "cln-f570d.appspot.com",
  messagingSenderId: "1020706268571",
  appId: "1:1020706268571:web:d0f1ed2c85c4f9b367ed3e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
