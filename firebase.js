import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDVnJPT8QMtYV5PUyzdaVx2Oh4fPPm8rT8",
    authDomain: "mega-2a3cd.firebaseapp.com",
    projectId: "mega-2a3cd",
    storageBucket: "mega-2a3cd.appspot.com",
    messagingSenderId: "90419559165",
    appId: "1:90419559165:web:849555aec293d8f4c8dc94"
};
  

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();

export default db;