// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const auth = getAuth(app);

export { auth };