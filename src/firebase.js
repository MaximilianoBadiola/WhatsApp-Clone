import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAf6A_7Zz17mupWdpf4--egnP9Brc0q1I0",
    authDomain: "whats-app-clone-4b787.firebaseapp.com",
    projectId: "whats-app-clone-4b787",
    storageBucket: "whats-app-clone-4b787.appspot.com",
    messagingSenderId: "1021305119152",
    appId: "1:1021305119152:web:89420ab88670f05a647675"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;