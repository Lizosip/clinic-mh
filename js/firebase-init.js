// js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_K95yFhHJaku4AUl5ntF-qEN9owOtrhs",
  authDomain: "clinicmh-3012c.firebaseapp.com",
  projectId: "clinicmh-3012c",
  storageBucket: "clinicmh-3012c.firebasestorage.app",
  messagingSenderId: "801576443044",
  appId: "1:801576443044:web:1d97bc437a4a5931589a31"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
