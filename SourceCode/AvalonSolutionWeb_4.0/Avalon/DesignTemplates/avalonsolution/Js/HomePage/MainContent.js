$(document).ready(function () {

    $(function () {
        //$.session.set("Showpopup", "No");
        //  $.cookie('Showpopup', 'No');
    });
    //"use strict";


    var ClientUrl = sitesetting.CLIENTURL;



    $("#mainContent").setTemplateURL(sitesetting.AvalonDataDesinTemplatesPath + 'html/HomePage/MainContent.html');
    $("#mainContent").setParam("AvalonMasterPagePath", sitesetting.AvalonMasterPagePath);
    $("#mainContent").setParam('AvalonDesignTemplagePath', sitesetting.AvalonDataDesinTemplatesPath);
    $("#mainContent").setParam('webRoot', sitesetting.webRoot);
    $("#mainContent").setParam('templateUrl', sitesetting.templateUrl);
    $("#mainContent").processTemplate();


    $("#HomeMiddleContainerTop").setTemplateURL(sitesetting.AvalonDataDesinTemplatesPath + 'html/HomePage/HomeMiddleContainerTop.html');
    $("#HomeMiddleContainerTop").setParam("AvalonMasterPagePath", sitesetting.AvalonMasterPagePath);
    $("#HomeMiddleContainerTop").setParam('AvalonDesignTemplagePath', sitesetting.AvalonDataDesinTemplatesPath);
    $("#HomeMiddleContainerTop").setParam('webRoot', sitesetting.webRoot);
    $("#HomeMiddleContainerTop").setParam('templateUrl', sitesetting.templateUrl);

    //Links
    $("#HomeMiddleContainerTop").processTemplate();

    $("#HomeMiddleContainerbottom").setTemplateURL(sitesetting.AvalonDataDesinTemplatesPath + 'html/HomePage/HomeMiddleContainerbottom.html');
    $("#HomeMiddleContainerbottom").setParam("AvalonMasterPagePath", sitesetting.AvalonMasterPagePath);
    $("#HomeMiddleContainerbottom").setParam('AvalonDesignTemplagePath', sitesetting.AvalonDataDesinTemplatesPath);
    $("#HomeMiddleContainerbottom").setParam('webRoot', sitesetting.webRoot);
    $("#HomeMiddleContainerbottom").setParam('templateUrl', sitesetting.templateUrl);

    //Ckeck Client URL for B2C and B2CC case
    $("#HomeMiddleContainerbottom").processTemplate();

    $.getScript(sitesetting.AvalonDataDesinTemplatesPath + 'js/HomePage/Slider.js', function () { });

  //  $.getScript(sitesetting.templateUrl + 'Js/HomePage/MainContentAction.js', function () { });

    $('.enterpress').bind('keypress', function (e) {
        if (e.keyCode == 13) { $("#btnTrackYourSGLCertificate").click(); e.preventDefault(); }
    });

    //Track Your Certificate
    $("#btnTrackYourSGLCertificate").click(function () {
        var isValid = true;
        var url = "http://www.swissgemlab.com/TrackCertificate/frmTrackCertificate.aspx?certificateNo=";
        var trackSGLCert = $("#txtTrackYourCertificate").val();

        if (trackSGLCert.toLowerCase() == 'Enter Your Certificate #'.toLowerCase()) {
            var win = window.open(url, '_blank');
            win.focus();
            return true;
        }
        if (isValid == true) {
            url = url + trackSGLCert;
            var win = window.open(url, '_blank');
            win.focus();
        }
        window.location.reload();
    });


    ////////////////////START FOOTER REQUEST CALL BACK FUNCTION//////////////////////

    $("#txtName").change(function () {
        var Name = $('#txtName').val();
        if ($.trim(Name) != '') {
            $("#txtName").removeClass('invalid');
        }
    });

    $("#txtName").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Name = $("#txtName").val();
            if ($.trim(Name) == '') {
                $("#txtName").addClass('invalid');
            }
            else {
                $("#txtName").removeClass('invalid');
            }
        }

    });


    $("#txtCompany").change(function () {
        var Company = $('#txtCompany').val();
        if ($.trim(Company) != '') {
            $("#txtCompany").removeClass('invalid');
        }
    });

    $("#txtCompany").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Company = $("#txtCompany").val();
            if ($.trim(Company) == '') {
                $("#txtCompany").addClass('invalid');
            }
            else {
                $("#txtCompany").removeClass('invalid');
            }
        }

    });

    $("#txtPhone").change(function () {
        var ContactNo = $('#txtPhone').val();
        if ($.trim(ContactNo) != '') {
            $("#txtPhone").removeClass('invalid');

        }
    });

    $("#txtPhone").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var ContactNo = $('#txtPhone').val();
            if ($.trim(ContactNo) == '') {
                $("#txtPhone").addClass('invalid');

            }
            else {
                $("#txtPhone").removeClass('invalid');
            }
        }

    });


    $("#txtEmailAddress").change(function () {
        var chkEmail = $("#txtEmailAddress").val();
        if ($.trim(chkEmail) != '') {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var emailaddressVal = $("#txtEmailAddress").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errEmailAddress").empty();
                $("#errEmailAddress").append("*Invalid Email");
                $("#txtEmailAddress").addClass('invalid');
                return false
            }
            else {
                $("#errEmailAddress").empty();
                $("#txtEmailAddress").removeClass('invalid');
            }
        }
        else {
            $("#errEmailAddress").empty();
            $("#txtEmailAddress").removeClass('invalid');

        }
        if ($.trim(chkEmail) == '') {
            $("#errEmailAddress").empty();
            $("#txtEmailAddress").addClass('invalid');
        }
    });

    $("#txtEmailAddress").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var chkEmail = $("#txtEmailAddress").val();
            if ($.trim(chkEmail) == '') {
                $("#txtEmailAddress").addClass('invalid');
            }
            else {
                $("#txtEmailAddress").removeClass('invalid');
            }
        }

    });


    //////////////////////End Change Event ///////////////////////////


    ///////////////////////////Submit event///////////////////////////////////




    $("#btnRequestCallBackFooter").click(function () {


        var isValid = true;


        var Name = $("#txtName").val();
        if ($.trim(Name) == '') {
            $("#txtName").addClass('invalid');
            isValid = false;
        }



        var Phone = $("#txtPhone").val();
        if ($.trim(Phone) == '') {
            $("#txtPhone").addClass('invalid');
            isValid = false;
        }


        var Email = $("#txtEmailAddress").val();
        if ($.trim(Email) == '') {
            $("#txtEmailAddress").addClass('invalid');
            isValid = false;
        }

        if ($.trim(Email) != '') {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var emailaddressVal = $("#txtEmailAddress").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errEmailAddress").empty();
                $("#errEmailAddress").append("*Invalid Email");
                isValid = false;
            }
        }


        var Company = $("#txtCompany").val();
        if ($.trim(Company) == '') {
            $("#txtCompany").addClass('invalid');
            isValid = false;
        }


        if (isValid == true) {

            var url = sitesetting.AvalonDataServicesPath + "HomePage/ServicePages/RequestCallBack.ashx?Name=" + Name + "&Company=" + Company + "&Phone=" + Phone + "&Email=" + Email;


            $.getJSON(url, function (json) {
                if (json == 'success') {
                    $("#DiscussSuccessDiv").css("display", "block");
                    $("#DiscussForm").css("display", "none");
                    Loader(false);
                }
            });


        }
        else {
            return isValid;
        }


    });

    function ShowCouponPopupClose() {
        $("#ShowCouponB2CC").modal("hide");
        Loader(false);
    }
    function Loader(isFade) {
        if (isFade) {

            $('#HomeMiddleContainerTop').fadeOut(1000);
            $('#progressBackgroundFilter').fadeIn();
            $('#loadingbox').fadeIn();
            $('#Loader').fadeIn();
        } else {

            $('#HomeMiddleContainerTop').fadeIn(1000);
            $('#progressBackgroundFilter').fadeOut();
            $('#loadingbox').fadeOut();
            $('#Loader').fadeOut();
        }
    }

    $("body").addClass("HomePage");

    // Home Page Portfollio Slider Pop Up Code
    jQuery.fn.center = function () {
        this.css("position", "absolute");
        this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
        this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
        return this;
    }

    /* Home page on load popup */

    // $(window).load(function () {
    // Run code
    $(function () {
        //$.session.set("Showpopup", "Yes");
        var myCookie = getCookie("Showpopup");
        if (myCookie == null) {

            $.cookie('Showpopup', 'Yes');
        }
    });

    // To Read
    $(function () {
        //alert($.session.get("Showpopup"));
        var myCookie = getCookie("Showpopup");

        if (myCookie != null) {
            var showpopup = $.cookie('Showpopup');
            //alert(showpopup);
            if (showpopup == 'Yes') {
                var id = '#dialog';

                //Get the screen height and width
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();

                //Set heigth and width to mask to fill up the whole screen
                $('#mask').css({ 'width': maskWidth, 'height': maskHeight });

                //transition effect
                $('#mask').fadeIn(500);
                $('#mask').fadeTo("slow", 0.9);

                //Get the window height and width
                var winH = $(window).height();
                var winW = $(window).width();

                //Set the popup window to center
                //$(id).css('top', winH / 2 - $(id).height() / 2);
                //$(id).css('left', winW / 2 - $(id).width() / 2);

                //transition effect
                $(id).fadeIn(2000);

                //if close button is clicked
                $('.window .close').click(function (e) {
                    //Cancel the link behavior
                    e.preventDefault();

                    $('#mask').hide();
                    $('.window').hide();
                });

                //if mask is clicked
                $('#mask').click(function () {
                    $(this).hide();
                    $('.window').hide();
                    $('#HomePopClose').hide();
                });

                $('#HomePopClose').click(function (e) {
                    $('.window').hide();
                    $('#mask').hide();
                    $.getScript(sitesetting.templateUrl + 'Js/HomePage/MainContentAction.js', function () { });
                });
                $('.close_btn').click(function (e) {
                     $('.window').hide();
                     $('#mask').hide();
                   
                });

                


                $.cookie('Showpopup', 'No');
                var date = new Date();
                var minutes = 60;
                date.setTime(date.getTime() + (minutes * 60 * 1000));
                $.cookie('Showpopup', 'No', { expires: date });
            }
        }
        else {
            // do cookie exists stuff
        }
        $('.close_btn').click(function (e) {

            $("#MakeanAppointment").css("display", "none");
           // $("#ContactUsConfirmation").css("display", "block");
        });
    
  

  


    });


    // });
});
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return unescape(dc.substring(begin + prefix.length, end));
}






