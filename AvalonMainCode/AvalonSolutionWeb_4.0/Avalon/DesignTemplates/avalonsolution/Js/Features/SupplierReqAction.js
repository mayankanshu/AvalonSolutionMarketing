//Supplier Request Form - Action Page
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
                $("#ddlRetailStates").append('<option value="' + state.StateCode + '">' + state.StateName + '</option>');
                $("#ddlSupplierStates").append('<option value="' + state.StateCode + '">' + state.StateName + '</option>');
            }

        });
    }
});


// *********************Change Event***********************************************//

$("#Retailercompname").change(function () {
    var Retailercomp = $('#Retailercompname').val();
    if ($.trim(Retailercomp) != '') {
        $("#Retailercompname").removeClass('invalid');
    }
});

$("#Retailercompname").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var Retailercomp = $("#Retailercompname").val();
        if ($.trim(Retailercomp) == '') {
            $("#Retailercompname").addClass('invalid');
        }
        else {
            $("#Retailercompname").removeClass('invalid');
        }
    }

});

$("#RetailerCity").change(function () {
    var Retailercity = $('#RetailerCity').val();
    if ($.trim(Retailercity) != '') {
        $("#RetailerCity").removeClass('invalid');
    }
});

$("#RetailerCity").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var Retailercity = $("#RetailerCity").val();
        if ($.trim(Retailercity) == '') {
            $("#RetailerCity").addClass('invalid');
        }
        else {
            $("#RetailerCity").removeClass('invalid');
        }
    }

});

$("#ddlRetailStates").change(function () {
    var RetailerState = $('#ddlRetailStates').val();
    if ($.trim(RetailerState) != '') {
        $("#ddlRetailStates").removeClass('invalid');
    }
});

$("#ddlRetailStates").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var RetailerState = $("#ddlRetailStates").val();
        if ($.trim(RetailerState) == '') {
            $("#ddlRetailStates").addClass('invalid');
        }
        else {
            $("#ddlRetailStates").removeClass('invalid');
        }
    }

});

$("#RetailerZip").change(function () {
    var RetailerZip = $('#RetailerZip').val();
    if ($.trim(RetailerZip) != '') {
        $("#RetailerZip").removeClass('invalid');
    }
});

$("#RetailerZip").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var RetailerZip = $("#RetailerZip").val();
        if ($.trim(RetailerZip) == '') {
            $("#RetailerZip").addClass('invalid');
        }
        else {
            $("#RetailerZip").removeClass('invalid');
        }
    }

});

$("#RetailerCountry").change(function () {
    var RetailerCountry = $('#RetailerCountry').val();
    if ($.trim(RetailerCountry) != '') {
        $("#RetailerCountry").removeClass('invalid');
    }
});

$("#RetailerCountry").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var RetailerCountry = $("#RetailerCountry").val();
        if ($.trim(RetailerCountry) == '') {
            $("#RetailerCountry").addClass('invalid');
        }
        else {
            $("#RetailerCountry").removeClass('invalid');
        }
    }

});

$("#RetailerEmailID").change(function () {
    var chkEmail = $("#RetailerEmailID").val();
    if ($.trim(chkEmail) != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#RetailerEmailID").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#errEmailRetailer").empty();
            $("#errEmailRetailer").append("*Invalid Email");
            $("#RetailerEmailID").addClass('invalid');
            return false
        }
        else {
            $("#errEmailRetailer").empty();
            $("#RetailerEmailID").removeClass('invalid');
        }
    }
    else {
        $("#errEmailRetailer").empty();
        $("#RetailerEmailID").removeClass('invalid');

    }
    if ($.trim(chkEmail) == '') {
        $("#errEmailRetailer").empty();
        $("#RetailerEmailID").addClass('invalid');
    }
});

$("#RetailerEmailID").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var chkEmail = $("#RetailerEmailID").val();
        if ($.trim(chkEmail) == '') {
            $("#RetailerEmailID").addClass('invalid');
        }
        else {
            $("#RetailerEmailID").removeClass('invalid');
        }
    }

});



