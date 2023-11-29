import { auth } from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from '../context/AuthContext';



const SignUp = () => {
    const { user } = useAuthContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        // createUserWithEmailAndPassword(auth, email.value, password.value);
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
        });
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(uid);
            // ...
        } else {
            // User is signed out
            // ...
            console.log("signed out");
        }
    });



    return (
        <div>
            <h1>ユーザ登録 {user.email}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input name="email" type="email" placeholder="email" />
                </div>
                <div>
                    <label>パスワード</label>
                    <input name="password" type="password" placeholder="password" />
                </div>
                <div>
                    <button>登録</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;