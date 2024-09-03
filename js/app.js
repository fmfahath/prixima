// Animate on Scroll----------------------------------------
AOS.init();


// portfolio - slider (swiper js)----------------------------
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },

    //responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2.5
        },
    }
});

//navbar togglee button show/hide-----------------------------
const navItems = document.querySelector(".navbar-nav")
const contactBtn = document.querySelector(".nav-brand-btn")
const navbarToggler = document.querySelector(".navbar-toggler")
const navbarCollapse = document.querySelector(".navbar-collapse")

navItems.addEventListener('click', () => {
    navbarToggler.classList.add("collapsed")
    navbarCollapse.classList.remove("show")
})

contactBtn.addEventListener('click', () => {
    navbarToggler.classList.add("collapsed")
    navbarCollapse.classList.remove("show")
})