$("#SupplierCompName").change(function () {
    var SupplierCompName = $('#SupplierCompName').val();
    if ($.trim(SupplierCompName) != '') {
        $("#SupplierCompName").removeClass('invalid');
    }
});

$("#SupplierCompName").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var SupplierCompName = $("#SupplierCompName").val();
        if ($.trim(SupplierCompName) == '') {
            $("#SupplierCompName").addClass('invalid');
        }
        else {
            $("#SupplierCompName").removeClass('invalid');
        }
    }

});

$("#SupplierCity").change(function () {
    var SupplierCity = $('#SupplierCity').val();
    if ($.trim(SupplierCity) != '') {
        $("#SupplierCity").removeClass('invalid');
    }
});

$("#SupplierCity").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var SupplierCity = $("#SupplierCity").val();
        if ($.trim(SupplierCity) == '') {
            $("#SupplierCity").addClass('invalid');
        }
        else {
            $("#SupplierCity").removeClass('invalid');
        }
    }

});

$("#ddlSupplierStates").change(function () {
    var SupplierStates = $('#ddlSupplierStates').val();
    if ($.trim(SupplierStates) != '') {
        $("#ddlSupplierStates").removeClass('invalid');
    }
});

$("#ddlSupplierStates").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var SupplierStates = $("#ddlSupplierStates").val();
        if ($.trim(SupplierStates) == '') {
            $("#ddlSupplierStates").addClass('invalid');
        }
        else {
            $("#ddlSupplierStates").removeClass('invalid');
        }
    }

});

$("#SupplierZip").change(function () {
    var SupplierZip = $('#SupplierZip').val();
    if ($.trim(SupplierZip) != '') {
        $("#SupplierZip").removeClass('invalid');
    }
});

$("#SupplierZip").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var SupplierZip = $("#SupplierZip").val();
        if ($.trim(SupplierZip) == '') {
            $("#SupplierZip").addClass('invalid');
        }
        else {
            $("#SupplierZip").removeClass('invalid');
        }
    }

});

$("#SupplierCountry").change(function () {
    var SupplierCountry = $('#SupplierCountry').val();
    if ($.trim(SupplierCountry) != '') {
        $("#SupplierCountry").removeClass('invalid');
    }
});

$("#SupplierCountry").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var SupplierCountry = $("#SupplierCountry").val();
        if ($.trim(SupplierCountry) == '') {
            $("#SupplierCountry").addClass('invalid');
        }
        else {
            $("#SupplierCountry").removeClass('invalid');
        }
    }

});

$("#SupplierEmailId").change(function () {
    var chkEmail = $("#SupplierEmailId").val();
    if ($.trim(chkEmail) != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#SupplierEmailId").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#errEmailSupplier").empty();
            $("#errEmailSupplier").append("*Invalid Email");
            $("#SupplierEmailId").addClass('invalid');
            return false
        }
        else {
            $("#errEmailSupplier").empty();
            $("#SupplierEmailId").removeClass('invalid');
        }
    }
    else {
        $("#errEmailSupplier").empty();
        $("#SupplierEmailId").removeClass('invalid');

    }
    if ($.trim(chkEmail) == '') {
        $("#errEmailSupplier").empty();
        $("#SupplierEmailId").addClass('invalid');
    }
});

$("#SupplierEmailId").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var chkEmail = $("#SupplierEmailId").val();
        if ($.trim(chkEmail) == '') {
            $("#SupplierEmailId").addClass('invalid');
        }
        else {
            $("#SupplierEmailId").removeClass('invalid');
        }
    }

});

$("#SupplierContPerTitle").change(function () {
    var SupplierContPerTitle = $('#SupplierContPerTitle').val();
    if ($.trim(SupplierContPerTitle) != '') {
        $("#SupplierContPerTitle").removeClass('invalid');
    }
});

$("#SupplierContPerTitle").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var SupplierContPerTitle = $("#SupplierContPerTitle").val();
        if ($.trim(SupplierContPerTitle) == '') {
            $("#SupplierContPerTitle").addClass('invalid');
        }
        else {
            $("#SupplierContPerTitle").removeClass('invalid');
        }
    }

});

