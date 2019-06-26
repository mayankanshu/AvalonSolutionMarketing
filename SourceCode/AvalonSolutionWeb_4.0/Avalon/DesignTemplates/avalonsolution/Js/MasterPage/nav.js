$(document).ready(function () {
    "use strict";


    var Webnavurl = window.location.href;


    var ClientUrl = sitesetting.CLIENTURL;
    //alert('1');
    if (ClientUrl) {
        $("#MobileMenu").setTemplateURL(sitesetting.templateUrl + 'html/MasterPage/navMainMobile.html');
        $("#MobileMenu").setParam('HomePageURL', sitesetting.webRoot + '/index');
        //$("#MobileMenu").setParam('HomePageURL', sitesetting.webRoot)
        // alert('aa');
        $("#MobileMenu").processTemplate();
        //alert('hhh');

    }
    else
    {
        $("#MobileMenu").setTemplateURL(sitesetting.templateUrl + 'html/MasterPage/navMainMobile.html');
        $("#MobileMenu").setParam('HomePageURL', sitesetting.webRoot + '/index');
        //$("#MobileMenu").setParam('HomePageURL', sitesetting.webRoot);
        // alert('aa');
        $("#MobileMenu").processTemplate();
    
    }

    $.getScript(sitesetting.webRoot + '/Scripts/Navigation_sliding/jquery-sliding-menu.js', function () {
        $('#menu').menu();
    });
    $.getScript(sitesetting.webRoot + '/Scripts/Navigation_sliding/mobile-nav.js', function () { });
    $.getScript(sitesetting.webRoot + '/Scripts/Navigation_sliding/vendor/modernizr.custom.71422.js', function () {
        //$('#menu').menu();
    });
        
    









    //B2C Website Menues
    var NavDataB2C = [
                      { id: 1, MenuName: "Features", href: "" + sitesetting.webRoot + "/Features"}
                    
    ];


    
    //Set data for Menues HTML
    $("#navigation").setTemplateURL(sitesetting.AvalonDataDesinTemplatesPath + 'html/MasterPage/NavMain.html');

    //Parameters
    $("#navigation").setParam("AvalonMasterPagePath", sitesetting.AvalonMasterPagePath);
    $("#navigation").setParam('webRoot', sitesetting.webRoot);
    $("#navigation").setParam('Webnavurl', Webnavurl);
    $("#navigation").setParam('ClientUrl', ClientUrl);
    $("#navigation").setParam('toProperCase', sitesetting.toProperCase);
    $("#navigation").setParam('templateUrl', sitesetting.templateUrl);
    //$("#navigation").setParam('templateUrl', sitesetting.templateUrl);
    $("#navigation").setParam('isShowShopping', sitesetting.isShowShopping);

    
    //Ckeck Client URL for B2C and B2CC case
    if (ClientUrl) {
        //Mobile Device Page URLs
        $("#navigation").setParam('MobileSearchPageURL', sitesetting.webRoot + '/SearchResults/' + ClientUrl);
        $("#navigation").setParam('MobileLocationPageURL', sitesetting.webRoot + '/Location/' + ClientUrl);
        $("#navigation").setParam('MobileWishListPageURL', sitesetting.webRoot + '/ShowWishList/' + ClientUrl);
        $("#navigation").setParam('MobileContactUsPageURL', sitesetting.webRoot + '/ContactUs/' + ClientUrl);
        $("#navigation").setParam('MobileShoppingBagPageURL', sitesetting.webRoot + '/ShowShoppingBag/' + ClientUrl);


        $("#navigation").setParam('HomePageURL', sitesetting.webRoot + '/index/' + ClientUrl);
        $("#navigation").processTemplate(NavDataB2CC);
        $(".search-flip").click(function () {
            //  alert('1');
            $(".searchbox-panel").slideToggle("2000");
        });
    }
    else {

        //Mobile Device Page URLs
        $("#navigation").setParam('MobileSearchPageURL', sitesetting.webRoot + '/SearchResults');
        $("#navigation").setParam('MobileLoginPageURL', sitesetting.webRoot + '/Login');
        $("#navigation").setParam('MobileWishListPageURL', sitesetting.webRoot + '/ShowWishList');
        $("#navigation").setParam('MobileContactUsPageURL', sitesetting.webRoot + '/ContactUs');
        $("#navigation").setParam('MobileShoppingBagPageURL', sitesetting.webRoot + '/ShowShoppingBag');


        $("#navigation").setParam('HomePageURL', sitesetting.webRoot + '/Index');
        $("#navigation").processTemplate(NavDataB2C);

        $(".search-flip").click(function () {
            //  alert('1');
            $(".searchbox-panel").slideToggle("2000");
        });
       
    }
    $('.enterpress').bind('keypress', function (e) {
        if (e.keyCode == 13) { $("#btnSearch").click(); e.preventDefault(); }
    });

    $('.enterpress1').bind('keypress', function (e) {
        if (e.keyCode == 13) { $("#btnSearchM").click(); e.preventDefault(); }
    });
    $("#btnSearchM").click(function () {
        var searchKeyWords = $("#txtSearchM").val();
        // alert(searchKeyWords);
        if (searchKeyWords != "Search Products") {
            if (ClientUrl != null) {
                //
                window.location = sitesetting.webRoot + "/SearchResults?keyWords=" + escape(searchKeyWords) + "" + "/" + ClientUrl;
                document.forms[0].action = sitesetting.webRoot + "/SearchResults?keyWords=" + escape(searchKeyWords) + "" + "/" + ClientUrl;
              
            }
            else {
                window.location = sitesetting.webRoot + "/SearchResults?keyWords=" + escape(searchKeyWords) + "";
                document.forms[0].action = sitesetting.webRoot + "/SearchResults?keyWords=" + escape(searchKeyWords) + "";
            }
        }
        else {
            if (ClientUrl != null) {
                //alert('hi');
                window.location = sitesetting.webRoot + "/SearchResults" + "/" + ClientUrl;
                document.forms[0].action = sitesetting.webRoot + "/SearchResults" + "/" + ClientUrl;
              
            }
            else {
                window.location = sitesetting.webRoot + "/SearchResults";
                document.forms[0].action = sitesetting.webRoot + "/SearchResults";

            }
        }





    });
    $('#txtSearchM').keydown(function (e) {
        if ($("#txtSearchM").val() != "") {
            if (e.keyCode == 13) {
                e.preventDefault();
                var searchKeyWords = $("#txtSearchM").val();
                if (searchKeyWords != "Search") {
                    if (ClientUrl != null) {
                        window.location = sitesetting.webRoot + "/SearchResults?keyWords=" + escape(searchKeyWords) + "" + "/" + ClientUrl;
                        document.forms[0].action = sitesetting.webRoot + "/SearchResults?keyWords=" + escape(searchKeyWords) + "" + "/" + ClientUrl;

                    }
                    else
                        window.location = sitesetting.webRoot + "/SearchResults?keyWords=" + escape(searchKeyWords) + "";
                    document.forms[0].action = sitesetting.webRoot + "/SearchResults?keyWords=" + escape(searchKeyWords) + "";
                }

                else {
                    if (ClientUrl != null) {
                        window.location = sitesetting.webRoot + "/SearchResults" + "/" + ClientUrl;
                        document.forms[0].action = sitesetting.webRoot + "/SearchResults" + "/" + ClientUrl;

                    }
                    else {
                        window.location = sitesetting.webRoot + "/SearchResults";
                        document.forms[0].action = sitesetting.webRoot + "/SearchResults";
                    }
                }
            }
        }
    

    });
        
    
        
  


    
    $("#abridalsets").click(function () {

      
        ("#abridalsets").addclass('mobile-sliding-main');
    });


    $(".main submain submain1 submain2 a").click(function (e) {

      
        ("#abridalsets").addclass('mobile-sliding-main');
    });

});

