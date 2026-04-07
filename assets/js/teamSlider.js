new Swiper(".teamSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 4
        }
    }
});





