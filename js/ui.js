import { logoutUser } from './auth.js';

// Эта функция вставляет в хедер ссылку на календарь и кнопку "Выйти"
export function renderHeader(role) {
  const header = document.querySelector('.header');
  if (!header) return;

  // Находим контейнер навигации
  const navList = header.querySelector('.nav-list');
  if (!navList) return;

  // Удаляем старую ссылку на календарь (если она уже добавлена)
  const oldCalendarLink = navList.querySelector('.calendar-link');
  if (oldCalendarLink) oldCalendarLink.remove();

  // Создаём новую ссылку в зависимости от роли
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
    // Для гостей ничего не добавляем
    // Убираем кнопку "Выйти", если она есть
    const logoutBtn = header.querySelector('.logout-btn');
    if (logoutBtn) logoutBtn.remove();
    return;
  }

  const li = document.createElement('li');
  li.className = 'calendar-link';
  const a = document.createElement('a');
  a.href = calendarHref;
  a.textContent = calendarText;
  li.appendChild(a);
  navList.appendChild(li);

  // Добавляем кнопку "Выйти" (если ещё нет)
  const container = header.querySelector('.container');
  let logoutBtn = header.querySelector('.logout-btn');
  if (!logoutBtn) {
    logoutBtn = document.createElement('a');
    logoutBtn.className = 'subscribe-btn logout-btn';
    logoutBtn.textContent = 'Выйти';
    logoutBtn.href = '#';
    logoutBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      await logoutUser();
      window.location.href = 'index.html';
    });
    container.appendChild(logoutBtn);
  }
}
