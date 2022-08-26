import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "process.env.APIKEY",
  authDomain: "process.env.AUTHDOMAIN",
  projectId: "process.env.PROJECTID",
  storageBucket: "process.env.STORAGEBUCKET",
  messagingSenderId: "process.env.MESSAGINGSENDERID",
  appId: "process.env.APPID"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;