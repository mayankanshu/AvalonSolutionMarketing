// JavaScript Document
$(document).ready(function () {
   
   
    var currentTime = new Date();
    $("#ShowMakeAppointment").setTemplateURL(sitesetting.AvalonDataDesinTemplatesPath + 'html/HomePage/homepagemakeappointment.html');
    $("#ShowMakeAppointment").setParam("AvalonMasterPagePath", sitesetting.AvalonMasterPagePath);
    $("#ShowMakeAppointment").setParam('AvalonDesignTemplagePath', sitesetting.AvalonDataDesinTemplatesPath);
    $("#ShowMakeAppointment").setParam('webRoot', sitesetting.webRoot);
    $("#ShowMakeAppointment").setParam('templateUrl', sitesetting.templateUrl);
    $("#ShowMakeAppointment").processTemplate();

    //  {#if $P.WebURL==$P.Sigin} 

    $("#containerHeader").setTemplateURL(sitesetting.AvalonDataDesinTemplatesPath + 'Html/MasterPage/Header.html');
    $("#containerHeader").setParam("AvalonMasterPagePath", sitesetting.AvalonMasterPagePath);
    $("#containerHeader").setParam('AvalonDesignTemplagePath', sitesetting.AvalonDataDesinTemplatesPath);
    $("#containerHeader").setParam('WebRoot', sitesetting.webRoot);
    $("#containerHeader").setParam('ShoppingItemCount', sitesetting.shoppingItemCount);
    $("#containerHeader").setParam('templateUrl', sitesetting.templateUrl);
    $("#containerHeader").setParam('SHOPPING_CART_TAKEN', sitesetting.isShowShopping);
    $("#containerHeader").setParam('COMPANY_PHONE1', sitesetting.PHONE1);
    $("#containerHeader").setParam('$COMPANY_ADDRESS1$', sitesetting.ADDRESS1);
    $("#containerHeader").setParam("AvalonMasterPagePath", sitesetting.AvalonMasterPagePath);
    $("#containerHeader").setParam("Request_IsAuthenticated", sitesetting.Request_IsAuthenticated);

    $("#containerHeader").setParam('HomePageURL', sitesetting.webRoot);
    $("#containerHeader").setParam('SignUpUrl', sitesetting.webRoot + '/SignUp/SignUp');
    $("#containerHeader").setParam('FeaturesUrl', sitesetting.webRoot + '/Features/Features');
    $("#containerHeader").setParam('ProductManagementUrl', sitesetting.webRoot + '/Features/Product_Management');
    $("#containerHeader").setParam('ContentManagementUrl', sitesetting.webRoot + '/Features/Content_Management');
    $("#containerHeader").setParam('DiamondFeedUrl', sitesetting.webRoot + '/Features/Diamond_Feed');
    $("#containerHeader").setParam('BrandCustomization', sitesetting.webRoot + '/Features/Brand_Customization');
    $("#containerHeader").setParam('JewelExchangeUrl', sitesetting.webRoot + '/Features/JewelExchange');
    $("#containerHeader").setParam('MobileWebsiteUrl', sitesetting.webRoot + '/Features/Mobile_Website');
    $("#containerHeader").setParam('ShoppingCartUrl', sitesetting.webRoot + '/Features/Shopping_Cart');
    $("#containerHeader").setParam('Edge_POS', sitesetting.webRoot + '/Features/Edge_POS');
    $("#containerHeader").setParam('ADA_Initiative', sitesetting.webRoot + '/Features/ADA_Initiative');

    //$("#containerHeader").setParam('HomePageURL', sitesetting.webRoot);
    $("#containerHeader").setParam('ServicesUrl', sitesetting.webRoot + '/Services/Services');
    $("#containerHeader").setParam('MarketingSEO', sitesetting.webRoot + '/Services/Marketing_SEO');
    $("#containerHeader").setParam('SocialMedia', sitesetting.webRoot + '/Services/Social_Media');
    $("#containerHeader").setParam('EmailMarketing', sitesetting.webRoot + '/Services/Email_Marketing');
    $("#containerHeader").setParam('EmailTemplates', sitesetting.webRoot + '/Services/Email_Templates');
    $("#containerHeader").setParam('AddOnModules', sitesetting.webRoot + '/Services/Add-on_Modules');
    $("#containerHeader").setParam('DigitalECatalog', sitesetting.webRoot + '/Services/Digital_ECatalog');
    $("#containerHeader").setParam('WebHosting', sitesetting.webRoot + '/Services/Web_Hosting');
    $("#containerHeader").setParam('Domains', sitesetting.webRoot + '/Services/Domains');
    $("#containerHeader").setParam('SSL', sitesetting.webRoot + '/Services/SSL');
    $("#containerHeader").setParam('HTTPS', sitesetting.webRoot + '/Services/HTTPS');

    $("#containerHeader").setParam('PortfolioUrl', sitesetting.webRoot + '/Portfolio/Portfolio');
    $("#containerHeader").setParam('WebsiteDesigns', sitesetting.webRoot + '/Portfolio/Website_Designs');
    $("#containerHeader").setParam('ResponsiveDesigns', sitesetting.webRoot + '/Portfolio/Responsive_Designs');
    $("#containerHeader").setParam('Customization', sitesetting.webRoot + '/Portfolio/Customization');
    $("#containerHeader").setParam('RetailStorefronts', sitesetting.webRoot + '/Portfolio/Retail_Storefronts');
    $("#containerHeader").setParam('ProductPresentation1', sitesetting.webRoot + '/Portfolio/Product_Presentation');

    $("#containerHeader").setParam('PricingUrl', sitesetting.webRoot + '/Pricing/Pricing');

    $("#containerHeader").setParam('ClientsUrl', sitesetting.webRoot + '/Clients/Clients');
    $("#containerHeader").setParam('Benefits', sitesetting.webRoot + '/Clients/Benefits');
    $("#containerHeader").setParam('Customers', sitesetting.webRoot + '/Clients/Customers');
    $("#containerHeader").setParam('Testimonials', sitesetting.webRoot + '/Clients/Testimonials');
    $("#containerHeader").setParam('WhyOnline', sitesetting.webRoot + '/Clients/Why_Online');

    $("#containerHeader").setParam('CompanyUrl', sitesetting.webRoot + '/Company/Company');
    $("#containerHeader").setParam('AboutUs', sitesetting.webRoot + '/Company/About_Us');
    $("#containerHeader").setParam('News', sitesetting.webRoot + '/Company/News');
    $("#containerHeader").setParam('Partners', sitesetting.webRoot + '/Company/Partners');
    $("#containerHeader").setParam('ProductPresentation', sitesetting.webRoot + '/Company/Product_Presentation');
    $("#containerHeader").setParam('TradeShows', sitesetting.webRoot + '/Company/Trade_Shows');


    $("#containerHeader").setParam('SupportUrl', sitesetting.webRoot + '/Support/Support');
    $("#containerHeader").setParam('Downloads', sitesetting.webRoot + '/Support/Downloads');
    $("#containerHeader").setParam('KnowledgeBase', sitesetting.webRoot + '/Support/Knowledge_Base');
    $("#containerHeader").setParam('SubmitATicket', sitesetting.webRoot + '/Support/Submit_A_Ticket');
    $("#containerHeader").setParam('SupportRequest', sitesetting.webRoot + '/Support/Support_Request');
    
    $("#containerHeader").setParam('ContactUs', sitesetting.webRoot + '/ContactUs/ContactUs');





    $("#containerHeader").setParam('$COMPANY_NAME$', sitesetting.COMPANY_NAME);
    $("#containerHeader").setParam('$COMPANY_ADDRESS1$', sitesetting.ADDRESS1);
    $("#containerHeader").setParam('$ADDRESS_ADDRESS2$', sitesetting.ADDRESS2);
    $("#containerHeader").setParam('$COMPANY_CITY$', sitesetting.CITY);
    $("#containerHeader").setParam('$COMPANY_STATE$', sitesetting.STATE);
    $("#containerHeader").setParam('$COMPANY_ZIP$', sitesetting.ZIP);
    $("#containerHeader").setParam('$COMPANY_ZIP$', sitesetting.ZIP);
    $("#containerHeader").setParam('$COMPANY_PHONE1$', sitesetting.PHONE1);
    $("#containerHeader").setParam('$COMPANY_PHONE2$', sitesetting.PHONE2);
    $("#containerHeader").setParam('$COMPANY_PHONE3$', sitesetting.FACSIMILE);
    $("#containerHeader").setParam('$COMPANY_EMAIL1$', sitesetting.CONTACTUSEMAIL);
    $("#containerHeader").setParam('$COMPANY_EMAIL2$', sitesetting.CUSTOMERSERVICEEMAIL);
    $("#containerHeader").setParam('$COMPANY_STOREDAYS_1', sitesetting.STOREDAYS1);
    $("#containerHeader").setParam('$COMPANY_STOREDAYS_2', sitesetting.STOREDAYS2);
    $("#containerHeader").setParam('$COMPANY_STOREDAYS_3', sitesetting.STOREDAYS3);
    $("#containerHeader").setParam('$CURRENT_YEAR$', currentTime.getFullYear());







   
    $("#containerHeader").setParam('LOCATION_COUNT', sitesetting.STORE_ROWCOUNT);
    

    $("#containerHeader").setParam('WebURL', window.location.href);
    $("#containerHeader").setParam('Sigin', sitesetting.WebRoot + '/MyAccount');
    $("#containerHeader").setParam('Sigout', sitesetting.WebRoot + '/MyAccountLanding');
    $("#containerHeader").setParam('aboutUsURL', sitesetting.WebRoot + '/Article/AboutUs');
  //  $("#containerHeader").setParam('HomePageURL', sitesetting.WebRoot + '/Index');
    $("#containerHeader").setParam('contactus', sitesetting.WebRoot + '/Category/Article/Contact_Us');
   
    $("#containerHeader").setParam('CustomerService', sitesetting.WebRoot + '/Article/CustomerService');
    $("#containerHeader").setParam('mapusURL', sitesetting.WebRoot + '/Article/Location');
    $("#containerHeader").setParam('MyAccountLanding', sitesetting.WebRoot + '/MyAccountLanding');


   
    $("#containerHeader").setParam('aboutUsURL', sitesetting.WebRoot + '/Article/AboutUs');
  //  $("#containerHeader").setParam('HomePageURL', sitesetting.WebRoot + '/Index');
    $("#containerHeader").setParam('contactus', sitesetting.WebRoot + '/Category/Article/Contact_Us');
    $("#containerHeader").setParam('mapusURL', sitesetting.WebRoot + '/Article/Location');
    $("#containerHeader").setParam('MyAccount', sitesetting.WebRoot + '/MyAccount');
    $("#containerHeader").setParam('MyAccountLanding', sitesetting.WebRoot + '/MyAccountLanding');
    $("#containerHeader").setParam('WishList', sitesetting.WebRoot + '/Category/UserWishList');
    $("#containerHeader").setParam('ViewCart', sitesetting.WebRoot + '/ShoppingBag/ShoppingBag');
    $("#containerHeader").setParam('EmptyShopping', sitesetting.WebRoot + '/ShoppingBag/EmptyShoppingBag');
    $("#containerHeader").setParam('LiveHelp', sitesetting.WebRoot + '/Article/LiveHelp');
    $("#containerHeader").setParam('TrackMyOrder', sitesetting.WebRoot + '/SecureSSL/OrderTracking/FindOrder');
    $("#containerHeader").setParam('RecentlyViewed', sitesetting.WebRoot + '/Category/RecentlyViewed');
    $("#containerHeader").setParam('ShoppingItemCount', sitesetting.shoppingItemCount);
    $("#containerHeader").setParam('SHOPPING_CART_TAKEN', sitesetting.isShowShopping);

    $("#containerHeader").processTemplate();
 
    
   
    $("#containerFooter").setParam('PrivacyPolicy', sitesetting.webRoot + '/PrivacyPolicy/PrivacyPolicy');
    $("#containerFooter").setParam('TermsOfUse', sitesetting.webRoot + '/TermsOfUse/TermsOfUse');


    $("#containerFooter").setTemplateURL(sitesetting.AvalonDataDesinTemplatesPath + 'Html/MasterPage/Footer.html');
    $("#containerFooter").setParam("AvalonMasterPagePath", sitesetting.AvalonMasterPagePath);
    $("#containerFooter").setParam('AvalonDesignTemplagePath', sitesetting.AvalonDataDesinTemplatesPath);
    $("#containerFooter").setParam('WebRoot', sitesetting.webRoot);
    $("#containerFooter").setParam('SHOPPING_CART_TAKEN', sitesetting.isShowShopping);
    $("#containerFooter").setParam('templateUrl', sitesetting.templateUrl);
    $("#containerFooter").setParam('WebURL', window.location.href);

    //Company Info for Address
    $("#containerFooter").setParam('$COMPANY_NAME$', sitesetting.COMPANY_NAME);
    $("#containerFooter").setParam('$COMPANY_ADDRESS1$', sitesetting.ADDRESS1);
    $("#containerFooter").setParam('$ADDRESS_ADDRESS2$', sitesetting.ADDRESS2);
    $("#containerFooter").setParam('$COMPANY_CITY$', sitesetting.CITY);
    $("#containerFooter").setParam('$COMPANY_STATE$', sitesetting.STATE);
    $("#containerFooter").setParam('$COMPANY_ZIP$', sitesetting.ZIP);
    $("#containerFooter").setParam('$COMPANY_ZIP$', sitesetting.ZIP);
    $("#containerFooter").setParam('$COMPANY_PHONE1$', sitesetting.PHONE1);
    $("#containerFooter").setParam('$COMPANY_PHONE2$', sitesetting.PHONE2);
    $("#containerFooter").setParam('$COMPANY_PHONE3$', sitesetting.FACSIMILE);
    $("#containerFooter").setParam('$COMPANY_EMAIL1$', sitesetting.CONTACTUSEMAIL);
    $("#containerFooter").setParam('$COMPANY_EMAIL2$', sitesetting.CUSTOMERSERVICEEMAIL);
    $("#containerFooter").setParam('$COMPANY_STOREDAYS_1', sitesetting.STOREDAYS1);
    $("#containerFooter").setParam('$COMPANY_STOREDAYS_2', sitesetting.STOREDAYS2);
    $("#containerFooter").setParam('$COMPANY_STOREDAYS_3', sitesetting.STOREDAYS3);
    $("#containerFooter").setParam('$CURRENT_YEAR$', currentTime.getFullYear());
    $("#containerFooter").setParam('TrackMyOrder', sitesetting.WebRoot + '/SecureSSL/OrderTracking/FindOrder');
	$("#containerFooter").setParam('reCaptchaSiteKey', sitesetting.reCaptchaSiteKey);

    $("#containerFooter").processTemplate();
    
	
     
    $.getScript(sitesetting.templateUrl + 'js/MasterPage/nav.js', function () { });

    // recaptcha Google integration JS

    //$.getScript('https://www.google.com/recaptcha/api.js', function () { });

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
      

        ////Captcha Response
        //var response = grecaptcha.getResponse();

        ////Captcha Response verified
        //if (response.length == 0) {
        //    //reCaptcha not verified

        //    $("#spcaptcha").empty();
        //    $("#spcaptcha").append("*Captcha Required");
        //    isValid = false;

        //}
        //else {

        //    $("#spcaptcha").empty();

        //    //isValid = true;
        //}



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





    //////END FOOTER REQUEST CALL BACK FUNCTION//////////////////////

    //
    ///////START DEMO SCHEDULE FUNCTION/////////////////////////////
    $(document).ready(function () {
        $('#ScheduleADemo').on('hidden.bs.modal', function (e) {
            $(this)
              .find("input,textarea,select")
                 .val('')
                 .end()
              .find("input[type=checkbox], input[type=radio]")
                 .prop("checked", "")
                 .end()
            .find("input,textarea,select")
                 .removeClass('invalid')
                 .end()
            .find("span")
            .empty()
            .end();
           
        })

        $.datetimepicker.setLocale('en');
        $('#txtAppointmentDate').datetimepicker({
            lang: 'ch',
            timepicker: false,
            format: 'm/d/Y',
            minDate: new Date
        });
       
    });


    $("#txtFullNameDemo").change(function () {
       
        var FullName = $('#txtFullNameDemo').val();
        if ($.trim(FullName) != '') {
            $("#txtFullNameDemo").removeClass('invalid');
        }
    });

    $("#txtFullNameDemo").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var FullName = $("#txtFullNameDemo").val();
            if ($.trim(FullName) == '') {
                $("#txtFullNameDemo").addClass('invalid');
            }
            else {
                $("#txtFullNameDemo").removeClass('invalid');
            }
        }

    });


    $("#txtCompanyDemo").change(function () {
        var Company = $('#txtCompanyDemo').val();
        if ($.trim(Company) != '') {
            $("#txtCompanyDemo").removeClass('invalid');
        }
    });

    $("#txtCompanyDemo").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Company = $("#txtCompanyDemo").val();
            if ($.trim(Company) == '') {
                $("#txtCompanyDemo").addClass('invalid');
            }
            else {
                $("#txtCompanyDemo").removeClass('invalid');
            }
        }

    });

    $("#txtPhoneDemo").change(function () {
        var ContactNo = $('#txtPhoneDemo').val();
        if ($.trim(ContactNo) != '') {
            $("#txtPhoneDemo").removeClass('invalid');

        }
    });

    $("#txtPhoneDemo").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var ContactNo = $('#txtPhoneDemo').val();
            if ($.trim(ContactNo) == '') {
                $("#txtPhoneDemo").addClass('invalid');

            }
            else {
                $("#txtPhoneDemo").removeClass('invalid');
            }
        }

    });


    $("#txtEmailAddressDemo").change(function () {
        var chkEmail = $("#txtEmailAddressDemo").val();
        if ($.trim(chkEmail) != '') {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var emailaddressVal = $("#txtEmailAddressDemo").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errEmail").empty();
                $("#errEmail").append("*Invalid Email");
                $("#txtEmailAddressDemo").addClass('invalid');
                return false
            }
            else {
                $("#errEmail").empty();
                $("#txtEmailAddressDemo").removeClass('invalid');
            }
        }
        else {
            $("#errEmail").empty();
            $("#txtEmailAddressDemo").removeClass('invalid');

        }
        if ($.trim(chkEmail) == '') {
            $("#errEmail").empty();
            $("#txtEmailAddressDemo").addClass('invalid');
        }
    });


    $("#txtEmailAddressDemo").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var chkEmail = $("#txtEmailAddressDemo").val();
            if ($.trim(chkEmail) == '') {
                $("#txtEmailAddressDemo").addClass('invalid');
            }
            else {
                $("#txtEmailAddressDemo").removeClass('invalid');
            }
        }

    });


    $("#txtWebsiteURlDemo").change(function () {
        var chkWebsite = $("#txtWebsiteURlDemo").val();
        if ($.trim(chkWebsite) != '') {
            var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
            var emailaddressVal = $("#txtWebsiteURlDemo").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errWebsiteUrl").empty();
                $("#errWebsiteUrl").append("*Invalid Website URL");
                $("#txtWebsiteURlDemo").addClass('invalid');
                return false
            }
            else {
                $("#errWebsiteUrl").empty();
                $("#txtWebsiteURlDemo").removeClass('invalid');
            }
        }
        else {
            $("#errWebsiteUrl").empty();
            $("#txtWebsiteURlDemo").removeClass('invalid');

        }
        if ($.trim(chkWebsite) == '') {
            $("#errWebsiteUrl").empty();
            $("#txtWebsiteURlDemo").addClass('invalid');
        }
    });



    $("#txtAppointmentDate").change(function () {

        var AppoinmentDate = $('#txtAppointmentDate').val();
        if ($.trim(AppoinmentDate) != '') {
            $("#txtAppointmentDate").removeClass('invalid');
        }
    });

    $("#txtAppointmentDate").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var AppoinmentDate = $('#txtAppointmentDate').val();
            if ($.trim(AppoinmentDate) == '') {
                $("#txtAppointmentDate").addClass('invalid');
            }
            else {
                $("#txtAppointmentDate").removeClass('invalid');
            }
        }

    });

    

    $("#ddlAppointmentTime").change(function () {

        var AppoinmentTime = $('#ddlAppointmentTime').val();
        if ($.trim(AppoinmentTime) != '') {
            $("#ddlAppointmentTime").removeClass('invalid');
        }
    });

    $("#ddlAppointmentTime").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var AppoinmentTime = $('#ddlAppointmentTime').val();
            if ($.trim(AppoinmentTime) == '') {
                $("#ddlAppointmentTime").addClass('invalid');
            }
            else {
                $("#ddlAppointmentTime").removeClass('invalid');
            }
        }

    });

    $("#drpdwnJobTitle").change(function () {

        var JobTitle = $('#drpdwnJobTitle').val();
        if ($.trim(JobTitle) != '') {
            $("#drpdwnJobTitle").removeClass('invalid');
        }
    });

    $("#drpdwnJobTitle").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var JobTitle = $('#drpdwnJobTitle').val();
            if ($.trim(JobTitle) == '') {
                $("#drpdwnJobTitle").addClass('invalid');
            }
            else {
                $("#drpdwnJobTitle").removeClass('invalid');
            }
        }

    });

    $("#drpdwnTimeZone").change(function () {

        var TimeZone = $('#drpdwnTimeZone').val();
        if ($.trim(TimeZone) != '') {
            $("#drpdwnTimeZone").removeClass('invalid');
        }
    });

    $("#drpdwnTimeZone").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var TimeZone = $('#drpdwnTimeZone').val();
            if ($.trim(TimeZone) == '') {
                $("#drpdwnTimeZone").addClass('invalid');
            }
            else {
                $("#drpdwnTimeZone").removeClass('invalid');
            }
        }

    });

    var text_Description = 500;
    $('#txtComment_textDemo').html(text_Description + ' characters remaining');
    var text_length = $('#txtCommentsDemo').val().length;
    var text_remaining = text_Description - text_length;
    $('#txtComment_textDemo').html(text_remaining + ' characters remaining');

    $('#txtComments').keyup(function () {
        var text_length = $('#txtCommentsDemo').val().length;
        var text_remaining = text_Description - text_length;

        $('#txtComment_textDemo').html(text_remaining + ' characters remaining');
    });

    //////////////////////End Change Event ///////////////////////////


    ///////////////////////////Submit event///////////////////////////////////




    $("#btnScheduleDemo").click(function () {
       
        var isValid = true;

     
        var FullName = $("#txtFullNameDemo").val();
        if ($.trim(FullName) == '') {
            $("#txtFullNameDemo").addClass('invalid');
            isValid = false;
        }
     

        var Phone = $("#txtPhoneDemo").val();
        if ($.trim(Phone) == '') {
            $("#txtPhoneDemo").addClass('invalid');
            isValid = false;
        }
      

        var Email = $("#txtEmailAddressDemo").val();
        if ($.trim(Email) == '') {
            $("#txtEmailAddressDemo").addClass('invalid');
            isValid = false;
        }
        if ($.trim(Email) != '') {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var emailaddressVal = $("#txtEmailAddressDemo").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errEmail").empty();
                $("#errEmail").append("*Invalid Email");
                isValid = false;
            }
        }

        var JobTitle = $("#drpdwnJobTitle").val();
        if (JobTitle == 0) {
            $("#drpdwnJobTitle").addClass('invalid');
            isValid = false;
        }

        var Company = $("#txtCompanyDemo").val();
        if ($.trim(Company) == '') {
            $("#txtCompanyDemo").addClass('invalid');
            isValid = false;
        }
      

        var WebsiteUrl = $("#txtWebsiteURlDemo").val();
        if ($.trim(WebsiteUrl) != '') {
            var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
            var emailaddressVal = $("#txtWebsiteURlDemo").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errWebsiteUrl").empty();
                $("#errWebsiteUrl").append("*Invalid Website Url");
                isValid = false;
            }
        }
     

        var DemoDate = $("#txtAppointmentDate").val();
        if (DemoDate == 0) {
            $("#txtAppointmentDate").addClass('invalid');
            isValid = false;
        }

       
       

        var DemoTime = $("#ddlAppointmentTime").val();
        if (DemoTime == 0) {
            $("#ddlAppointmentTime").addClass('invalid');
            isValid = false;
        }

        var TimeZone = $("#drpdwnTimeZone").val();
        if (TimeZone == 0) {
            $("#drpdwnTimeZone").addClass('invalid');
            isValid = false;
        }
      

        var DemoComments = $('#txtCommentsDemo').val();
       
       
		////Captcha Response
        //var response = grecaptcha.getResponse();

        ////Captcha Response verified
        //if (response.length == 0) {
        //    //reCaptcha not verified

        //    $("#spcaptcha").empty();
        //    $("#spcaptcha").append("*Captcha Required");
        //    isValid = false;

        //}
        //else {
        //    $("#spcaptcha").empty();
        //    //isValid = true;
        //}
    

        if (isValid == true) {

            var url = sitesetting.AvalonDataServicesPath + "ScheduleDemo/ServicePages/ScheduleDemo.ashx?FullName=" + FullName + "&Email=" + Email + "&Phone=" + Phone + "&Company=" + Company + "&WebsiteUrl=" + WebsiteUrl + "&DemoDate=" + DemoDate + "&DemoTime=" + DemoTime + "&Comments=" + DemoComments + "&JobTitle=" + JobTitle + "&TimeZone=" + TimeZone;
          
            




            $.getJSON(url, function (json) {
                if (json == 'success') {
                    
                    $("#ScheduleOverlay").css("display", "block");
                    $("#ScheduleADemo").css("display", "none");
                    
                   
                    Loader(false);
                }
            });


        }
        else {
            return isValid;
        }


    });

    $("#ScheduleSuccessDiv a").click(function () {
        $("#ScheduleOverlay").fadeOut("slow");
        $("#ScheduleOverlay").css("display", "none");
        $(".modal-backdrop").css("display", "none");
        $("body").removeClass('modal-open');
        $("body").removeAttr("style");
    });




    /////////////END DEMO SCHEDULE FUNCTION/////////////////////////


    $("#btnEmailAddressnewsletter").click(function () {

        var isValid = true;
        var chkNewsLetterEmail = $("#txtEmailAddressnewsletter").val();
        var compaireText = 'Enter Your Email Address';
       

        if (chkNewsLetterEmail.trim() == compaireText.trim()) {
            window.location = sitesetting.WebRoot + "/Refer/NewsletterForm";
            document.forms[0].action = sitesetting.WebRoot + "/Refer/NewsletterForm";
            return true;
        }

        if (isValid == true) {
            window.location = sitesetting.WebRoot + "/Refer/NewsletterForm?email=" + escape(chkNewsLetterEmail) + "";
            document.forms[0].action = sitesetting.WebRoot + "/Refer/NewsletterForm?email=" + escape(chkNewsLetterEmail) + "";

        }


    });


  $("#btnFirendsEmailreferfrd").click(function () {

       var isValid = true;
       var chkReferfrdEmail = $("#txtFirendsEmailreferfrd").val();
       var compaireText = 'Friends Email Address';


       if (chkReferfrdEmail.trim() == compaireText.trim()) {
           window.location = sitesetting.WebRoot + "/Refer/ReferFriends";
           document.forms[0].action = sitesetting.WebRoot + "/Refer/ReferFriends";
           return true;
        }

     if (isValid == true) {
         window.location = sitesetting.WebRoot + "/Refer/ReferFriends?email=" + escape(chkReferfrdEmail) + "";
         document.forms[0].action = sitesetting.WebRoot + "/Refer/ReferFriends?email=" + escape(chkReferfrdEmail) + "";
         }

   });



    //$("#ItemListPage .container").css('background', '#ccc');


    // JavaScript Function for Rolex Cobranding
    //$.getScript('http://binary.rolex.com/dealer/cobranding.js', function () {

    //    var rdp = new CoBranding();
    //    var rdpConfig = {
    //        dealerAPIKey: 'b9',
    //        domain: 'www.xyz.com',
    //        lang: 'en_jeweler',
    //        shortLang: 'EN',
    //        width: '144',
    //        height: '140',
    //        colour: 'black',
    //        brand: 'rolex',
    //        nw: '0',
    //        format: 'h'
    //    }
    //    try {
    //        rdp.getCoBranding(rdpConfig, 'plaque/validate_dealer.rlx');
    //    } catch (err) { }

    //});


    //  DetailsProductYoutube  data-youtubeCode

    //$("#DetailsProductYoutubeHeader").click(function () {

    //   // var src = "http://www.youtube.com/watch?v=MHJrEGKj9h4?enablejsapi=1&autoplay=1&rel=0";
    //    //$("#DetailsProductvedioModalHeader").find("#ifDetailsProductCardYoutueHeader").attr("src", src);
    //    $("#DetailsProductvedioModalHeader").modal("show");

    //});


    //$.getScript(sitesetting.templateUrl + 'js/MasterPage/navHeader.js', function () { });
    //$.getScript(sitesetting.templateUrl + 'js/MasterPage/navFooter.js', function () { });
    //$.getScript(sitesetting.templateUrl + 'js/MasterPage/address.js', function () { });

  $(".search-flip").click(function () {
      $(".searchbox-panel").slideToggle("2000");
  });
    $(".panel-heading1").click(function () {
        $(".circle1").toggle();
    });
    $(".panel-heading2").click(function () {
        $(".circle2").toggle();
    });
    $(".panel-heading3").click(function () {
        $(".circle3").toggle();
    });
   
    $(".close_btn").click(function () {
        $("#schedule_strip").fadeOut("slow");
        $("#schedule_strip").css("display", "none");
    });
    //$('li.dropdown').click(function () {
    //    $("li.dropdown ul.dropdown-menu").toggleClass("active");
    //});

   
});


$(document).ready(function () {
    $('#dl-menu').dlmenu({
        animationClasses: { classin: 'dl-animate-in-3', classout: 'dl-animate-out-3' }
    });
});

