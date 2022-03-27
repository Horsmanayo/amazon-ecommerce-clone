import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmDVjYBV4AoUg6vP0-OmztlVFE9-PEXx0",
  authDomain: "clone-97111.firebaseapp.com",
  projectId: "clone-97111",
  storageBucket: "clone-97111.appspot.com",
  messagingSenderId: "6302519948s97",
  appId: "1:630251994897:web:fb8a7a2ca355ed1bf016b0",
  measurementId: "G-Q10HDZ32L0",
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
