$('.slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        },
    ]

}

);
$('.menu_btn').on('click', function () {
    $('.header__menu').toggleClass('header__menu-active')
});