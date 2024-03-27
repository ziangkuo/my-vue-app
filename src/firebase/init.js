
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyUl4ipl4t3BVL-nHLbdd8qSmfg2Pk9oM",
  authDomain: "vt24-project-group27.firebaseapp.com",
  projectId: "vt24-project-group27",
  storageBucket: "vt24-project-group27.appspot.com",
  messagingSenderId: "604935162341",
  appId: "1:604935162341:web:3737761c40ff0fe86ac70c",
  measurementId: "G-JCNQNJZ1DT"
};

// Initialize Firebase
const firebaseAPP = initializeApp(firebaseConfig);

export default firebaseAPP