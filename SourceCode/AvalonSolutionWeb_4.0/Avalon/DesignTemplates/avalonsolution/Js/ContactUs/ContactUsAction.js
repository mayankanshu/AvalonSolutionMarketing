//Contact Us Form - Action Page
$(document).ready(function () {

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
                $("#drpdwnStateContactUs").append('<option value="' + state.StateCode + '">' + state.StateName + '</option>');
          }

        });
    }
});


// *********************Change Event***********************************************//

$("#drpdwnSalutationContactUs").change(function () {
    var Sal = $('#drpdwnSalutationContactUs').val();
        if ($.trim(Sal) != '') {
            $("#drpdwnSalutationContactUs").removeClass('invalid');
        }
    });

$("#drpdwnSalutationContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Sal = $("#drpdwnSalutationContactUs").val();
            if ($.trim(Sal) == '') {
                $("#drpdwnSalutationContactUs").addClass('invalid');
            }
            else {
                $("#drpdwnSalutationContactUs").removeClass('invalid');
            }
        }

    });


$("#txtFirstNameContactUs").change(function () {
    var FirstName = $('#txtFirstNameContactUs').val();
        if ($.trim(FirstName) != '') {
            $("#txtFirstNameContactUs").removeClass('invalid');
        }
    });

$("#txtFirstNameContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var FirstName = $("#txtFirstNameContactUs").val();
            if ($.trim(FirstName) == '') {
                $("#txtFirstNameContactUs").addClass('invalid');
            }
            else {
                $("#txtFirstNameContactUs").removeClass('invalid');
            }
        }

    });

$("#txtLastNameContactUs").change(function () {
    var LastName = $('#txtLastNameContactUs').val();
        if ($.trim(LastName) != '') {
            $("#txtLastNameContactUs").removeClass('invalid');
        }
    });

$("#txtLastNameContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var LastName = $("#txtLastNameContactUs").val();
            if ($.trim(LastName) == '') {
                $("#txtLastNameContactUs").addClass('invalid');
            }
            else {
                $("#txtLastNameContactUs").removeClass('invalid');
            }
        }

    });


$("#txtCompanyContactUs").change(function () {
    var Company = $('#txtCompanyContactUs').val();
        if ($.trim(Company) != '') {
            $("#txtCompanyContactUs").removeClass('invalid');
        }
    });

$("#txtCompanyContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Company = $("#txtCompanyContactUs").val();
            if ($.trim(Company) == '') {
                $("#txtCompanyContactUs").addClass('invalid');
            }
            else {
                $("#txtCompanyContactUs").removeClass('invalid');
            }
        }

    });



$("#drpdwnJobTitleContactUs").change(function () {
    var Job = $('#drpdwnJobTitleContactUs').val();
        if ($.trim(Job) != '') {
            $("#drpdwnJobTitleContactUs").removeClass('invalid');
        }
    });

$("#drpdwnJobTitleContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var Job = $("#drpdwnJobTitleContactUs").val();
            if ($.trim(Job) == '') {
                $("#drpdwnJobTitleContactUs").addClass('invalid');
            }
            else {
                $("#drpdwnJobTitleContactUs").removeClass('invalid');
            }
        }

    });


$("#txtAddress1ContactUs").change(function () {
    var address = $('#txtAddress1ContactUs').val();
        if ($.trim(address) != '') {
            $("#txtAddress1ContactUs").removeClass('invalid');
        }
    });

$("#txtAddress1ContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var address = $("#txtAddress1ContactUs").val();
            if ($.trim(address) == '') {
                $("#txtAddress1ContactUs").addClass('invalid');
            }
            else {
                $("#txtAddress1ContactUs").removeClass('invalid');
            }
        }

    });

$("#txtCityContactUs").change(function () {
    var City = $('#txtCityContactUs').val();
        if ($.trim(City) != '') {
            $("#txtCityContactUs").removeClass('invalid');
        }
    });

$("#txtCityContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var City = $("#txtCity").val();
            if ($.trim(City) == '') {
                $("#txtCityContactUs").addClass('invalid');
            }
            else {
                $("#txtCityContactUs").removeClass('invalid');
            }
        }

    });

