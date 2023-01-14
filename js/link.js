const navigation = document.querySelector('.navigation_desktop');

navigation.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header_wrap_cap').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

const navigationMobile = document.querySelector('.link_burger');
const btnBurger = document.querySelector('.burger_menu');

navigationMobile.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        btnBurger.classList.remove('active');
        navigationMobile.classList.remove('active');
        document.body.style.position = '';
        document.body.style.top = '';
        
        let href = this.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector(".header_wrap_cap").offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});