
import { db } from './firebase-init.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function submitRequest(formData, userId = null) {
  // formData = { fullname, email, age, message }
  const requestData = {
    clientName: formData.fullname,
    clientEmail: formData.email,
    clientAge: formData.age,
    message: formData.message,
    status: 'pending',          // ожидает подтверждения менеджера
    clientId: userId,           // null для гостя
    createdAt: new Date().toISOString()
  };
  try {
    const docRef = await addDoc(collection(db, "requests"), requestData);
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