$("#drpdwnStateContactUs").change(function () {

    var State = $('#drpdwnStateContactUs').val();
        if ($.trim(State) != '') {
            $("#drpdwnStateContactUs").removeClass('invalid');
        }
    });

$("#drpdwnStateContactUs").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var State = $('#drpdwnStateContactUs').val();
            if ($.trim(State) == '') {
                $("#drpdwnStateContactUs").addClass('invalid');
            }
            else {
                $("#drpdwnStateContactUs").removeClass('invalid');
            }
        }

    });



    

$("#txtZipContactUs").change(function () {
    var Zip = $('#txtZipContactUs').val();
        if ($.trim(Zip) != '') {
            $("#txtZipContactUs").removeClass('invalid');
        }
    });

$("#txtZipContactUs").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var Zip = $('#txtZipContactUs').val();
            if ($.trim(Zip) == '') {
                $("#txtZipContactUs").addClass('invalid');
            }
            else {
                $("#txtZipContactUs").removeClass('invalid');
            }
        }

    });

$("#txtTelephoneContactUs").change(function () {
    var ContactNo = $('#txtTelephoneContactUs').val();
        if ($.trim(ContactNo) != '') {
            $("#txtTelephoneContactUs").removeClass('invalid');

        }
    });

$("#txtTelephoneContactUs").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var ContactNo = $('#txtTelephoneContactUs').val();
            if ($.trim(ContactNo) == '') {
                $("#txtTelephoneContactUs").addClass('invalid');

            }
            else {
                $("#txtTelephoneContactUs").removeClass('invalid');
            }
        }

    });

$("#txtEmailAddressContactUs").change(function () {
    var chkEmail = $("#txtEmailAddressContactUs").val();
        if ($.trim(chkEmail) != '') {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var emailaddressVal = $("#txtEmailAddressContactUs").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errEmailAddressContactUs").empty();
                $("#errEmailAddressContactUs").append("*Invalid Email");
                $("#txtEmailAddressContactUs").addClass('invalid');
                return false
            }
            else {
                $("#errEmailAddressContactUs").empty();
                $("#txtEmailAddressContactUs").removeClass('invalid');
            }
        }
        else {
            $("#errEmailAddressContactUs").empty();
            $("#txtEmailAddressContactUs").removeClass('invalid');

        }
        if ($.trim(chkEmail) == '') {
            $("#errEmailAddressContactUs").empty();
            $("#txtEmailAddressContactUs").addClass('invalid');
        }
    });

$("#txtEmailAddressContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            var chkEmail = $("#txtEmailAddressContactUs").val();
            if ($.trim(chkEmail) == '') {
                $("#txtEmailAddressContactUs").addClass('invalid');
            }
            else {
                $("#txtEmailAddressContactUs").removeClass('invalid');
            }
        }

    });

$("#txtWebsiteURLContactUs").change(function () {
    var chkWebsite = $("#txtWebsiteURLContactUs").val();
        if ($.trim(chkWebsite) != '') {
            var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
            var emailaddressVal = $("#txtWebsiteURLContactUs").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errWebsiteContactUs").empty();
                $("#errWebsiteContactUs").append("*Invalid Website URl");
                $("#txtWebsiteURLContactUs").addClass('invalid');
                return false
            }
            else {
                $("#errWebsiteContactUs").empty();
                $("#txtWebsiteURLContactUs").removeClass('invalid');
            }
        }
        else {
            $("#errWebsiteContactUs").empty();
            $("#txtWebsiteURLContactUs").removeClass('invalid');

        }
        if ($.trim(chkWebsite) == '') {
            $("#errWebsiteContactUs").empty();
            $("#txtWebsiteURLContactUs").addClass('invalid');
        }
    });


$("#drpdwnBuyingGroupContactUs").change(function () {

    var BuyingGroup = $('#drpdwnBuyingGroupContactUs').val();
        if ($.trim(BuyingGroup) != '') {
            $("#drpdwnBuyingGroupContactUs").removeClass('invalid');
        }
    });

