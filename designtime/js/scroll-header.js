// window.onload = function() {
//     let widthWindow = document.documentElement.clientWidth;
//     if (widthWindow <= 767) {
//         $('.nav--logo').hide();
//     }
// };


$(window).scroll(function () {
    if ($(document).scrollTop() > 90) {
        $(".nav--logo2").show();
        $(".nav--logo").hide();
    } else {
        $(".nav--logo").show();
        $(".nav--logo2").hide();
    }
});



//
// $(window).scroll( function () {
//     let widthWindow = document.documentElement.clientWidth;
//     if (widthWindow <= 767) {
//         $('.nav--logo').hide();
//     }
//
// });