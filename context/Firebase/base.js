// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmutoxvVaWwoCgfBgBTJcB85Z-LNcsE18",
    authDomain: "crawdfrontend.firebaseapp.com",
    projectId: "crawdfrontend",
    storageBucket: "crawdfrontend.appspot.com",
    messagingSenderId: "314331831528",
    appId: "1:314331831528:web:40a7023b8198644492bd5d",
    measurementId: "G-1NHRDTFV9D"
  };

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new TwitterAuthProvider()

export {auth, provider}