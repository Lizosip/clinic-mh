// js/manager.js
import { auth, db } from './firebase-init.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Импортируем EmailJS (если он уже подключён на странице, можно использовать глобальный объект emailjs)
// Если нет – подключаем динамически.
export async function sendManagerPassword() {
    const managerEmail = prompt('Введите email менеджера для отправки нового пароля:');
    if (!managerEmail) return { success: false, message: 'Отменено' };

    // Генерируем новый пароль
    const newPassword = Math.random().toString(36).slice(-8);

    // Обновляем пароль в Firebase Authentication для пользователя с UID = XBYHJm55ftTef84vHa6WQxvuHV63
    // Для этого используем Admin SDK – но из клиента нельзя. Поэтому мы не можем обновить пароль напрямую.
    // Альтернатива: отправить ссылку на сброс пароля через Firebase (sendPasswordResetEmail).
    // Это безопасно и автоматически отправляет письмо на почту менеджера.
    try {
        // Отправляем письмо для сброса пароля (менеджер сам установит новый пароль)
        await sendPasswordResetEmail(auth, managerEmail);
        alert(`Ссылка для сброса пароля отправлена на ${managerEmail}. Менеджер сможет установить новый пароль.`);
        return { success: true, message: 'Ссылка для сброса пароля отправлена.' };
    } catch (error) {
        alert('Ошибка при отправке письма: ' + error.message);
        return { success: false, message: error.message };
    }
}