$("#SupplierContPos").change(function () {
    var SupplierContPos = $('#SupplierContPos').val();
    if ($.trim(SupplierContPos) != '') {
        $("#SupplierContPos").removeClass('invalid');
    }
});

$("#SupplierContPos").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var SupplierContPos = $("#SupplierContPos").val();
        if ($.trim(SupplierContPos) == '') {
            $("#SupplierContPos").addClass('invalid');
        }
        else {
            $("#SupplierContPos").removeClass('invalid');
        }
    }

});

$("#SupplierContEmailId").change(function () {
    var chkEmail = $("#SupplierContEmailId").val();
    if ($.trim(chkEmail) != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#SupplierContEmailId").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#errEmailContSupplier").empty();
            $("#errEmailContSupplier").append("*Invalid Email");
            $("#SupplierContEmailId").addClass('invalid');
            return false
        }
        else {
            $("#errEmailContSupplier").empty();
            $("#SupplierContEmailId").removeClass('invalid');
        }
    }
    else {
        $("#errEmailContSupplier").empty();
        $("#SupplierContEmailId").removeClass('invalid');

    }

});

//$("#ReqEmailCC").change(function () {
//    var chkEmail = $("#ReqEmailCC").val();
//    if ($.trim(chkEmail) != '') {
//        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//        var emailaddressVal = $("#ReqEmailCC").val();
//        if (!emailReg.test(emailaddressVal)) {
//            $("#errReqEmailCC").empty();
//            $("#errReqEmailCC").append("*Invalid Email");
//            $("#ReqEmailCC").addClass('invalid');
//            return false
//        }
//        else {
//            $("#errReqEmailCC").empty();
//            $("#ReqEmailCC").removeClass('invalid');
//        }
//    }
//    else {
//        $("#errReqEmailCC").empty();
//        $("#ReqEmailCC").removeClass('invalid');

//    }
//    if ($.trim(chkEmail) == '') {
//        $("#errReqEmailCC").empty();
//        $("#ReqEmailCC").addClass('invalid');
//    }
//});

//$("#txtEmailAddressContactUs").change(function () {
//    var chkEmail = $("#txtEmailAddressContactUs").val();
//    if ($.trim(chkEmail) != '') {
//        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//        var emailaddressVal = $("#txtEmailAddressContactUs").val();
//        if (!emailReg.test(emailaddressVal)) {
//            $("#errEmailAddressContactUs").empty();
//            $("#errEmailAddressContactUs").append("*Invalid Email");
//            $("#txtEmailAddressContactUs").addClass('invalid');
//            return false
//        }
//        else {
//            $("#errEmailAddressContactUs").empty();
//            $("#txtEmailAddressContactUs").removeClass('invalid');
//        }
//    }
//    else {
//        $("#errEmailAddressContactUs").empty();
//        $("#txtEmailAddressContactUs").removeClass('invalid');

//    }
//    if ($.trim(chkEmail) == '') {
//        $("#errEmailAddressContactUs").empty();
//        $("#txtEmailAddressContactUs").addClass('invalid');
//    }
//});

//$("#txtEmailAddressContactUs").keydown(function (e) {

//    var code = e.keyCode || e.which;
//    if (code == '9') {
//        var chkEmail = $("#txtEmailAddressContactUs").val();
//        if ($.trim(chkEmail) == '') {
//            $("#txtEmailAddressContactUs").addClass('invalid');
//        }
//        else {
//            $("#txtEmailAddressContactUs").removeClass('invalid');
//        }
//    }

//});

