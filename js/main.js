$(document).ready(function() {

    $(".fa-bars").click(function() {
        $(this).toggleClass("fa-xmark");
        $(".navbar").toggleClass("nav-toggle");
    });

    $(window).on("load scroll", function() {
        $(".fa-bars").removeClass("fa-xmark");
        $(".navbar").removeClass("nav-toggle");

        if ($(window).scrollTop() > 30) {
            $(".header").css({"background": "#6c5ce7", "box-shadow" : "0 0.2rem 0.5rem rgba(0, 0, 0, 0.4)"})
        } else {
            $(".header").css({"background": "none", "box-shadow": "none"});
        }
    });

    $(".accordion-header").click(function() {
        $(".accordion .accordion-body").slideUp("fast");
        $(this).next(".accordion-body").slideDown("fast");
        $(".accordion .accordion-header span").text("+");
        $(this).children("span").text("-")
    })
});