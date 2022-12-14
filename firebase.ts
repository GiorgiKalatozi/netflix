import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6kTqbVdTxlZ67wk3G48wj--3Gk9KsonQ",
  authDomain: "netflix-clone-74d6f.firebaseapp.com",
  //   databaseURL: "",
  projectId: "netflix-clone-74d6f",
  storageBucket: "netflix-clone-74d6f.appspot.com",
  messagingSenderId: "527489154243",
  appId: "1:527489154243:web:51863370d03524230d7676",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
