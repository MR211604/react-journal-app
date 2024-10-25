import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxwMAQaZ13syc8XpDsEM0D_CrveUK7xXg",
  authDomain: "react-journal-app-8f0ed.firebaseapp.com",
  projectId: "react-journal-app-8f0ed",
  storageBucket: "react-journal-app-8f0ed.appspot.com",
  messagingSenderId: "872742176428",
  appId: "1:872742176428:web:704043b76a581590368109"
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp)