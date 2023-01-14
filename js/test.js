const btnNext = document.querySelectorAll('.test__button_next');
const btnBack = document.querySelectorAll('.test__button_back');
const btnExit = document.querySelectorAll('.test__button_exit');

btnNext.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
    })
})

btnBack.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
    })
})

btnExit.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
    })
})