import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFbHxPMmNxDa7zqQRHqlw_-ZbiE3N_DWI",
  authDomain: "facebookclone-8e348.firebaseapp.com",
  databaseURL: "https://facebookclone-8e348.firebaseio.com",
  projectId: "facebookclone-8e348",
  storageBucket: "facebookclone-8e348.appspot.com",
  messagingSenderId: "300153042373",
  appId: "1:300153042373:web:aceaf5d8a4e4e2f62dc7ac",
  measurementId: "G-XHT6LS40CY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;