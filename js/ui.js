export function renderHeader(role) {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    // В зависимости от роли показываем/скрываем пункты меню
    let calendarLink = '';
    if (role === 'client') calendarLink = '<li><a href="client-calendar.html">Календарь</a></li>';
    else if (role === 'doctor') calendarLink = '<li><a href="doctor-calendar.html">Календарь</a></li>';
    else if (role === 'manager') calendarLink = '<li><a href="manager-panel.html">Панель управления</a></li>';

    // Вставляем в нужное место навигации
    const navList = header.querySelector('.nav-list');
    if (navList) {
        // Удаляем старую ссылку на календарь, если есть
        // ...
        navList.insertAdjacentHTML('beforeend', calendarLink);
    }
    // Добавляем кнопку "Выйти"
    const container = header.querySelector('.container');
    const logoutBtn = document.createElement('a');
    logoutBtn.href = '#';
    logoutBtn.className = 'subscribe-btn';
    logoutBtn.textContent = 'Выйти';
    logoutBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const { logoutUser } = await import('./auth.js');
        await logoutUser();
        window.location.href = 'index.html';
    });
    container.appendChild(logoutBtn);
}
