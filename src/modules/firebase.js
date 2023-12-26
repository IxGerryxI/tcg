// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkh0L7wM4gHeKPUcJsVoEUA6LM15YmAMg",
    authDomain: "whales-in-space.firebaseapp.com",
    databaseURL: "https://whales-in-space-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "whales-in-space",
    storageBucket: "whales-in-space.appspot.com",
    messagingSenderId: "179235874964",
    appId: "1:179235874964:web:f8f60a1d6571b46be4ec81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }