import Swiper from "swiper";

(() => {

    const certificatesSwiper = new Swiper('.certificates__swiper', {
        slidesPerView: 1.6,
        spaceBetween: 20,

        freeMode: {
            enabled: true,
            sticky: false,
        },

        breakpoints: {
            1440: {
                slidesPerView: 5,
            },
            1100: {
                slidesPerView: 3.8,
            },
            768: {
                slidesPerView: 3.2,
            },
            640: {
                slidesPerView: 2.5,
            },
        },
    });

})();
