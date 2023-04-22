import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAcGs9SMSyXRyuRkoBF-qv5f7QSogVW-xk",
    authDomain: "cdnovillos.firebaseapp.com",
    projectId: "cdnovillos",
    storageBucket: "cdnovillos.appspot.com",
    messagingSenderId: "1002015712597",
    appId: "1:1002015712597:web:2001db7e371fd1c6227bdc"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const db = getFirestore(app)