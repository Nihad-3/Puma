import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW-JgWCCJHhdV51btGiy4U2clGpnotMVE",
  authDomain: "puma-e3996.firebaseapp.com",
  projectId: "puma-e3996",
  storageBucket: "puma-e3996.appspot.com",
  messagingSenderId: "579676585895",
  appId: "1:579676585895:web:55ab5b88061ce480ef8082",
  measurementId: "G-ZBHPPE4Q9F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const doSignInWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);
const doSignInWithGoogle = () => signInWithPopup(auth, googleProvider);

export { auth, doSignInWithEmailAndPassword, doSignInWithGoogle };




