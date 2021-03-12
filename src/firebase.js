import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHALGUsPKmIl5cZVcYierLqOZbZFV-mPQ",
    authDomain: "clone-18297.firebaseapp.com",
    projectId: "clone-18297",
    storageBucket: "clone-18297.appspot.com",
    messagingSenderId: "5860667130",
    appId: "1:5860667130:web:21ec42e68917813c58e343",
    measurementId: "G-7D303X98GN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }