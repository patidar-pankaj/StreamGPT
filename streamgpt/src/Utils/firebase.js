// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm6qc-gIlKPCGWBcIYb2kGjih-yta6fI4",
  authDomain: "streamgpt-712fe.firebaseapp.com",
  projectId: "streamgpt-712fe",
  storageBucket: "streamgpt-712fe.firebasestorage.app",
  messagingSenderId: "79941893522",
  appId: "1:79941893522:web:68e20a9b9791545b0ad54b",
  measurementId: "G-ZG6271BPW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();