import React from 'react'
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

import ShopPage from './ShopPage';

// https://reffect.co.jp/react/react-router-6#i-3
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
        <ul>
          <li>
            <Link to="/shop">Shop Page</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>ログアウト</button>


        {/* // firebaseのリアルタイムデータベースを使ってチャットアプリを作成する */}
      </div>      
    );
  }
};

export default Home;