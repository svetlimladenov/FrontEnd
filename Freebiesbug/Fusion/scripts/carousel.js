$(document).ready(function () {
    $('.demo').slick({
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        pauseOnHover: true,
        rows: getCarouselBoxesCount(),
        respondTo: 'window',

    });
})

$(window).resize(function() {

});

function getCarouselBoxesCount() {
    if (window.innerWidth < 580) {
        return 1;
    } else if (window.innerWidth < 700) {
        return 2;
    } else {
        return 3; 
    }
}