$("#drpdwnBuyingGroupContactUs").keydown(function (e) {
        var code = e.keyCode || e.which;
        if (code == '9') {
            var BuyingGroup = $('#drpdwnBuyingGroupContactUs').val();
            if ($.trim(BuyingGroup) == '') {
                $("#drpdwnBuyingGroupContactUs").addClass('invalid');
            }
            else {
                $("#drpdwnBuyingGroupContactUs").removeClass('invalid');
            }
        }

    });


$("#txtSubjectContactUs").keydown(function (e) {
        // alert('1');
        var code = e.keyCode || e.which;
        if (code == '9') {
            var Subject = $('#txtSubjectContactUs').val();
            if ($.trim(Subject) == '') {
                $("#txtSubjectContactUs").addClass('invalid');
            }
            else {
                $("#errSubjectContactUs").empty();
                $("#txtSubjectContactUs").removeClass('invalid');

            }
        }

    });

$("#txtSubjectContactUs").change(function () {
    var Subject = $('#txtSubjectContactUs').val();

        if ($.trim(Subject) != '') {
            $("#txtSubjectContactUs").removeClass('invalid');
        }
    });


$("#txtCommentsContactUs").change(function () {
    var Comments = $('#txtCommentsContactUs').val();
        if ($.trim(Comments) != '') {
            $("#txtCommentsContactUs").removeClass('invalid');

        }
    });

$("#txtCommentsContactUs").keydown(function (e) {

        var code = e.keyCode || e.which;
        if (code == '9') {
            //   alert($('#txtComments').val());
            var Comments = $('#txtCommentsContactUs').val();

            if ($.trim($('#txtCommentsContactUs').val()) == '') {
                $("#txtCommentsContactUs").addClass('invalid');
            }
            else {
                $("#errCommentsContactUs").empty();
                $("#txtCommentsContactUs").removeClass('invalid');
            }
        }
    });

    var text_Description = 750;
    $('#txtComment_textContactUs').html(text_Description + ' characters remaining');
    var text_length = $('#txtCommentsContactUs').val().length;
    var text_remaining = text_Description - text_length;
    $('#txtComment_textContactUs').html(text_remaining + ' characters remaining');

    $('#txtCommentsContactUs').keyup(function () {
        var text_length = $('#txtCommentsContactUs').val().length;
        var text_remaining = text_Description - text_length;

        $('#txtComment_textContactUs').html(text_remaining + ' characters remaining');
    });
