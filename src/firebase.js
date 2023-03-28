import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAyZFV0Scb7eLIVsI6h0VyHsPoreDZIGm8",
  authDomain: "netflixclone-app-b1611.firebaseapp.com",
  projectId: "netflixclone-app-b1611",
  storageBucket: "netflixclone-app-b1611.appspot.com",
  messagingSenderId: "19905285589",
  appId: "1:19905285589:web:db593f643856aa3fca415c"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);