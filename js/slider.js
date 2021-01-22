$('.main-slider').owlCarousel({
    loop: true,
    fade: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    smartSpeed: 500,
    autoHeight: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
});
$('.about-index').owlCarousel({
    loop: true,
    fade: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    smartSpeed: 500,
    autoHeight: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
});
$('.owl-rooms_index').owlCarousel({
    loop: true,
    fade: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    smartSpeed: 500,
    autoHeight: true,
    margin: 30,
    items: 1,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
});
$('.owl-service').owlCarousel({
    loop: true,
    fade: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    smartSpeed: 500,
    autoHeight: true,
    margin: 30,
    items: 1,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
});
$('.owl-detail-rooms').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    dots: false,
    margin: 10,
    callbacks: true,
    autoplay: true,
    nav: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>",
    ],
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});