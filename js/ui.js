// js/ui.js
import { logoutUser } from './auth.js';

export function renderHeader(role) {
    const authBtn = document.getElementById('authBtn');
    if (!authBtn) return;

    // Удаляем старую ссылку на календарь, если есть
    const oldCalendarLink = document.querySelector('.calendar-link');
    if (oldCalendarLink) oldCalendarLink.remove();

    if (role) {
        // Пользователь авторизован – показываем аватар с буквой
        const roleMap = {
            'manager': { letter: 'М', className: 'role-manager' },
            'doctor': { letter: 'В', className: 'role-doctor' },
            'client': { letter: 'П', className: 'role-client' }
        };
        const info = roleMap[role];
        if (info) {
            authBtn.innerHTML = `<span class="avatar ${info.className}">${info.letter}</span>`;
            authBtn.href = '#';
            authBtn.onclick = async (e) => {
                e.preventDefault();
                await logoutUser();
                window.location.href = 'index.html';
            };
            // Убираем лишние стили, если были
            authBtn.style.padding = '0';
        }

        // Добавляем ссылку на календарь в навигацию
        const navList = document.querySelector('.nav-list');
        if (navList) {
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
            }
            if (calendarHref) {
                const li = document.createElement('li');
                li.className = 'calendar-link';
                const a = document.createElement('a');
                a.href = calendarHref;
                a.textContent = calendarText;
                li.appendChild(a);
                navList.appendChild(li);
            }
        }
    } else {
        // Гость – кнопка "Войти"
        authBtn.innerHTML = 'Войти';
        authBtn.href = 'login.html';
        authBtn.onclick = null;
        authBtn.style.padding = '8px 16px'; // возвращаем стандартный стиль
    }
}
