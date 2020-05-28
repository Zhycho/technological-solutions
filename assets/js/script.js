$(document).ready(function () {
    $('.js--main-slider').slick({
        prevArrow: $('.js--main-slider__arrow-prev'),
        nextArrow: $('.js--main-slider__arrow-next'),
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $('.js--main-news__slider').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".js--main-gallery_mobile").slick({
        slidesToShow: 3,
        dots: false,
        infinite: false,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('header_on-scroll');
        }
        else if ($(this).scrollTop() < 50) {
            $('header').removeClass('header_on-scroll');
        }
    });


    // Модалка на вакансиях и расчёте

    $('.js--calculation-link').click(function () {
        $('#services-modal').addClass("modal_show");
        $('.modal-close').click(function(){
            $('#services-modal').removeClass("modal_show");
        })
    })

    $('.js--vacancy-response').click(function () {
        $('#vacancy-modal').addClass("modal_show");
        $('.modal-close').click(function(){
            $('#vacancy-modal').removeClass("modal_show");
        })
    })


    // MMenu

    let $menu = $("#burger-menu").mmenu();
    let $icon = $(".js--menu-button");
    let API = $menu.data("mmenu");


    $icon.on("click", function () {

        API.open();

    });


    API.bind("opened", function () {

        setTimeout(function () {

            $icon.addClass("is-active");

        }, 10);

        $icon.on("click", function () {

            API.close();

        });

    });

    API.bind("closed", function () {

        setTimeout(function () {

            $icon.removeClass("is-active");

        }, 10);

        $icon.on("click", function () {

            API.open();

        });

    });
}); 
