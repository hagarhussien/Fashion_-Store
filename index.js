const swiper = new Swiper('.swiper', {



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },



    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 0
        },

        480: {
            slidesPerView: 3,
            spaceBetween: 0
        },

        640: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    },

    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabcursor: true,
    centereSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifer: 1,
        slideShadows: true,
    },
    loop: true,
})