let darkMode = document.querySelector('.dark-mod__btn')

// проверка темной темы на уровне системных настроек

if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkMode.classList.add('dark-mod__btn-active');
    document.body.classList.add('dark')
}

// сохранения изменений теммы в браузере 

if(localStorage.getItem('darkMode') === 'dark') {
    darkMode.classList.add('dark-mod__btn-active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    darkMode.classList.remove('dark-mod__btn-active');
    document.body.classList.remove('dark');
}

// если меняются системные настройки, меняем тему 

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', event => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    if(newColorScheme === 'dark') {
        darkMode.classList.add('dark-mod__btn-active');
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'dark');
    } else {
        darkMode.classList.remove('dark-mod__btn-active');
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'light');
    }
})

// кнопка переключателя темы 

darkMode.onclick = function() {
    darkMode.classList.toggle('dark-mod__btn-active')
    let isDark = document.body.classList.toggle('dark')

    if(isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}