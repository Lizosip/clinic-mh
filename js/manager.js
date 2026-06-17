// js/manager.js
import { auth } from './firebase-init.js';
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

export async function sendManagerPassword() {
    const managerEmail = prompt('Введите email менеджера для отправки нового пароля:');
    if (!managerEmail) return { success: false, message: 'Отменено' };

    try {
        await sendPasswordResetEmail(auth, managerEmail);
        alert(`✅ Ссылка для сброса пароля отправлена на ${managerEmail}. Проверьте почту (и спам).`);
        return { success: true, message: 'Ссылка для сброса пароля отправлена.' };
    } catch (error) {
        alert(`❌ Ошибка: ${error.message}`);
        return { success: false, message: error.message };
    }
}
