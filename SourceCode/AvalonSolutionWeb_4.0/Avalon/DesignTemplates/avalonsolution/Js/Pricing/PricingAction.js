
$(document).ready(function () {

    jQuery(document).on('click', ".selectWebsitePlan", function () {
        var websitePlan = jQuery(this).find('input').val();
        var url = "/SignUp/SignUp?WebsitePlan=" + websitePlan
        var urlSignUp = url.replace("Pricing", "/");
        window.location.href = urlSignUp;
    });


});