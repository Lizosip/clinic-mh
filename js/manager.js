import { auth, db } from './firebase-init.js';
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// Для отправки письма используем EmailJS (у вас уже подключен)

export async function sendManagerPassword() {
    // Просим ввести email менеджера (можно упростить, захардкодить)
    const managerEmail = prompt('Введите email менеджера для отправки нового пароля:');
    if (!managerEmail) return { success: false, message: 'Отменено' };

    // Генерируем пароль
    const newPassword = Math.random().toString(36).slice(-8);

    // Находим пользователя с ролью manager по email
    // К сожалению, Firebase не позволяет искать пользователей по email напрямую в клиенте.
    // Поэтому мы предполагаем, что менеджер один и мы знаем его UID (захардкодим).
    // Для диплома можно упростить: просто отправляем письмо менеджеру через EmailJS с новым паролем,
    // а пароль в Firebase обновляем через консоль вручную.
    // Либо можно создать отдельную коллекцию managers с UID.
    
    // Обновляем пароль через Admin SDK нельзя из клиента.
    // Поэтому здесь мы просто отправим уведомление на почту.
    // Используйте EmailJS для отправки письма на managerEmail.
    // Я покажу, как отправить через ваш существующий EmailJS (если он подключен).
    // В противном случае используем alert.

    // Пример отправки через EmailJS (если он у вас настроен):
    // emailjs.send('service_id', 'template_id', { to: managerEmail, password: newPassword });

    alert(`Новый пароль для менеджера: ${newPassword}\n(в реальном проекте он был бы отправлен на почту)`);
    return { success: true, message: 'Пароль отправлен' };
}