//$("#txtWebsiteURLContactUs").change(function () {
//    var chkWebsite = $("#txtWebsiteURLContactUs").val();
//    if ($.trim(chkWebsite) != '') {
//        var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
//        var emailaddressVal = $("#txtWebsiteURLContactUs").val();
//        if (!emailReg.test(emailaddressVal)) {
//            $("#errWebsiteContactUs").empty();
//            $("#errWebsiteContactUs").append("*Invalid Website URl");
//            $("#txtWebsiteURLContactUs").addClass('invalid');
//            return false
//        }
//        else {
//            $("#errWebsiteContactUs").empty();
//            $("#txtWebsiteURLContactUs").removeClass('invalid');
//        }
//    }
//    else {
//        $("#errWebsiteContactUs").empty();
//        $("#txtWebsiteURLContactUs").removeClass('invalid');

//    }
//    if ($.trim(chkWebsite) == '') {
//        $("#errWebsiteContactUs").empty();
//        $("#txtWebsiteURLContactUs").addClass('invalid');
//    }
//});


//$("#drpdwnBuyingGroupContactUs").change(function () {

//    var BuyingGroup = $('#drpdwnBuyingGroupContactUs').val();
//    if ($.trim(BuyingGroup) != '') {
//        $("#drpdwnBuyingGroupContactUs").removeClass('invalid');
//    }
//});

//$("#drpdwnBuyingGroupContactUs").keydown(function (e) {
//    var code = e.keyCode || e.which;
//    if (code == '9') {
//        var BuyingGroup = $('#drpdwnBuyingGroupContactUs').val();
//        if ($.trim(BuyingGroup) == '') {
//            $("#drpdwnBuyingGroupContactUs").addClass('invalid');
//        }
//        else {
//            $("#drpdwnBuyingGroupContactUs").removeClass('invalid');
//        }
//    }

//});


//$("#txtSubjectContactUs").keydown(function (e) {
//    // alert('1');
//    var code = e.keyCode || e.which;
//    if (code == '9') {
//        var Subject = $('#txtSubjectContactUs').val();
//        if ($.trim(Subject) == '') {
//            $("#txtSubjectContactUs").addClass('invalid');
//        }
//        else {
//            $("#errSubjectContactUs").empty();
//            $("#txtSubjectContactUs").removeClass('invalid');

//        }
//    }

//});

//$("#txtSubjectContactUs").change(function () {
//    var Subject = $('#txtSubjectContactUs').val();

//    if ($.trim(Subject) != '') {
//        $("#txtSubjectContactUs").removeClass('invalid');
//    }
//});


//$("#txtCommentsContactUs").change(function () {
//    var Comments = $('#txtCommentsContactUs').val();
//    if ($.trim(Comments) != '') {
//        $("#txtCommentsContactUs").removeClass('invalid');

//    }
//});

//$("#txtCommentsContactUs").keydown(function (e) {

//    var code = e.keyCode || e.which;
//    if (code == '9') {
//        //   alert($('#txtComments').val());
//        var Comments = $('#txtCommentsContactUs').val();

//        if ($.trim($('#txtCommentsContactUs').val()) == '') {
//            $("#txtCommentsContactUs").addClass('invalid');
//        }
//        else {
//            $("#errCommentsContactUs").empty();
//            $("#txtCommentsContactUs").removeClass('invalid');
//        }
//    }
//});

//var text_Description = 750;
//$('#txtComment_textContactUs').html(text_Description + ' characters remaining');
//var text_length = $('#txtCommentsContactUs').val().length;
//var text_remaining = text_Description - text_length;
//$('#txtComment_textContactUs').html(text_remaining + ' characters remaining');

//$('#txtCommentsContactUs').keyup(function () {
//    var text_length = $('#txtCommentsContactUs').val().length;
//    var text_remaining = text_Description - text_length;

//    $('#txtComment_textContactUs').html(text_remaining + ' characters remaining');
//});

$('#SupplierEmailId').blur(function (e) {

    $('#ReqEmailTo').val($(this).val());

});

$('#SupplierContEmailId').blur(function (e) {

    $('#ReqEmailCC').val($(this).val());

});
var text_Description = 300;
$('#txtComment_txtcommentSuppReq').html(text_Description + ' Characters Remaining');
var text_length = $('#txtcommentSuppReq').val().length;
var text_remaining = text_Description - text_length;
$('#txtComment_txtcommentSuppReq').html(text_remaining + ' Characters Remaining');

