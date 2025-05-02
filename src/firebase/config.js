import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDLxUDtqgqky0iFqdkNbxxdZB_0w3rhMFs",
    authDomain: "nexics.firebaseapp.com",
    projectId: "nexics",
    storageBucket: "nexics.appspot.com", // Corrected storage bucket
    messagingSenderId: "102034307055",
    appId: "1:102034307055:web:950a0d9b5879060a2b681a",
    measurementId: "G-JDJN7PYSB2"
};

// Initialize Firebase only if it's not already initialized
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
