document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        const navBrand = document.querySelector('.navbar-brand');
        const navLink = document.querySelectorAll('.nav-link');
        const toggle = document.querySelector('.icon-button-toggle');
        const heightTop = window.pageYOffset;

        if (heightTop >= 70) {
            nav.classList.add('bg-white');
            navBrand.classList.remove('text-white');
            navLink.forEach(el => {
                el.classList.remove('text-white');
            });
            toggle.classList.remove('text-white');
        } else {
            nav.classList.remove('bg-white');
            navBrand.classList.add('text-white');
            navLink.forEach(el => {
                el.classList.add('text-white');
            });
            toggle.classList.add('text-white');
        }

    });

    // carousel
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 300,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


});
