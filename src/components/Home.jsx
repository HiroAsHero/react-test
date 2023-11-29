import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

// https://reffect.co.jp/react/react-firebase-auth/#home-%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AE%E4%BD%9C%E6%88%90

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  console.log(user);

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <h1>ホームページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;