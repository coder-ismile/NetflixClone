import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCrGrn282POWO7JY5adrHREzRp3Nh-vKBg",
  authDomain: "netflix-react-clone-74710.firebaseapp.com",
  projectId: "netflix-react-clone-74710",
  storageBucket: "netflix-react-clone-74710.appspot.com",
  messagingSenderId: "926427697122",
  appId: "1:926427697122:web:a02d1aef802779a019b3bb"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);