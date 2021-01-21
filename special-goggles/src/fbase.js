import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMgOFecw4eOG4Kp7vJk9goiknmq5RMP5A",
    authDomain: "special-goggles.firebaseapp.com",
    projectId: "special-goggles",
    storageBucket: "special-goggles.appspot.com",
    messagingSenderId: "710308311903",
    appId: "1:710308311903:web:0ecaf0e4dedee423813cea",
    measurementId: "G-MK6LFFFKPD"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();