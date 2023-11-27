import React from 'react'
// Firebase
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


export default function RegisterUser() {
    // Function to handle user registration
    const registerUser = () => {
        const email = "user2@example.com";
        const password = "password123";
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User registration successful
                const user = userCredential.user;
                console.log("User registered:", user);
            })
            .catch((error) => {
                // User registration failed
                console.error("Error registering user:", error);
            });
    };

  return (
    <>
        <button onClick={registerUser}>Register</button>
    </>

  )
}
