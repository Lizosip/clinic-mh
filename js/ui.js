// js/ui.js
import { logoutUser } from './auth.js';

export function renderHeader(role) {
    const authBtn = document.getElementById('authBtn');
    if (!authBtn) return;

    // Удаляем старую ссылку на календарь (если она уже есть)
    const oldCalendarLink = document.querySelector('.calendar-link');
    if (oldCalendarLink) oldCalendarLink.remove();

    if (role) {
        // Пользователь авторизован – меняем кнопку на "Выйти"
        authBtn.textContent = 'Выйти';
        authBtn.href = '#';
        authBtn.onclick = async (e) => {
            e.preventDefault();
            await logoutUser();
            window.location.href = 'index.html';
        };

        // Добавляем ссылку на календарь в зависимости от роли
        const navList = document.querySelector('.nav-list');
        if (!navList) return;

        let calendarHref = '';
        let calendarText = '';
        if (role === 'client') {
            calendarHref = 'client-calendar.html';
            calendarText = 'Календарь';
        } else if (role === 'doctor') {
            calendarHref = 'doctor-calendar.html';
            calendarText = 'Календарь';
        } else if (role === 'manager') {
            calendarHref = 'manager-panel.html';
            calendarText = 'Панель управления';
        } else {
            return; // неизвестная роль – ничего не делаем
        }

        const li = document.createElement('li');
        li.className = 'calendar-link';
        const a = document.createElement('a');
        a.href = calendarHref;
        a.textContent = calendarText;
        li.appendChild(a);
        navList.appendChild(li);

    } else {
        // Гость – кнопка "Войти"
        authBtn.textContent = 'Войти';
        authBtn.href = 'login.html';
        authBtn.onclick = null; // убираем обработчик
    }
}