$('#txtcommentSuppReq').keyup(function () {
    var text_length = $('#txtcommentSuppReq').val().length;
    var text_remaining = text_Description - text_length;

    $('#txtComment_txtcommentSuppReq').html(text_remaining + ' Characters Remaining');
});


//***********************Submit event ************************************************//

$("#btnSendInvitation").click(function () {

    var isValid = true;

    var Retailtxtcompname = $("#Retailercompname").val();
    if ($.trim(Retailtxtcompname) == '') {
        $("#Retailercompname").addClass('invalid');
        isValid = false;
    }
    
    var RetailerCityName = $("#RetailerCity").val();
    if ($.trim(RetailerCityName) == '') {
        $("#RetailerCity").addClass('invalid');
        isValid = false;
    }


    var RetailStatesName = $("#ddlRetailStates").val();
    if ($.trim(RetailStatesName) == '') {
        $("#ddlRetailStates").addClass('invalid');
        isValid = false;
    }

    var RetailerZip = $("#RetailerZip").val();
    if ($.trim(RetailerZip) == '') {
        $("#RetailerZip").addClass('invalid');
        isValid = false;
    }
    var RetailerCountryName = $("#RetailerCountry").val();
    if ($.trim(RetailerCountryName) == '') {
        $("#RetailerCountry").addClass('invalid');
        isValid = false;
    }

    var RetailerEmail = $("#RetailerEmailID").val();
    if ($.trim(RetailerEmail) == '') {
        $("#RetailerEmailID").addClass('invalid');
        isValid = false;
    }
    if ($.trim(RetailerEmail) != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#RetailerEmailID").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#errEmailRetailer").empty();
            $("#RetailerEmailID").addClass('invalid');
            $("#errEmailRetailer").append("*Invalid Email");
            isValid = false;
        }
    }
    
    var sWebsite = $("#RetailerWebsite").val();
    if ($.trim(sWebsite) != '') {
        var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
        var emailaddressVal = $("#RetailerWebsite").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#urlerror").empty();
            $("#urlerror").append("*Invalid Website URL");
            isValid = false;
        }
    }
    
    var Suppliercompname = $("#SupplierCompName").val();
    if ($.trim(Suppliercompname) == '') {
        $("#SupplierCompName").addClass('invalid');
        isValid = false;
    }

    var SupplierCityName = $("#SupplierCity").val();
    if ($.trim(SupplierCityName) == '') {
        $("#SupplierCity").addClass('invalid');
        isValid = false;
    }


    var SupplierStatesName = $("#ddlSupplierStates").val();
    if ($.trim(SupplierStatesName) == '') {
        $("#ddlSupplierStates").addClass('invalid');
        isValid = false;
    }

    var SupplierZip = $("#SupplierZip").val();
    if ($.trim(SupplierZip) == '') {
        $("#SupplierZip").addClass('invalid');
        isValid = false;
    }
    var SupplierCountryName = $("#SupplierCountry").val();
    if ($.trim(SupplierCountryName) == '') {
        $("#SupplierCountry").addClass('invalid');
        isValid = false;
    }

    var SupplierEmail = $("#SupplierEmailId").val();
    if ($.trim(SupplierEmail) == '') {
        $("#SupplierEmailId").addClass('invalid');
        isValid = false;
    }
    if ($.trim(SupplierEmail) != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#SupplierEmailId").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#errEmailSupplier").empty();
            $("#SupplierEmailId").addClass('invalid');
            $("#errEmailSupplier").append("*Invalid Email");
            isValid = false;
        }
    }

    var SupplierWeb = $("#SupplierWebsite").val();
    if ($.trim(SupplierWeb) != '') {
        var emailReg = /^(http(s)?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;
        var emailaddressVal = $("#SupplierWebsite").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#urlerror").empty();
            $("#urlerror").append("*Invalid Website URL");
            isValid = false;
        }
    }

    var SupplierContPerTitle = $("#SupplierContPerTitle").val();
    if ($.trim(SupplierContPerTitle) == '') {
        $("#SupplierContPerTitle").addClass('invalid');
        isValid = false;
    }

    var SupplierContPos = $("#SupplierContPos").val();
    if ($.trim(SupplierContPos) == '') {
        $("#SupplierContPos").addClass('invalid');
        isValid = false;
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
        var jsondata = {};
        jsondata.RetailerCompName = $("#Retailercompname").val();
        jsondata.RetailerAddress1 = $("#RetailerAddress1").val();
        jsondata.RetailerAddress2 = $("#RetailerAddress2").val();
        jsondata.RetailerCity = $("#RetailerCity").val();
        jsondata.ddlRetailStates = $("#ddlRetailStates").val();
        jsondata.RetailerZip = $("#RetailerZip").val();
        jsondata.RetailerCountry = $("#RetailerCountry").val();
        jsondata.RetailerPhone = $("#RetailerPhone").val();
        jsondata.RetailerPhoneExtn = $("#RetailerPhoneExtn").val();
        jsondata.RetailerEmailID = $("#RetailerEmailID").val();
        jsondata.RetailerWebsite = $("#RetailerWebsite").val();

        jsondata.SupplierCompName = $("#SupplierCompName").val();
        jsondata.SupplierAddress1 = $("#SupplierAddress1").val();
        jsondata.SupplierAddress2 = $("#SupplierAddress2").val();
        jsondata.SupplierCity = $("#SupplierCity").val();
        jsondata.ddlSupplierStates = $("#ddlSupplierStates").val();
        jsondata.SupplierZip = $("#SupplierZip").val();
        jsondata.SupplierCountry = $("#SupplierCountry").val();
        jsondata.SupplierPhone = $("#SupplierPhone").val();
        jsondata.SupplierPhoneExtn = $("#SupplierPhoneExtn").val();
        jsondata.SupplierFax = $("#SupplierFax").val();
        jsondata.SupplierEmailId = $("#SupplierEmailId").val();
        jsondata.SupplierWebsite = $("#SupplierWebsite").val();

        jsondata.SupplierContPerTitle = $("#SupplierContPerTitle").val();
        jsondata.SupplierContName = $("#SupplierContName").val();
        jsondata.SupplierContPos = $("#SupplierContPos").val();
        jsondata.SupplierContMob = $("#SupplierContMob").val();
        jsondata.SupplierContEmailId = $("#SupplierContEmailId").val();


        jsondata.ReqEmailTo = $("#ReqEmailTo").val();
        jsondata.ReqEmailCC = $("#ReqEmailCC").val();
        jsondata.comment = $("#txtcommentSuppReq").val();
        jsondata.response = response;
        console.log(jsondata);
        //jsondata.OrderComment = $("#ctl00_ContentPlaceHolder1_txtOrderComment").val();
        $.ajax({
            method: 'POST',
            url: sitesetting.AvalonDataServicesPath + "Features/ServicePages/SupplierRequest.ashx",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'dataType': 'json'
            },
            data: jsondata,
            //contenttype: 'application/json',
            success: function (response) {
                Loader(false);
                console.log(response);
                $('#confirmdiv').css({ display: "block" })
                $('#invitationdiv').css({ display: "none" })
            },
            failure: function (e) {
            }
        });
        
        //$.getJSON(url, function (json) {
        //    if (json == 'success') {
        //        $("#ContactForm").css({ display: "none" });
        //        $(".mainBox2").css({ display: "none" });
        //        $(".req").css({ display: "none" });
        //        $(".ContactForm h4 span").css("display", "none");


        //        $("#ContactUsConfirmation").css("display", "block");
        //        $("#HeadrContactUs").css("display", "none");
        //        $("#divMsgB2C").css("display", "block");
        //        $("#divMsgB2CC").css("display", "none");
        //        $(".CFormFields").css("display", "none")

        //        Loader(false);
        //    }
        //});


    }
    else {
        return isValid;
    }


});


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
