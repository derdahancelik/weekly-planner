import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCnFNF2__XiP5Fa03Z7ymr3bYiP4W4eeVc",
  authDomain: "todo-74200.firebaseapp.com",
  databaseURL: "https://todo-74200-default-rtdb.firebaseio.com",
  projectId: "todo-74200",
  storageBucket: "todo-74200.appspot.com",
  messagingSenderId: "294936516712",
  appId: "1:294936516712:web:4519e4ee7dc04b4843c3dd"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { firebaseApp };
