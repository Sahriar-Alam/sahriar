(function ($) {
    "use strict";
    $(document).on('ready', function () {

        //Scroll-top-top-btn
        $(".scroll-top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 2000);
            //hide-btn-at-the-top
            var mybutton = document.getElementById("my-btn");
            window.onscroll = function () {
                scrollFunction()
            };

            function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }

            function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        });

        //counter-up
        $('.count').counterUp({
            delay: 8,
            time: 2000
        });

        //accordians
        $('#test1').matd_expandlist({
            "list": [{
                    "secondary_heading": "Q1. What is digital marketing? ",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "Would my company benefit from digital marketing?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What are the typical roles within a digital marketing agency?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What is SEO?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What are keywords?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "How often should I update my website?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "Do I need a Blog?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "How often should I post a blog or post on social media?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        }
                    ]

        });
        $('#test2').matd_expandlist({
            "list": [{
                    "secondary_heading": "Q1. What is digital marketing? ",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "Would my company benefit from digital marketing?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What are the typical roles within a digital marketing agency?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What is SEO?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What are keywords?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "How often should I update my website?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "Do I need a Blog?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "How often should I post a blog or post on social media?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        }
                    ]

        });
        $('#test3').matd_expandlist({
            "list": [{
                    "secondary_heading": "Q1. What is digital marketing? ",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "Would my company benefit from digital marketing?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What are the typical roles within a digital marketing agency?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What is SEO?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What are keywords?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "How often should I update my website?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "Do I need a Blog?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "How often should I post a blog or post on social media?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        }
                    ]

        });
        $('#test4').matd_expandlist({
            "list": [{
                    "secondary_heading": "Q1. What is digital marketing? ",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "Would my company benefit from digital marketing?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What are the typical roles within a digital marketing agency?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What is SEO?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "What are keywords?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "How often should I update my website?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "Do I need a Blog?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        },
                {
                    "secondary_heading": "How often should I post a blog or post on social media?",
                    "details": "Digital marketing is any kind of marketing that is geared towards smartphones, laptops, tablets and basically any other device that is capable of connecting to Wi-Fi. Traditional marketing will focus on radio, TV, print and film, whereas when it comes to digital marketing we want to be thinking about apps, websites, blogs, social media, email and online content."
                        }
                    ]

        });

        //sliders
        $('.testimonial-seven-slider').slick({
            dots: true,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><span class="mr-arrow-left-icon"></span></button>',
            nextArrow: '<button class="slick-next" type="button"><span class="mr-arrow-right-icon"></span></button>',
            infinite: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        $('.header-seven-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><span class="mr-arrow-left-icon"></span></button>',
            nextArrow: '<button class="slick-next" type="button"><span class="mr-arrow-right-icon"></span></button>',
            infinite: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
        $('.blog-three-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<div class="slick-arrows"><button class="slick-prev"  type="button"><i class="mr-arrow-left-icon"></i></button></div>',
            nextArrow: '<div class="slick-arrows"><button class="slick-next"  type="button"><i class="mr-arrow-right-icon"></i></button></div>',
            infinite: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('.home3-testimo-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<div class="slick-arrows"><button class="slick-prev"  type="button"><i class="mr-arrow-left-icon"></i></button></div>',
            nextArrow: '<div class="slick-arrows"><button class="slick-next"  type="button"><i class="mr-arrow-right-icon"></i></button></div>',
            infinite: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1030,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('.testimonial-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<div class="slick-arrows"><button class="slick-prev"  type="button"><i class="mr-arrow-left-icon"></i></button></div>',
            nextArrow: '<div class="slick-arrows"><button class="slick-next"  type="button"><i class="mr-arrow-right-icon"></i></button></div>',
            infinite: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('.service-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<div class="slick-arrows"><button class="slick-prev"  type="button"><i class="mr-arrow-left-icon"></i></button></div>',
            nextArrow: '<div class="slick-arrows"><button class="slick-next"  type="button"><i class="mr-arrow-right-icon"></i></button></div>',
            infinite: true,
            centerMode: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 4,
            centerPadding: '20%',
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '15%',
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '15%',
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0%',
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('.projects-slider').slick({
            dots: false,
            arrows: true,
            prevArrow: '<div class="slick-arrows"><button class="slick-prev"  type="button"><i class="mr-arrow-left-icon"></i></button></div>',
            nextArrow: '<div class="slick-arrows"><button class="slick-next"  type="button"><i class="mr-arrow-right-icon"></i></button></div>',
            infinite: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('.team-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><span class="mr-arrow-left-icon"></span></button>',
            nextArrow: '<button class="slick-next" type="button"><span class="mr-arrow-right-icon"></span></button>',
            infinite: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $('.sponsor-slider').slick({
            dots: false,
            arrows: false,
            prevArrow: '<button class="slick-prev"  type="button"><span class="mr-arrow-left-icon"></span></button>',
            nextArrow: '<button class="slick-next" type="button"><span class="mr-arrow-right-icon"></span></button>',
            infinite: true,
            autoplay: false,
            vertical: false,
            verticalSwiping: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        /*-- search-section-plugin --*/
        $(document).ready(function () {
            $('.menu-icon').click(function () {
                $('.search-section').hasClass('search-section');
                $('.search-section').addClass('menu-search-bar-collapse');
            });
            $('.search-out').click(function () {
                $('.search-section').hasClass('menu-search-bar-collapse');
                $('.search-section').removeClass('menu-search-bar-collapse');
            });
        });

        /*-- video-popup-plugins --*/
        $("#video").videoPopup({
            autoplay: 1,
            controlsColor: 'white',
            showVideoInformations: 0,
            width: 1000,
            customOptions: {
                rel: 0,
                end: 60
            }
        });
        $("#video-1,#video-2,#video-3,#video-4,#video-5,#video-6,#video-7,#video-8,#video-9,#video-10,#video-11,#video-12,#video-13,#video-14,#video-15,#video-16,#video-17,#video-18,#video-19,#video-20,#video-21,#video-22,#video-23,#video-24").videoPopup({
            autoplay: 1,
            controlsColor: 'white',
            showVideoInformations: 0,
            width: 1000,
            customOptions: {
                rel: 0,
                end: 60
            }
        });


        /*-- Mobile-Menu-Active --*/
        $('.menu-triger').on('click', function () {
            $(this).toggleClass('active');
        });

        $('.js-preloader').preloadinator({
            minTime: 500
        });

        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.menu-triger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });


        /*-- WoW-Animation-JS --*/
        new WOW().init();


        /*-- scroll-manubar --*/
        $(document).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('#container-header').addClass('change-color');
            } else {
                $('#container-header').removeClass('change-color');
            }
        });

        /*--countdown--*/
        const cd = new Date().getFullYear() + 1
        $('#countdown').countdown({
            year: cd
        });

    });

})(jQuery);
