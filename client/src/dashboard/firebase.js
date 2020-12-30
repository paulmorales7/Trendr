import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAX7LSmJRs_qtAE-9JWQt5yqFZOa-8a_Qg",
    authDomain: "trendr-fc767.firebaseapp.com",
    projectId: "trendr-fc767",
    storageBucket: "trendr-fc767.appspot.com",
    messagingSenderId: "897307050794",
    appId: "1:897307050794:web:cf1182d3e82e838f551453"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }