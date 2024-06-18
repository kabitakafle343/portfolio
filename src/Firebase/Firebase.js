
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase } from "firebase/database";


function startFirebase(){
const firebaseConfig = {
  apiKey: "AIzaSyCTIFM6N6iItrmYV_stkhM5QtjOXu1rKHg",
  authDomain: "portfolio-eac4a.firebaseapp.com",
  databaseURL: "https://portfolio-eac4a-default-rtdb.firebaseio.com",
  projectId: "portfolio-eac4a",
  storageBucket: "portfolio-eac4a.appspot.com",
  messagingSenderId: "152649623906",
  appId: "1:152649623906:web:abae815548648f5405643b",
  measurementId: "G-ZJMSKEGYFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
return getDatabase(app)
}
export default startFirebase;