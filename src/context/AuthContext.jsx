import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';

// AuthContextという名前のコンテキストを作成する
// コンテキストとは、Reactのコンポーネント間でデータを共有するための仕組みです
const AuthContext = createContext();

// useAuthContextというカスタムフックを定義する
// このフックは、AuthContextの値を取得するためのものです
export function useAuthContext() {
    return useContext(AuthContext);
}

// AuthContextのプロバイダーとして機能し、子コンポーネントに認証情報を提供するためのものです
export function AuthProvider({ children }) {

    // userは、現在ログインしているユーザーの情報を保持するためのものです
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // valueという変数に、userを含むオブジェクトを代入する
    // valueは、AuthContextの値として渡すためのものです
    const value = {
        user,
        loading
    };

    // auth.onAuthStateChangedという関数を呼び出して、ユーザーの認証状態の変化を監視する
    // この関数は、ユーザーがログインしたりログアウトしたりするたびに呼び出されるコールバック関数を引数にとります
    // この関数は、監視を解除するための関数を返します
    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {

            // userがnullでなければ、ユーザーがログインしていることを示す
            // userがnullであれば、ユーザーがログアウトしていることを示す
            setUser(user);
            setLoading(false);
        });

        // useEffectの中で、返り値として関数を返すことで、コンポーネントのアンマウント時に実行する処理を指定することができる
        // ここでは、監視を解除するための関数を返している
        return () => {
            unsubscribed();
        };
    }, []);

    // AuthContext.Providerとは、AuthContextのプロバイダーとして機能するコンポーネントです
    // プロバイダーとは、コンテキストの値を提供するためのコンポーネントです
    // valueというプロパティに、valueという変数を渡すことで、AuthContextの値を設定する
    // childrenというプロパティに、childrenという引数を渡すことで、子コンポーネントをレンダリングする
    if(loading){
        return <p>loading...</p>;
    } else {
        return (
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>);
    }
    
}