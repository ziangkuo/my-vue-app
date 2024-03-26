// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };