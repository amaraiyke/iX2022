// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

import { getAuth } from "firebase/auth";

//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwiEOYOwp5frXi04T5TtSqFU4suIXbb2o",
  authDomain: "ix-task-list-58ed9.firebaseapp.com",
  projectId: "ix-task-list-58ed9",
  storageBucket: "ix-task-list-58ed9.appspot.com",
  messagingSenderId: "878740573662",
  appId: "1:878740573662:web:69707ebc8c35369fffa14f",
  measurementId: "G-1FPP6N93VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth,
}