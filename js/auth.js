import { auth, db } from './firebase-init.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Регистрация нового пользователя (клиент или врач)
export async function registerUser(email, password, role, fullName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Сохраняем дополнительные данные в Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: email,
      role: role,
      fullName: fullName || '',
      createdAt: new Date().toISOString()
    });
    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Вход существующего пользователя
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Выход
export async function logoutUser() {
  await signOut(auth);
}

// Получить данные пользователя из Firestore
export async function getUserData(uid) {
  const docSnap = await getDoc(doc(db, "users", uid));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

// Слежение за состоянием авторизации
export function onAuthStateChangedListener(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUserData(user.uid);
      callback(user, userData);
    } else {
      callback(null, null);
    }
  });
}
