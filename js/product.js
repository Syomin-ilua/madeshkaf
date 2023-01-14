// Слайдер для продукта

$('.slider__big_picture').slick({
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".slider__litle_picture"
});
$('.slider__litle_picture').slick({
    arrows: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".slider__big_picture"
});



// Модальные окна для "Заказа товара"

const btnProduct = document.querySelector('.btn__product');
const modalOrder = document.querySelector('.modal_order_wrap');
const inputName = document.querySelector('.order_input_name');
const inputTel = document.querySelector('.order_input_tel');
const modalSuccess = document.querySelector('.modal_success_wrap');
const overlay = document.querySelector('.overlay');
const btnOrderSubmit = document.querySelector('.btn_order_submit');
const btnModalSuccesClose = document.querySelector('.modal_success_close');


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

const succesTitle = document.querySelector('.order_success_title');

btnProduct.addEventListener('click', function(e) {
    e.preventDefault();

    modalOrder.classList.add('active');
    overlay.classList.add('active');
    scrollController.disabledScroll();
});
overlay.addEventListener('click', function() {
    modalOrder.classList.remove('active');
    modalSuccess.classList.remove('active');
    overlay.classList.remove('active');
    scrollController.enabledScroll();
})

const form = document.forms['form_order'];
const formArr = Array.from(form);

let validFormArr = [];

const button = form.elements['button'];

formArr.forEach((el) => {
    if(el.hasAttribute('data-reg')) {
        el.setAttribute('is-valid', '0');
        validFormArr.push(el);
    }
});

form.addEventListener('input', inputHandler);
btnOrderSubmit.addEventListener('click', formCheck);

function inputHandler({target}) {
    if(target.hasAttribute('data-reg')) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute('data-reg');
    const reg = new RegExp(inputReg);
    if(reg.test(inputValue)) {
        el.setAttribute("is-valid", "1");
        el.style.border = "1px solid #0BE922"
        el.style.background = "#FBFBFB";
        el.style.color = "rgba(7, 7, 7, 0.39)";
    } else {
        el.setAttribute("is-valid", "0");
        el.style.border = '1px solid #F86464';
        el.style.background = '#FBE9E9';
        el.style.color = 'rgba(243, 59, 59, 0.39)';
    }
}

function formCheck(e) {
    e.preventDefault();

    const allValid = [];

    validFormArr.forEach((el) => {
        allValid.push(el.getAttribute('is-valid'));
    });

    const isAllValid = allValid.reduce((acc, current) => {
        return acc && current;
    });

    if(!Boolean(Number(isAllValid))) {
        alert('Заполните поля правильно');
        return;
    }
    formSubmit();
}

function formSubmit() {
    modalOrder.classList.remove('active');
    inputDefault();
    form.reset();

    modalSuccess.classList.add('active');
}

function inputDefault() {
    inputName.style.border = '';
    inputTel.style.border = '';
}

btnModalSuccesClose.addEventListener('click', function() {
    modalSuccess.classList.remove('active');
    overlay.classList.remove('active');
    scrollController.enabledScroll();
});