
$(document).ready(function () {
   // grecaptcha.reset();
    var ClientUrl = sitesetting.CLIENTURL;

    $("#ContactUs").setTemplateURL(sitesetting.templateUrl + 'Html/ContactUs/ContactUs.html');
    $("#ContactUs").setParam('webRoot', sitesetting.webRoot);
    $("#ContactUs").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#ContactUs").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#ContactUs").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#ContactUs").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#ContactUs").setParam('ClientUrl', ClientUrl);
    $("#ContactUs").setParam('PHONE1', sitesetting.PHONE1);
    $("#ContactUs").setParam('EMAILID', sitesetting.EMAILID);
    // recaptcha Google integration JS
    $.getScript('https://www.google.com/recaptcha/api.js', function () {


    });

    $("#ContactUs").processTemplate();
    $("body").addClass("ContactUsPage");
    $.getScript(sitesetting.templateUrl + 'Js/ContactUs/ContactUsAction.js', function () { });
    /*****************end pager code****************/
    $(".CloseBtn").click(function () {
        $("#ContactUsConfirmation").fadeOut("slow");
        $("#ContactUsConfirmation").css("display", "none");
    });

});