//***********************Submit event ************************************************//

    $("#btnSubmitContactUs").click(function () {
    
        var isValid = true;

        var sSalutation = $("#drpdwnSalutationContactUs").val();
        if ($.trim(sSalutation) == '') {
            $("#drpdwnSalutationContactUs").addClass('invalid');
            isValid = false;
        }



        var sFirstName = $("#txtFirstNameContactUs").val();
        if ($.trim(sFirstName) == '') {
            $("#txtFirstNameContactUs").addClass('invalid');
            isValid = false;
        }

        var sLastName = $("#txtLastNameContactUs").val();
        if ($.trim(sLastName) == '') {
            $("#txtLastNameContactUs").addClass('invalid');
            isValid = false;
        }

        var sCompany = $("#txtCompanyContactUs").val();
        if ($.trim(sCompany) == '') {
            $("#txtCompanyContactUs").addClass('invalid');
            isValid = false;
        }

        var sJobTitle = $("#drpdwnJobTitleContactUs").val();
        if ($.trim(sJobTitle) == '') {
            $("#drpdwnJobTitleContactUs").addClass('invalid');
            isValid = false;
        }

        var sAddress1 = $("#txtAddress1ContactUs").val();
        if ($.trim(sAddress1) == '') {
            $("#txtAddress1ContactUs").addClass('invalid');
            isValid = false;
        }

        var sAddress2 = $("#txtAddress2ContactUs").val();

        var sCity = $("#txtCityContactUs").val();
        if ($.trim(sCity) == '') {
            $("#txtCityContactUs").addClass('invalid');
            isValid = false;
        }


        var sState = $("#drpdwnStateContactUs").val();
        if (sState == 0) {
            $("#drpdwnStateContactUs").addClass("invalid");
            isValid = false;
        }

        var sZip = $("#txtZipContactUs").val();
        if ($.trim(sZip) == '') {
            $("#txtZipContactUs").addClass('invalid');
            isValid = false;
        }

        var sPhone = $("#txtTelephoneContactUs").val();
        if ($.trim(sPhone) == '') {
            $("#txtTelephoneContactUs").addClass('invalid');
            isValid = false;
        }

        var sWebsite = $("#txtWebsiteURLContactUs").val();
        if ($.trim(sWebsite) != '') {
            var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
            var emailaddressVal = $("#txtWebsiteURLContactUs").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errWebsiteContactUs").empty();
                $("#errWebsiteContactUs").append("*Invalid Website URL");
                isValid = false;
            }
        }
    
        var sBuyingGroup = $("#drpdwnBuyingGroupContactUs").val();
        if (sBuyingGroup == 0) {
            $("#drpdwnBuyingGroupContactUs").addClass('invalid');
            isValid = false;
        }

        var sSubject = $("#txtSubjectContactUs").val();
        if ($.trim(sSubject) == '') {
            $("#txtSubjectContactUs").addClass('invalid');
            isValid = false;
        }


        var sComments = $("#txtCommentsContactUs").val();

        var sEmail = $("#txtEmailAddressContactUs").val();
        if ($.trim(sEmail) == '') {
            $("#txtEmailAddressContactUs").addClass('invalid');
            isValid = false;
        }
        if ($.trim(sEmail) != '') {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var emailaddressVal = $("#txtEmailAddress").val();
            if (!emailReg.test(emailaddressVal)) {
                $("#errEmailAddressContactUs").empty();
                $("#txtEmailAddressContactUs").addClass('invalid');
                $("#errEmailAddressContactUs").append("*Invalid Email");
                isValid = false;
            }
        }

        
        //Captcha Response
        var response = grecaptcha.getResponse();

        //Captcha Response verified
        if (response.length == 0) {
            //reCaptcha not verified

            $("#spcaptcha").empty();
            $("#spcaptcha").append("*Captcha Required");
            isValid = false;

        }
        else {

            $("#spcaptcha").empty();

            //isValid = true;
        }
        


        if (isValid == true) {


            var url = sitesetting.AvalonDataServicesPath + "ContactUs/ServicePages/ContactUs.ashx?Salutation=" + sSalutation + "&FirstName=" + sFirstName + "&LastName=" + sLastName + "&Company=" + sCompany + "&JobTitle=" + sJobTitle + "&Address1=" + sAddress1 + "&Address2=" + sAddress2 + "&City=" + sCity + "&State=" + sState + "&Zip=" + sZip + "&Phone=" + sPhone + "&Website=" + sWebsite + "&BuyingGroup=" + sBuyingGroup + "&Subject=" + sSubject + "&Comments=" + sComments + "&Email=" + sEmail + "&response=" + response;

            $.getJSON(url, function (json) {
                if (json == 'success') {
                    $("#ContactForm").css({ display: "none" });
                    $(".mainBox2").css({ display: "none" });
                    $(".req").css({ display: "none" });
                    $(".ContactForm h4 span").css("display", "none");


                    $("#ContactUsConfirmation").css("display", "block");
                    $("#HeadrContactUs").css("display", "none");
                    $("#divMsgB2C").css("display", "block");
                    $("#divMsgB2CC").css("display", "none");
                    $(".CFormFields").css("display", "none")

                    Loader(false);
                } });

           
        }
        else {
            return isValid;
        }
       

    });


   

    //end of submit button click funtion

    //$("#txtComments").charCounter(300, {
    //    container: "<div class='pull-right'></div>",
    //    format: "%1 characters remaining.",
    //    pulse: false,
    //    delay: 100
    //});


    function Loader(isFade) {
        if (isFade) {

            // $('#ContactUsForm').fadeOut(1000);
            $('#progressBackgroundFilter').fadeIn();
            $('#loadingbox').fadeIn();
            $('#Loader').fadeIn();
        } else {

            //$('#ContactUsForm').fadeIn(1000);
            $('#progressBackgroundFilter').fadeOut();
            $('#loadingbox').fadeOut();
            $('#Loader').fadeOut();
        }
    }


//});







