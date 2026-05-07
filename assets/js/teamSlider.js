
new Swiper(".teamSwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4
        }
    }
});
