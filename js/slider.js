// Настройки для слайдера материалов

const tabsBtn = document.querySelectorAll('.materials__button');
const tabsItems = document.querySelectorAll('.slider__wraper');

tabsBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        
        let currentBtn = btn;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        
        if(!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item){
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

document.querySelector('.materials__button').click();


$('.slider__wrapper_one').slick({
    infinite: true,
    arrows: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.slider__wrapper_two').slick({
    infinite: true,
    arrows: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// Настройки для слайдера отзывов
$('.reviews__wrapper').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="reviews__arrow_prev"></div>',
    nextArrow: '<div class="reviews__arrow_next"></div>',
    responsive: [
        {
            breakpoint: 500,
            settings: {
                arrows: false
            }
        }
    ]
})