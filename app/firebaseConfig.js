import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCejAFfIwWSpC6Z99OXq3ej8CjA43KJkCc",
  authDomain: "productfeedback-9a6a3.firebaseapp.com",
  projectId: "productfeedback-9a6a3",
  storageBucket: "productfeedback-9a6a3.appspot.com",
  messagingSenderId: "913294989007",
  appId: "1:913294989007:web:edefadbfd0a676ddbd49ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { auth,db,storage };