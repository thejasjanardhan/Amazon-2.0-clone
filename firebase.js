import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVBMfRmBOzcOFbDzaHapNqWDFd45slpbU",
  authDomain: "facebook-2-e0af1.firebaseapp.com",
  projectId: "facebook-2-e0af1",
  storageBucket: "facebook-2-e0af1.appspot.com",
  messagingSenderId: "806454835477",
  appId: "1:806454835477:web:099353307a8f80a6ae111c",
  measurementId: "G-1YHDKKYY9Z",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
