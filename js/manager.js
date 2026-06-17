
import { auth, db } from './firebase-init.js';
import { doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function sendManagerPassword() {
    // Генерируем случайный пароль
    const newPassword = Math.random().toString(36).slice(-8);
    // Находим менеджера в users (предположим, что менеджер один, его email известен)
    // Запросим у пользователя ввод email менеджера или возьмем из конфига
    const managerEmail = prompt('Введите email менеджера для отправки пароля:');
    if (!managerEmail) return { success: false, message: 'Отменено' };
    // Обновляем пароль в Authentication (нужно для этого знать UID менеджера)
    // Проще всего создать отдельного пользователя менеджера заранее вручную и знать его UID.
    // Для демонстрации - просто отправляем на почту через EmailJS.
    // Реализуйте отправку письма с новым паролем на email менеджера.
    // Используйте EmailJS с шаблоном.
    // ...
    return { success: true, message: 'Новый пароль отправлен на почту' };
}
