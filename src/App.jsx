import './App.css'
import Navbar from './components/Navbar'


// Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Auth
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/Home"
import Login from "./components/Login"


function App() {
   
    // Register User
    // const auth = getAuth();

    
    // Call the registerUser function to register a user
    // registerUser();
    





  // firebaseのデータベースを使って、ユーザー登録機能を実装する




  // firebaseのリアルタイムデータベースを使ってチャットアプリを作成する
  


  // firebaseに接続する
  // const firebaseConfig = {
  //   apiKey: "AIzaSyD-2X0Q6eQ9N7GxKf7g8i7u5J6X8Xg2c0A",
  //   authDomain: "chat-app-9e6d0.firebaseapp.com",
  //   projectId: "chat-app-9e6d0",
  //   storageBucket: "chat-app-9e6d0.appspot.com",
  //   messagingSenderId: "1037504100089",
  //   appId: "1:1037504100089:web:6b7d3c9d2b0a6d2d9f0a9f",
  //   measurementId: "G-7XJYJ6WV6S"
  // };
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  // const newPostRef = firebase.database().ref();
  // const name = document.getElementById("name");
  // const message = document.getElementById("message");
  // const send = document.getElementById("send");
  // const board = document.getElementById("jsi-board");



  return (
    <>


      <AuthProvider>
        {/* <Navbar /> */}
        <div style={{ margin: '2em' }}>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>

      {/* <main>
        <div>
          <div>
            <p>ユーザ名</p>
            <textarea name="name" id="name" cols="10" rows="1"></textarea>
          </div>

          <div>
            <p>内容</p>
            <textarea name="message" id="message" cols="30" rows="4"></textarea>
          </div>
          <button name="send" id="send">send message!</button>
          <ul id="jsi-board" style="list-style:none;">
            <li>〜チャット内容〜</li>
          </ul>
          <input type="text">
            <input type="submit">
        </div>


        
      </main> */}
    </>
  )
}

export default App
