import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCrplrqctE8JAfpe5afe9KPkGg_Bck1JS8",
    authDomain: "clone-dfd68.firebaseapp.com",
    databaseURL: "https://clone-dfd68.firebaseio.com",
    projectId: "clone-dfd68",
    storageBucket: "clone-dfd68.appspot.com",
    messagingSenderId: "921104895859",
    appId: "1:921104895859:web:2f12ee6176b084224ebf06"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };