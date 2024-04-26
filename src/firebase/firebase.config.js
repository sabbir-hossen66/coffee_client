// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZLDbz64TbiwwZGk7Lgtyf7HN7YfVrBIY",
  authDomain: "coffee-auth-1d85b.firebaseapp.com",
  projectId: "coffee-auth-1d85b",
  storageBucket: "coffee-auth-1d85b.appspot.com",
  messagingSenderId: "767346478636",
  appId: "1:767346478636:web:b05e2b1c4e535e16e18b89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;