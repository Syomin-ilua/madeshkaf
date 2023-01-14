const btnOpenFilter = document.querySelector('.filter__btn');
const btnCloseFiler = document.querySelector('.btn_close_filter');

const modalFilter = document.querySelector('.modal_filter_wrap');
const overlay = document.querySelector('.overlay');

const applyFilter = document.querySelector('.apply_filter_btn');
const cancelFilter = document.querySelector('.cancel_filter_btn');

// Блокировка скрола

const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            top: -${scrollController.scrollPosition}px;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    },
    enabledScroll() {
        document.body.style.cssText = '';
        window.scroll({top: scrollController.scrollPosition})
        document.documentElement.style.scrollBehavior = '';
    }
}

btnOpenFilter.addEventListener('click', function(e) {
    e.preventDefault();

    openFilter();
});

btnCloseFiler.addEventListener('click', function(e) {
    e.preventDefault();

    exitFilter();
});

applyFilter.addEventListener('click', function(e) {
    e.preventDefault();

    exitFilter();
});

cancelFilter.addEventListener('click', function(e) {
    e.preventDefault();
    
    exitFilter();
})

function openFilter() {
    overlay.classList.add('active');
    modalFilter.classList.add('active');
    scrollController.disabledScroll();
}

function exitFilter() {
    overlay.classList.remove('active');
    modalFilter.classList.remove('active');
    scrollController.enabledScroll();
}