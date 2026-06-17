
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_K95yFhHJaku4AUl5ntF-qEN9owOtrhs",
    authDomain: "clinicmh-3012c.firebaseapp.com",
    projectId: "clinicmh-3012c",
    storageBucket: "clinicmh-3012c.firebasestorage.app",
    messagingSenderId: "801576443044",
    appId: "1:801576443044:web:1d97bc437a4a5931589a31"
  };

  // Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
