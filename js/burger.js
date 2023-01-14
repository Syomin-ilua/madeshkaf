// Бургер меню
const burgerBtn = document.querySelector('.burger_menu');
const burgerMenu = document.querySelector('.link_burger');

burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();

    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    if(burgerMenu.classList.contains('active')) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = '100%';
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
    }
})