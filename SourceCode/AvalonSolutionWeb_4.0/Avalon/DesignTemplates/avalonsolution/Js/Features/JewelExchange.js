
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#JewelExchange").setTemplateURL(sitesetting.templateUrl + 'Html/Features/JewelExchange.html');
    $("#JewelExchange").setParam('webRoot', sitesetting.webRoot);
    $("#JewelExchange").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#JewelExchange").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#JewelExchange").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#JewelExchange").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#JewelExchange").setParam('ClientUrl', ClientUrl);
    $("#JewelExchange").setParam('PHONE1', sitesetting.PHONE1);
    $("#JewelExchange").setParam('EMAILID', sitesetting.EMAILID);

    $("#JewelExchange").processTemplate();

    // recaptcha Google integration JS
    $.getScript('https://www.google.com/recaptcha/api.js', function () {
    });

    $.getScript(sitesetting.templateUrl + 'Js/Features/RetailerInviAction.js', function () { });

    $('#Form_Div').hide();


    /*****************end pager code****************/

    $('.JEForm').click(function () {
        //alert('11');
        $('#Ret_div').hide();
        $('#Form_Div').show();
        $('input[type="text"],input[type="tel"], input[type="email"], textarea, select').val('');
        $("#ddlRetailStates").val('Select');
        $("#ddlSupplierStates").val('Select');
        $("#SupplierContPerTitle").val('Select');
        $("#SupplierContPos").val('Select');
        grecaptcha.reset();
        $('#invitationdiv').css({ display: "block" });
        $('#confirmdiv').css({ display: "none" });
        //$("#invitation").get[0].reset();
    });

    $('.BackSupp').click(function () {
        //alert('22');
        $('#Ret_div').show();
        $('#Form_Div').hide();
        $('#invitationdiv').css({ display: "block" });
        $('#confirmdiv').css({ display: "none" });

    });


    $('.SUPForm').click(function () {
        // alert('33');
        $('#Sup_div').hide();
        $('#Supp_Form_Div').show();

    });

    $('.BackSuppForm').click(function () {
        //alert('22');
        $('#Sup_div').show();
        $('#Supp_Form_Div').hide();

    });
    $('.Ret').click(function () {
        //  alert('33');
        $('#Form_Div').hide();
        $('#Ret_div').show();

        // Join Button
        $('#InviteSupp').show();
        $('#InviteSuppJE').hide();

    });
    $('.Sup').click(function () {
        // alert('44');
        $('#Supp_Form_Div').hide();
        $('#Sup_div').show();
        // Join Button
        $('#InviteSuppJE').show();
        $('#InviteSupp').hide();

    });

    $(function () {
        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');

        $('.nav-tabs a').click(function (e) {
            $(this).tab('show');
            var scrollmem = $('body').scrollTop(0) || $('html').scrollTop(0);
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    });



    setTimeout(function () {
        if (window.location.hash == "#suppliers") {
            // alert('D1');
            $('#Sup_div').hide();
            // Join Button
            $('#InviteSuppJE').show();
            $('#InviteSupp').hide();

        } else if (window.location.hash == "#retailers") {
            //  alert('D2');
            $('#Ret_div').hide();
            $('#Form_Div').show();
            // Join Button
            $('#InviteSuppJE').hide();
            $('#InviteSupp').show();



        }
        else if (window.location.hash == "#RetailerInfo") {
            // alert('somendra');
            //  alert('D2');
            $('#Ret_div').show();
            $('#Form_Div').hide();
        }
        else if (window.location.hash == "#SupplierInfo") {
            // alert('somendra');
            //  alert('D2');
            $('#Sup_div').show();
            $('#Supp_Form_Div').hide();


            $('#suppliers').addClass('active in');
            $('#retailers').removeClass('active in');

            $('.Ret').removeClass('active');
            $('.Sup').addClass('active');

            // Join Button
            $('#InviteSuppJE').show();
            $('#InviteSupp').hide();

        }






    }, 3000);



    //$('.InviteSuppClose').click(function () {
    //    $('.joinBtn').fadeOut();

    //});
    $('.InviteSuppClose .fa-backward').click(function () {
        //alert('hi');
        $('.fa-backward').hide();
        setTimeout(function () {
            $('.fa-forward').show();
        }, 200);
        $('.joinBtn').hide();
        // $('.joinBann').css('right', '0');
        $(".joinBann").animate({ "right": "0px" }, "slow");

    });
    $('.InviteSuppClose .fa-forward, .joinBann ').click(function () {
        // alert('hi');
        setTimeout(function () {
            $('.fa-backward').show();
        }, 200);
        $('.fa-forward').hide();
        $(".joinBann").animate({ "right": "-271px" }, "fast");

        setTimeout(function () {
            $('.joinBtn').fadeIn('fast');
        }, 200);
    });


















});




//$(window).load('hashchange', function () {
//    if (window.location.hash == "#suppliers") {
//        // alert('D1');
//        $('#Sup_div').hide();

//    } else if (window.location.hash == "#retailers") {
//        //  alert('D2');
//        $('#Ret_div').hide();
//        $('#Form_Div').show();
//    }
//});





