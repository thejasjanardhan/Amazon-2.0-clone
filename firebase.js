import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFF59os5Q3z_K8lkENPKFq9E-ggbusguk",
  authDomain: "cln-392b4.firebaseapp.com",
  projectId: "cln-392b4",
  storageBucket: "cln-392b4.appspot.com",
  messagingSenderId: "424593335270",
  appId: "1:424593335270:web:e9483c356ec58d650e2c27",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
