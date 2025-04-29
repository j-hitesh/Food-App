// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi75m2DmOA7tUHQSwqv5RjSJ8EumlOOZs",
  authDomain: "foodcart-app-75f5f.firebaseapp.com",
  databaseURL: "https://foodcart-app-75f5f-default-rtdb.firebaseio.com",
  projectId: "foodcart-app-75f5f",
  storageBucket: "foodcart-app-75f5f.firebasestorage.app",
  messagingSenderId: "561890875836",
  appId: "1:561890875836:web:019ea2673b0a01a30073b9",
  measurementId: "G-YS431D7H0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
