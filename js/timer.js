// Таймер
let days = document.querySelector('.title_time_day');
let hours = document.querySelector('.title_time_watch');
let minutes = document.querySelector('.title_time_minutes');
let seconds = document.querySelector('.title_time_seconds');



// Расчёты
function updateCounter() {
    const currentYear = new Date().getFullYear();
    const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

    const currentTime = new Date();
    const diff = nextYear - currentTime;

    // Перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // Часы
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    // Минуты
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    // Секунды
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCounter();

setInterval(updateCounter, 1000);