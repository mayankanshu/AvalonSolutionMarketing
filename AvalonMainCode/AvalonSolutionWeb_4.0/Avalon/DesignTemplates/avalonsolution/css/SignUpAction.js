
var Salutation; var FirstName; var LastName; var Company;
var JobTitle; var Address1; var Address2; var City1; var State1; var Zip1; var Telephone; var Mobile;
var EmailAddress; var Website; var BuyingGroup; var Comments; var WebsitePlan; var WebsiteDesign
var myarray = []; var websitearray = []; var designarray = [];
var queryString = new Array();
var PricingWebsitePlan = [];


$(document).ready(function () {

    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var key = params[i].split('=')[0];
                    var value = decodeURIComponent(params[i].split('=')[1]);
                    queryString[key] = value;
                }
            }
        }
        if (queryString["WebsitePlan"] != null) {
            PricingWebsitePlan.splice(0, 1);
            
            var pricingwebsiteplan = queryString["WebsitePlan"];
            PricingWebsitePlan.push(pricingwebsiteplan);
           
        }
    });


    /**************** Call Service For State ******************/

    var urlState = sitesetting.AvalonDataServicesPath + 'Shared/ServicePages/State.ashx';

   
    $.ajax({
        url: urlState,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            var states = data.Head;
            $.each(states, function (i, state) {
                if (state.StateCode == "XX" || state.StateCode == "OTH") {
                    // $("#drpdwnState").append('<optgroup label="' + state.StateName + '"></optgroup>');
                }
                else {
                    $("#drpdwnStateSignUp").append('<option value="' + state.StateCode + '">' + state.StateName + '</option>');
                }

            });
        }
    });


    // *********************Change Event***********************************************//
    $("#drpdwnSalutationSignUp").change(function () {
        var Sal = $('#drpdwnSalutationSignUp').val();
        if ($.trim(Sal) != '') {
            $("#drpdwnSalutationSignUp").removeClass('invalid');
        }
    });

    $("#drpdwnSalutationSignUp").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Sal = $("#drpdwnSalutationSignUp").val();
            if ($.trim(Sal) == '') {
                $("#drpdwnSalutationSignUp").addClass('invalid');
            }
            else {
                $("#drpdwnSalutationSignUp").removeClass('invalid');
            }
        }

    });


    $("#txtFirstNameSignUp").change(function () {
        var FirstName = $('#txtFirstNameSignUp').val();
        if ($.trim(FirstName) != '') {
            $("#txtFirstNameSignUp").removeClass('invalid');
        }
    });

    $("#txtFirstNameSignUp").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var FirstName = $("#txtFirstNameSignUp").val();
            if ($.trim(FirstName) == '') {
                $("#txtFirstNameSignUp").addClass('invalid');
            }
            else {
                $("#txtFirstNameSignUp").removeClass('invalid');
            }
        }

    });

    $("#txtLastNameSignUp").change(function () {
        var LastName = $('#txtLastNameSignUp').val();
        if ($.trim(LastName) != '') {
            $("#txtLastNameSignUp").removeClass('invalid');
        }
    });

    $("#txtLastNameSignUp").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var LastName = $("#txtLastNameSignUp").val();
            if ($.trim(LastName) == '') {
                $("#txtLastNameSignUp").addClass('invalid');
            }
            else {
                $("#txtLastNameSignUp").removeClass('invalid');
            }
        }

    });


    $("#txtCompanySignUp").change(function () {
        var Company = $('#txtCompanySignUp').val();
        if ($.trim(Company) != '') {
            $("#txtCompanySignUp").removeClass('invalid');
        }
    });

    $("#txtCompanySignUp").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Company = $("#txtCompanySignUp").val();
            if ($.trim(Company) == '') {
                $("#txtCompanySignUp").addClass('invalid');
            }
            else {
                $("#txtCompanySignUp").removeClass('invalid');
            }
        }

    });

    $("#drpdwnJobTitleSignUp").change(function () {
        var Job = $('#drpdwnJobTitleSignUp').val();
        if ($.trim(Job) != '') {
            $("#drpdwnJobTitleSignUp").removeClass('invalid');
        }
    });

    $("#drpdwnJobTitleSignUp").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Job = $("#drpdwnJobTitleSignUp").val();
            if ($.trim(Job) == '') {
                $("#drpdwnJobTitleSignUp").addClass('invalid');
            }
            else {
                $("#drpdwnJobTitleSignUp").removeClass('invalid');
            }
        }

    });

    $("#txtAddress1SignUp").change(function () {
        var address = $('#txtAddress1SignUp').val();
        if ($.trim(address) != '') {
            $("#txtAddress1SignUp").removeClass('invalid');
        }
    });

    $("#txtAddress1SignUp").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var address = $("#txtAddress1SignUp").val();
            if ($.trim(address) == '') {
                $("#txtAddress1SignUp").addClass('invalid');
            }
            else {
                $("#txtAddress1SignUp").removeClass('invalid');
            }
        }

    });

    $("#txtCitySignUp").change(function () {
        var City = $('#txtCitySignUp').val();
        if ($.trim(City) != '') {
            $("#txtCitySignUp").removeClass('invalid');
        }
    });

    $("#txtCitySignUp").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var City = $("#txtCitySignUp").val();
            if ($.trim(City) == '') {
                $("#txtCitySignUp").addClass('invalid');
            }
            else {
                $("#txtCitySignUp").removeClass('invalid');
            }
        }

    });

    $("#drpdwnStateSignUp").change(function () {

        var State = $('#drpdwnStateSignUp').val();
        if ($.trim(State) != '') {
            $("#drpdwnStateSignUp").removeClass('invalid');
        }
    });

    $("#drpdwnStateSignUp").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var State = $('#drpdwnStateSignUp').val();
            if ($.trim(State) == '') {
                $("#drpdwnStateSignUp").addClass('invalid');
            }
            else {
                $("#drpdwnStateSignUp").removeClass('invalid');
            }
        }

    });

    $("#txtZipSignUp").change(function () {
        var Zip = $('#txtZipSignUp').val();
        if ($.trim(Zip) != '') {
            $("#txtZipSignUp").removeClass('invalid');
        }
    });

    $("#txtZipSignUp").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var Zip = $('#txtZipSignUp').val();
            if ($.trim(Zip) == '') {
                $("#txtZipSignUp").addClass('invalid');
            }
            else {
                $("#txtZipSignUp").removeClass('invalid');
            }
        }

    });

    $("#txtTelephoneSignUp").change(function () {
        var ContactNo = $('#txtTelephoneSignUp').val();
        if ($.trim(ContactNo) != '') {
            $("#txtTelephoneSignUp").removeClass('invalid');

        }
    });

    $("#txtTelephoneSignUp").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var ContactNo = $('#txtTelephoneSignUp').val();
            if ($.trim(ContactNo) == '') {
                $("#txtTelephoneSignUp").addClass('invalid');

            }
            else {
                $("#txtTelephoneSignUp").removeClass('invalid');
            }
        }

    });

    $("#txtEmailAddressSignUp").change(function () {
        var chkEmail = $("#txtEmailAddressSignUp").val();
        if ($.trim(chkEmail) != '') {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var emailaddressVal = $("#txtEmailAddressSignUp").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errEmailAddressSignUp").empty();
                $("#errEmailAddressSignUp").append("*Invalid Email");
                $("#txtEmailAddressSignUp").addClass('invalid');
                return false
            }
            else {
                $("#errEmailAddressSignUp").empty();
                $("#txtEmailAddressSignUp").removeClass('invalid');
            }
        }
        else {
            $("#errEmailAddressSignUp").empty();
            $("#txtEmailAddressSignUp").removeClass('invalid');

        }
        if ($.trim(chkEmail) == '') {
            $("#errEmailAddressSignUp").empty();
            $("#txtEmailAddressSignUp").addClass('invalid');
        }
    });

    $("#txtEmailAddressSignUp").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var chkEmail = $("#txtEmailAddressSignUp").val();
            if ($.trim(chkEmail) == '') {
                $("#txtEmailAddressSignUp").addClass('invalid');
            }
            else {
                $("#txtEmailAddressSignUp").removeClass('invalid');
            }
        }

    });

    $("#txtWebsiteURLSignUp").change(function () {
        var chkWebsite = $("#txtWebsiteURLSignUp").val();
        if ($.trim(chkWebsite) != '') {
            var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
            var emailaddressVal = $("#txtWebsiteURLSignUp").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errWebsiteSignUp").empty();
                $("#errWebsiteSignUp").append("*Invalid Website Url");
                $("#txtWebsiteURLSignUp").addClass('invalid');
                return false
            }
            else {
                $("#errWebsiteSignUp").empty();
                $("#txtWebsiteURLSignUp").removeClass('invalid');
            }
        }
        else {
            $("#errWebsiteSignUp").empty();
            $("#txtWebsiteURLSignUp").removeClass('invalid');

        }
        if ($.trim(chkWebsite) == '') {
            $("#errWebsiteSignUp").empty();
            $("#txtWebsiteURLSignUp").addClass('invalid');
        }
    });

   
    //$("#drpdwnBuyingGroup").change(function () {

    //    var BuyingGroup = $('#drpdwnBuyingGroup').val();
    //    if ($.trim(BuyingGroup) != '') {
    //        $("#drpdwnBuyingGroup").removeClass('invalid');
    //    }
    //});

    //$("#drpdwnBuyingGroup").keydown(function (e) {
    //    var code = e.keyCode || e.which;
    //    if (code == '9') {
    //        var BuyingGroup = $('#drpdwnBuyingGroup').val();
    //        if ($.trim(BuyingGroup) == '') {
    //            $("#drpdwnBuyingGroup").addClass('invalid');
    //        }
    //        else {
    //            $("#drpdwnBuyingGroup").removeClass('invalid');
    //        }
    //    }

    //});


    $("#txtSubjectSignUp").keydown(function (e) {
        // alert('1');
        var code = e.keyCode || e.which;
        if (code == '9') {
            var Subject = $('#txtSubjectSignUp').val();
            if ($.trim(Subject) == '') {
                $("#txtSubjectSignUp").addClass('invalid');
            }
            else {
                $("#errSubjectSignUp").empty();
                $("#txtSubjectSignUp").removeClass('invalid');

            }
        }

    });

    $("#txtSubjectSignUp").change(function () {
        var Subject = $('#txtSubjectSignUp').val();

        if ($.trim(Subject) != '') {
            $("#txtSubjectSignUp").removeClass('invalid');
        }
    });


    // ***Buying Group Check Box Check Un Check Condition ** //
    $('input[type=checkbox]').click(function () {
        if ($(this).is(':checked')==true) {
            var value = $(this).val();
            var IsChecked = $(this).is(':checked');
            if (value == 'None' && IsChecked == true)
            {
                $("#AGS").attr("disabled", true);
                document.getElementById("AGS").checked = false;
                $("#IJO").attr("disabled", true);
                document.getElementById("IJO").checked = false;
                $("#BIG").attr("disabled", true);
                document.getElementById("BIG").checked = false;
                $("#LJG").attr("disabled", true);
                document.getElementById("LJG").checked = false;
                $("#CBG").attr("disabled", true);
                document.getElementById("CBG").checked = false;
                $("#RJO").attr("disabled", true);
                document.getElementById("RJO").checked = false;
                $("#SJO").attr("disabled", true);
                document.getElementById("SJO").checked = false;
            }
           
            $("#CheckBox").removeClass('invalid')
        }
        else {
            $("#AGS").removeAttr("disabled");
            $("#IJO").removeAttr("disabled");
            $("#BIG").removeAttr("disabled");
            $("#LJG").removeAttr("disabled");
            $("#CBG").removeAttr("disabled");
            $("#RJO").removeAttr("disabled");
            $("#SJO").removeAttr("disabled");
        }
        
    });
   
   

    //If no option is checked, the make all the options available to be selected
    //Otherwise, one option must be checked so lock out all other options
   

    //***********************Company And ContactDetails Continue button event event ************************************************//

    $("#btnContinue").click(function () {


        var isValid = true;

        var sSalutation = $("#drpdwnSalutationSignUp").val();
        if ($.trim(sSalutation) == '') {
            $("#drpdwnSalutationSignUp").addClass('invalid');
            isValid = false;
        }

        Salutation = sSalutation;


        var sFirstName = $("#txtFirstNameSignUp").val();
        if ($.trim(sFirstName) == '') {
            $("#txtFirstNameSignUp").addClass('invalid');
            isValid = false;
        }

        FirstName = sFirstName;
        var sLastName = $("#txtLastNameSignUp").val();
        if ($.trim(sLastName) == '') {
            $("#txtLastNameSignUp").addClass('invalid');
            isValid = false;
        }

        Lastname = sLastName;

        var sCompany = $("#txtCompanySignUp").val();
        if ($.trim(sCompany) == '') {
            $("#txtCompanySignUp").addClass('invalid');
            isValid = false;
        }

        Company = sCompany;

        var sJobTitle = $("#drpdwnJobTitleSignUp").val();
        if ($.trim(sJobTitle) == '0') {
            $("#drpdwnJobTitleSignUp").addClass('invalid');
            isValid = false;
        }
        

        var sAddress1 = $("#txtAddress1SignUp").val();
        if ($.trim(sAddress1) == '') {
            $("#txtAddress1SignUp").addClass('invalid');
            isValid = false;
        }


        var sAddress2 = $("#txtAddress2SignUp").val();


        var sCity = $("#txtCitySignUp").val();
        if ($.trim(sCity) == '') {
            $("#txtCitySignUp").addClass('invalid');
            isValid = false;
        }


        var sState = $("#drpdwnStateSignUp").val();
        if (sState == 0) {
            $("#drpdwnStateSignUp").addClass("invalid");
            isValid = false;
        }


        var sZip = $("#txtZipSignUp").val();
        if ($.trim(sZip) == '') {
            $("#txtZipSignUp").addClass('invalid');
            isValid = false;
        }

        var sPhone = $("#txtTelephoneSignUp").val();
        if ($.trim(sPhone) == '') {
            $("#txtTelephoneSignUp").addClass('invalid');
            isValid = false;
        }


        var sMobile = $("#txtMobileSignUp").val();
     
      

        var sWebsite = $("#txtWebsiteURLSignUp").val();
        if ($.trim(sWebsite) != '') {
            var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
            var emailaddressVal = $("#txtWebsiteURLSignUp").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errWebsiteSignUp").empty();
                $("#errWebsiteSignUp").append("*Invalid Website Url");
                isValid = false;
            }
        }

        var checkboxs = document.getElementsByName("type");
        var okay = false;
        for (var i = 0, l = checkboxs.length; i < l; i++) {
            if (checkboxs[i].checked) {
                okay = true;
                break;
            }
        }
        if (okay) {
            $("#CheckBox").removeClass('invalid')
            isValid = true;
        }
        else
        {
           
            $("#CheckBox").addClass('invalid');
            isValid = false;
         
            }

        var sBuyingGroup = new Array();
        $("input:checkbox[name=type]:checked").each(function () {
            sBuyingGroup.push($(this).val());
        });

        var sEmail = $("#txtEmailAddressSignUp").val();
        if ($.trim(sEmail) == '') {
            $("#txtEmailAddressSignUp").addClass('invalid');
            isValid = false;
        }
        if ($.trim(sEmail) != '') {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var emailaddressVal = $("#txtEmailAddressSignUp").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errEmailAddressSignUp").empty();
                $("#errEmailAddressSignUp").append("*Invalid Email");
                isValid = false;
            }
        }

        if (isValid == true) {

            /////////Move To Next Tab //////////////////////////

            if (PricingWebsitePlan == "")
            {
                var nextId = $(this).parents('.active').next().attr("id");
                $('[href=#' + nextId + ']').tab('show');
            }
            else
            {
                $('[href=#SelectWebsiteDesign]').tab('show');

                var websitePlan = PricingWebsitePlan;
                if (websitePlan == 'Bronze') {
                   
                    $("#imgSelectWebSitePlan").attr('src', "");
                    $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/bronze.png");


                    $(".DesignBasic").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignStandard").click(function () {
                        $("#upgradePlanPopup").css("display", "block");
                        UpdatePlanPopUp();


                    });

                    $(".DesignAdvanced").click(function () {
                        $("#upgradePlanPopup").css("display", "block");
                        UpdatePlanPopUp();

                    });

                    $(".DesignPremium").click(function () {
                        $("#upgradePlanPopup").css("display", "block");
                        UpdatePlanPopUp();

                    });

                    $("#imgSelectWebsiteDesign").attr('src', "");
                    $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/bronze.png");

                }


                else if (websitePlan == 'Silver') {
                    

                    $("#imgSelectWebSitePlan").attr('src', "");
                    $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/Silver.png");

                    $(".DesignBasic").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignStandard").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignAdvanced").click(function () {
                        $("#upgradePlanPopup").css("display", "block");
                        UpdatePlanPopUp();

                    });

                    $(".DesignPremium").click(function () {
                        $("#upgradePlanPopup").css("display", "block");
                        UpdatePlanPopUp();

                    });

                    $("#imgSelectWebsiteDesign").attr('src', "");
                    $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/Silver.png");



                }
                else if (websitePlan == 'Gold') {

                    $("#imgSelectWebSitePlan").attr('src', "");
                    $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/gold.png");

                    $(".DesignBasic").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignStandard").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignAdvanced").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignPremium").click(function () {
                        $("#upgradePlanPopup").css("display", "block");
                        UpdatePlanPopUp();

                    });

                    $("#imgSelectWebsiteDesign").attr('src', "");
                    $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/gold.png");

                }
                else if (websitePlan == 'Platinum') {

                    $("#imgSelectWebSitePlan").attr('src', "");
                    $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/plantilnum.png");

                    $(".DesignBasic").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignStandard").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignAdvanced").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignPremium").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $("#imgSelectWebsiteDesign").attr('src', "");
                    $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/plantilnum.png");

                }
                else if (websitePlan == 'Diamond') {

                    $("#imgSelectWebSitePlan").attr('src', "");
                    $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/dimond.png");

                    $(".DesignBasic").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignStandard").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignAdvanced").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignPremium").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignUpTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $("#imgSelectWebsiteDesign").attr('src', "");
                    $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/dimond.png");
                }
                websitearray.push(websitePlan);
                $("#signupWebPlan").empty();
                $("#signupWebPlan").append(websitePlan);

               // var nextId = $(this).parents('.active').next().attr("id");
                $('[href=#SelectWebsiteDesign]').tab('show');
               
            }
                
            myarray.push(sSalutation, sFirstName, sLastName, sCompany, sJobTitle, sAddress1, sAddress2, sCity, sState, sZip, sPhone, sMobile, sEmail, sWebsite, sBuyingGroup);
           


        }
        else
        {
            return isValid;
        }

  
   
   

    });

   

    //**************************Start Website Plan & Website Design*****************************************************************//



    jQuery(document).on('click', ".selectWebsitePlan", function () {
        websitearray.splice(0, 1);
        var websitePlan = jQuery(this).find('input').val();
        if (websitePlan == 'Bronze') {

            $("#imgSelectWebSitePlan").attr('src', "");
            $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/bronze.png");


            $(".DesignBasic").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                $("#upgradePlanPopup").css("display", "block");
                UpdatePlanPopUp();
              
            

            });

            $(".DesignAdvanced").click(function () {
                $("#upgradePlanPopup").css("display", "block");
                UpdatePlanPopUp();
               
            });

            $(".DesignPremium").click(function () {
                $("#upgradePlanPopup").css("display", "block");
                UpdatePlanPopUp();
                
            });

            $("#imgSelectWebsiteDesign").attr('src', "");
            $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/bronze.png");
            
        }

         
        else if (websitePlan == 'Silver') {

            $("#imgSelectWebSitePlan").attr('src', "");
            $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/Silver.png");

            $(".DesignBasic").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignAdvanced").click(function () {
                $("#upgradePlanPopup").css("display", "block");
                UpdatePlanPopUp();
               
            });

            $(".DesignPremium").click(function () {
                $("#upgradePlanPopup").css("display", "block");
                UpdatePlanPopUp();
               
            });

            $("#imgSelectWebsiteDesign").attr('src', "");
            $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/Silver.png");



        }
        else if (websitePlan == 'Gold') {

            $("#imgSelectWebSitePlan").attr('src', "");
            $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/gold.png");

            $(".DesignBasic").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignAdvanced").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignPremium").click(function () {
                $("#upgradePlanPopup").css("display", "block");
                UpdatePlanPopUp();
               
            });

            $("#imgSelectWebsiteDesign").attr('src', "");
            $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/gold.png");

        }
        else if (websitePlan == 'Platinum') {

            $("#imgSelectWebSitePlan").attr('src', "");
            $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/plantilnum.png");

            $(".DesignBasic").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignAdvanced").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignPremium").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $("#imgSelectWebsiteDesign").attr('src', "");
            $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/plantilnum.png");

        }
        else if (websitePlan == 'Diamond') {

            $("#imgSelectWebSitePlan").attr('src', "");
            $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/dimond.png");

            $(".DesignBasic").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignAdvanced").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignPremium").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignUpTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $("#imgSelectWebsiteDesign").attr('src', "");
            $("#imgSelectWebsiteDesign").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/dimond.png");
        }
        websitearray.push(websitePlan);
        $("#signupWebPlan").empty();
        $("#signupWebPlan").append(websitePlan);
    
        var nextId = $(this).parents('.active').next().attr("id");
        $('[href=#' + nextId + ']').tab('show');
    });


  



    $("#btnPreviousWebsitePlan").click(function () {

        var prevIdWebsitePlan = $(this).parents('.active').prev().attr("id");
        $('[href=#' + prevIdWebsitePlan + ']').tab('show');



    });

    $("#btnSelectDesignLater").click(function () {
        $('[href=#SignUpTab]').tab('show');
    });

    $("#btnPreviousWebsiteDesign").click(function () {
       
        var prevIdWebsiteDesign = $(this).parents('.active').prev().attr("id");
        $('[href=#' + prevIdWebsiteDesign + ']').tab('show');
        

    });

    $("#btnPreviousComment").click(function () {
        var prevIdWebsitePlan = $(this).parents('.active').prev().attr("id");
        $('[href=#' + prevIdWebsitePlan + ']').tab('show');
    });

   



    //**********************************End Website Plan & Website Design*********************************************************************//

    //********************************** Sign Up Now Button Event ****************************************************************************//
    $("#btnSignUpNow").click(function () {
        var isValid = true;
        var sComments = $("#txtComments").val();

        Salutation = myarray[0];
        FirstName = myarray[1];
        LastName = myarray[2];
        Company = myarray[3];
        JobTitle = myarray[4];
        Address1 = myarray[5];
        Address2 = myarray[6];
        City1 = myarray[7];
        State1 = myarray[8];
        Zip1 = myarray[9];
        Telephone = myarray[10];
        Mobile = myarray[11];
        EmailAddress = myarray[12];
        Website = myarray[13];
        BuyingGroup = myarray[14]
        WebsitePlan = websitearray[0];
        WebsiteDesign = designarray[0];
        Comments = sComments;

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
            var url = sitesetting.AvalonDataServicesPath + "SignUp/ServicePages/SignUpRequest.ashx?Salutation=" + Salutation + "&FirstName=" + FirstName + "&LastName=" + LastName + "&Company=" + Company + "&JobTitle=" + JobTitle + "&Address1=" + Address1 + "&Address2=" + Address2 + "&City=" + City1 + "&State=" + State1 + "&Zip=" + Zip1 + "&Phone1=" + Telephone + "&Mobile=" + Mobile + "&Email=" + EmailAddress + "&Website=" + Website + "&BuyingGroup=" + BuyingGroup + "&Comments=" + Comments + "&WebPlan=" + WebsitePlan + "&WebDesignerNumber=" + WebsiteDesign;


            $.getJSON(url, function (json) {
                if (json == 'success') {
                    SignUpSuccess();
                    Loader(false);
                }
            });
        }
        else {
            return isValid;
        }

    });

   
    function SignUpSuccess()
    {
        $("#SignUpSuccessDetails").css({ display: "block" });
        $("#SignUpInnerMain").css({ display: "none" });
        $('.banner .BannerInner .heading').html($('.banner .BannerInner .heading').html().replace('Sign Up Now', 'Thank You for Signing up!'));

    }
   


    function UpdatePlanPopUp() {
        //var popupHtml = '<div class="UpgradePlan" id="upgradePlan">'
        var popupHtml = '<h3>Standard Designs are available only with Upgraded Website Plans</h3>'
        popupHtml += '<p>Do You want to upgrade your website plan from '+ websitearray +'?</p>'
        popupHtml += '<div class="UpgradePlanBtn">'
        popupHtml += '<a class="btn btn-signup" id="btnUpgradePlan" href="javascript:void(0)" onclick="UpgradePlan();"> Yes </a>'
        popupHtml += '<a class="btn btn-login" id="btnSamePlan" href="javascript:void(0)" onclick="SamePlan();"> No </a>'
        popupHtml += '</div>'
        $('#upgradePlan').html(popupHtml);

    };

});

function UpgradePlan() {
    $("#upgradePlanPopup").fadeOut("slow");
    $("#upgradePlanPopup").css("display", "none");
    $('[href=#SelectWebsitePlan]').tab('show');
   



};

function SamePlan() {
    $("#upgradePlanPopup").fadeOut("slow");
    $("#upgradePlanPopup").css("display", "none");
};