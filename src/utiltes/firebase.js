// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCn1LkjBnVVLNoNqqK0RAa-aR-BuOoLuM",
    authDomain: "vue-full-course-aef15.firebaseapp.com",
    projectId: "vue-full-course-aef15",
    storageBucket: "vue-full-course-aef15.appspot.com",
    messagingSenderId: "1091222786446",
    appId: "1:1091222786446:web:1d429d8ac2c068a1ed94df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase;