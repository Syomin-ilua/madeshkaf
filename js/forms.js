// Блокировка скролла
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

// Форма "Получить скидку"
const formDiscount = document.querySelector('.form_discount');

const modalDiscount = document.querySelector('.modal_discount_wrap');
const overlay = document.querySelector('.overlay');

const modalDiscountCloseBtn = document.querySelector('.modal_discount_close');
const modalDiscountTestBtn = document.querySelector('.modal_discount_test_button');

const inputTelDiscount = document.querySelector('.input_tel_discount');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(inputTelDiscount);


formDiscount.addEventListener('submit', function(e) {
    e.preventDefault();

    if(inputTelDiscount !== '') {
        overlay.classList.add('active');
        modalDiscount.classList.add('active');   
        scrollController.disabledScroll();     
    }

});

modalDiscountCloseBtn.addEventListener('click', closeDiscountModal);

modalDiscountTestBtn.addEventListener('click', closeDiscountModal);

overlay.addEventListener('click', closeDiscountModal);

function closeDiscountModal() {
    overlay.classList.remove('active');
    modalDiscount.classList.remove('active');
    scrollController.enabledScroll();   
}

// Форма "Акции"

const modalStocks = document.querySelector('.modal_stocks_wrap');
const overlayStocks = document.querySelector('.overlay_stocks');
const modalStocksClose = document.querySelector('.modal_stocks_close');

const formStocks = document.querySelector('.form__stocks');

formStocks.addEventListener('submit', formStocksSubmit);

function formStocksSubmit(e) {
    e.preventDefault();

    const inputStocksEmail = document.querySelector('.input__stocks_email');
    const inputStocksValue = inputStocksEmail.value;
    const inputReg = inputStocksEmail.getAttribute('data-reg');
    const reg = new RegExp(inputReg);

    if(reg.test(inputStocksValue)) {
        inputStocksEmail.style.background = '#FFFFFF'
        inputStocksEmail.style.border = ''; 
        modalStocks.classList.add('active');
        overlayStocks.classList.add('active');
        scrollController.disabledScroll();
        formStocks.reset();
    } else {
        inputStocksEmail.style.background = '#FBE9E9';
        inputStocksEmail.style.border = '1px solid #F86464';
    }
}

modalStocksClose.addEventListener('click', modalStocksShut);
overlayStocks.addEventListener('click', modalStocksShut);

function modalStocksShut() {
    modalStocks.classList.remove('active');
    overlayStocks.classList.remove('active');
    scrollController.enabledScroll();
}

// Форма "Заказать консультацию"

const modalSuccess = document.querySelector('.modal_success_wrap');
const overlaySuccess = document.querySelector('.overlay_success');
const modalSuccessClose = document.querySelector('.modal_success_close');

const form = document.forms["contact__form"];
const btnContactForm = document.querySelector('.contact__form_btn'); 

const formArr = Array.from(form);
const validFormArr = [];

const button = form.elements["button"];

formArr.forEach((el) => {
    if(el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFormArr.push(el);
    }
});

form.addEventListener('input', inputHandler);
btnContactForm.addEventListener('click', formCheck);


function inputHandler({target}) {
    if(target.hasAttribute("data-reg")) {
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
        allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
        return acc && current;
    });
    if(!Boolean(Number(isAllValid))) {
        alert("Заполните поля правильно");
        return;
    }
    formSubmit();
}

function formSubmit() {
    modalSuccess.classList.add('active');
    overlaySuccess.classList.add('active');
    scrollController.disabledScroll();
    formReset();
}

function formReset() {
    form.reset();
    validFormArr.forEach((el) => {
        el.setAttribute("is-valid", 0);
        el.style.border = 'none';
    })
}

overlaySuccess.addEventListener('click', function() {
    modalSuccess.classList.remove('active');
    overlaySuccess.classList.remove('active');
    scrollController.enabledScroll();
});

modalSuccessClose.addEventListener('click', function() {
    modalSuccess.classList.remove('active');
    overlaySuccess.classList.remove('active');
    scrollController.enabledScroll();
});