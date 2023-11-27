
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDsvjcYxwgdOyQH0EQgEA3p_E6Xqv_JK6Y",
    authDomain: "chatnbuy-dd259.firebaseapp.com",
    databaseURL: "https://chatnbuy-dd259-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatnbuy-dd259",
    storageBucket: "chatnbuy-dd259.appspot.com",
    messagingSenderId: "296910622869",
    appId: "1:296910622869:web:9ef2f8bf1bc9ed534fcb9c",
    measurementId: "G-CBWYBK9ZNF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

