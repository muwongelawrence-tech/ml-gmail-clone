import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwFzqr2YelmL6X3i2KywE32ZQ1ge6j8F0",
    authDomain: "ml--clone.firebaseapp.com",
    projectId: "ml--clone",
    storageBucket: "ml--clone.appspot.com",
    messagingSenderId: "898450848759",
    appId: "1:898450848759:web:4ac0f1cb486827b10d0cf2",
    measurementId: "G-YHM24HF2R5"
  };
  const firebaseApp  = firebase.initializeApp(firebaseConfig );

  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth, provider};