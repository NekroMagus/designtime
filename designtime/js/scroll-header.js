$(window).scroll(function () {
    if ($(document).scrollTop() > 90) {
        $(".nav--logo2").show();
        $(".nav--logo").hide();
    } else {
        $(".nav--logo").show();
        $(".nav--logo2").hide();
    }
});