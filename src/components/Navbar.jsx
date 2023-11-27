import React from 'react'
import { useState } from 'react';
import RegisterUser from './RegisterUser';

export default function Navbar() {
    const [auth, setAuth] = useState("guest");

    function changeAuth() {
        if (auth_display.textContent === 'guest') {
            setAuth('owner');
        } 
        if (auth_display.textContent === 'owner') {
            setAuth('guest');
        }
    }

  return (
      <nav>
            {/* shops */}
            {/* items */}
            {/* login */}
            {/* logout */}
            {/* register */}
            <RegisterUser />

            {/* cart */}
            {/* profile */}
            {/* <Auth /> */}
            


          <button id="owner" onClick={changeAuth}>Owner</button>
          <button id="guest" onClick={changeAuth}>Guest</button>
          Currently Logging in As：<p id="auth_display">{auth}</p>
      </nav>
  )
}
