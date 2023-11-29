import './App.css'

// Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

// Auth
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home"
import Login from "./components/Login"
import NoMatch from './components/Nomatch';
import ShopPage from './components/ShopPage';


function App() {

  return (
    <>
      <AuthProvider>
        <div style={{ margin: '2em' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </AuthProvider>

    </>
  )
}

export default App
