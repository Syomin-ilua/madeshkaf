const advantagesTitle = {
    installments: 'Возможность рассрочки от нашей компании с 0% переплат!',
    money: 'Для своего производства мы закупаем материалы оптом, с большими скидками. И всегда рады делиться этими скидками с Вами!',
    deadlines: 'Изготовим и установим шкаф за 5 рабочих дней.',
    bonuses: 'Для покупателей проводим сезонные распродажи, устраиваем выгодные акции, дарим подарки. Например сейчас можно заказать шкаф под ключ со скидкой до 40% И получить подарок!',
    europe: 'Вся мебель изготавливается на фабрике в Минске на немецком оборудовании из европейских материалов. Высокая точность и скорость. Все материалы только от поставщиков из Италии, Австрии, Германии, Бельгии.',
    visualy: 'Вы увидите будущую мебель перед оформлением заказа в специальной программе с максимальной точностью и сможете внести корректировы.'
};

const advantagesItem = document.querySelectorAll('.advantages_item');

const advantageSubtitle = document.querySelector('.advantages_subtitle');

advantagesItem.forEach(item => {
    item.addEventListener('click', function() {
        const getAdvantagesAttribute = item.getAttribute('data-advantages');
        for(key in advantagesTitle) {
            if(key == getAdvantagesAttribute) {
                advantageSubtitle.innerText = advantagesTitle[key];
            }
        }
    });
});

document.querySelector('.advantages_item').click();

