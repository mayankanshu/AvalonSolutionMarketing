//var tradeshow = [];

$(document).ready(function () {

    var url = sitesetting.AvalonDataServicesPath + "Company/ServicePages/TradeShowDetails.ashx";
    $.getJSON(url, function (json) {
        var tradeshowHtml = '<table cellspacing="0" cellpadding="0" border="0" bgcolor="#1c67a0" width="100%">'
        tradeshowHtml += '<thead class="formheading">'
        tradeshowHtml += '<tr>'
        tradeshowHtml += '<th width="36" height="48">&nbsp;</th>'
        tradeshowHtml += '<th align="left" width="181">Trade Show</th>'
        tradeshowHtml += '<th align="left" width="139">Show Dates</th>'
        tradeshowHtml += '<th align="left" width="282">Location</th>'
        tradeshowHtml += '<th align="center" width="114">'
        tradeshowHtml += 'Make an<br> Appointment'
        tradeshowHtml += '</th>'
        tradeshowHtml += ' </tr>'
        tradeshowHtml += '</thead>'
        tradeshowHtml += '<tbody class="TradeShowInner">'
        for (var i = 0 ; i < json.length; i++) {

            tradeshowHtml += '<tr>'
            tradeshowHtml += '<td>' + (parseInt(i) + 1) + '.</td>'
            tradeshowHtml += '<td>' + json[i].TradeShowName + '</td>'
            tradeshowHtml += '<td>' + json[i].ShowDates + '</td>'
            if (json[i].BoothNo != "") {
                tradeshowHtml += '<td>' + json[i].Location + '</br>' + json[i].BoothNo + '</td>'
            }
            else {
                tradeshowHtml += '<td>' + json[i].Location + '</td>'
            }
            tradeshowHtml += '<td>'
            tradeshowHtml += '<a data-toggle="modal" onclick="getShowInfo(' + json[i].Id + ');" data-target="#MakeanAppointment"><img border="0" src="' + sitesetting.AvalonDataDesinTemplatesPath + 'images/make_an_btn.png" onmouseover="this.src=' + sitesetting.AvalonDataDesinTemplatesPath + ' images/make_an_btnH.png" onmouseout="this.src=' + sitesetting.AvalonDataDesinTemplatesPath + 'images/make_an_btn.png" style="padding: 5px 0 5px 5px; cursor:pointer;" alt="Make an Appointment" title="Make an Appointment"></a>'
            tradeshowHtml += '</td>'
            tradeshowHtml += '</tr>'
        }

        tradeshowHtml += '</tbody>'
        tradeshowHtml += '</table>'

        $('#TradeShowDetails').html(tradeshowHtml);


    });



});




//*************************Modal Pop Up Opening Function*******************************//

function getShowInfo(sender) {

    //**************Start On Modal Pop Up Filled  Details Removed*************///
    $('#MakeanAppointment').on('hidden.bs.modal', function (e) {
        //grecaptcha.reset();
        $(".radioTradeShow").prop("checked", false);
        $(this)
          .find("input,textarea,select").val('').end()
        .find("input,textarea,select").removeClass('invalid').end()
          .find("span").empty().end()
            .find("#rdAvalonCustomer").removeClass('invalid').end()
             .find('form').trigger('reset').end()
             .find("#drpdwnState").val('- Select -').end()
            .find("#CustomerYes").val('Yes').end()
            .find("#CustomerNo").val('No').end();


    })

    $("#TradeShowSuccess").css("display", "none");
    $("#LuxuryShowSuccess").css("display", "none");
    $("#TradeShowAppointmentForm").css("display", "block");

    grecaptcha.reset();

    //*****End On Modal Pop Up Filled  Details Removed*************///

    var url = sitesetting.AvalonDataServicesPath + "Company/ServicePages/TradeShowDetails.ashx?Id=" + sender;
    $.getJSON(url, function (json) {

        for (var i = 0; i < json.length; i++) {

            //****Start Empty DropDown of Date On Re-Populating ******//

            $("select#ddlSelectDate").empty();
            $("select#ddlSelectDate").append('<option value=""> Select Date </option>');
            

            //******************End Empty DropDown of Date On Re-Populating ***************************///

            //******************Start Left Hand Side Show Details And Heading Of Form ***************************///
            var seletedtradeshowhml = json[i].TradeShowHtml;

            $("#ShowHead").empty();
            $("#ShowHead").append("Please visit us at the '" + json[i].TradeShowName + "' ");
            $("#hdnShowName").val(json[i].TradeShowName);
            $("#hdnBoothNumber").val(json[i].BoothNo);
            //******************End Left Hand Side Show Details And Heading Of Form ***************************///


            //*********************************************Start Appointment Date****************************//          
            var start = new Date(json[i].StartShowDate);
            var end = new Date(json[i].EndShowDate);


            var betweenDate = getDates(start, end);

            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";



            for (var j = 0 ; j < betweenDate.length; j++) {

                var key = betweenDate[j];
                var value = weekday[betweenDate[j].getDay()] + ", " + month[betweenDate[j].getMonth()] + " " + betweenDate[j].getDate() + ", " + betweenDate[j].getUTCFullYear();
                $("select#ddlSelectDate").append('<option value="' + value + '">' + value + '</option>');

            }
            $("select#ddlSelectDate").append('<option value="Will Stop By">Will Stop By</option>');

        }
        $('#SelectedTradeShow').html(seletedtradeshowhml);


    });

};


function getDates(start, end) {

    var datesArray = [];

    var startDate = new Date(start);
    datesArray.splice(0, datesArray.length);
    while (startDate <= end) {

        datesArray.push(new Date(startDate));

        startDate.setDate(startDate.getDate() + 1);
    }
    return datesArray;

}

//******************************End Appointment Date End************************************//

//***************************** Call Service For State *************************************//

var urlState = sitesetting.AvalonDataServicesPath + 'Shared/ServicePages/State.ashx';



$.ajax({
    url: sitesetting.AvalonDataServicesPath + 'Shared/ServicePages/State.ashx',
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
                $("#drpdwnState").append('<option value="' + state.StateCode + '">' + state.StateName + '</option>');
            }

        });
    }
});

//***********************************change Event**********************************////

$("#txtContactPerson").change(function () {
    var FullName = $('#txtContactPerson').val();
    if ($.trim(FullName) != '') {
        $("#txtContactPerson").removeClass('invalid');
    }
});

$("#txtContactPerson").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var FullName = $("#txtContactPerson").val();
        if ($.trim(FullName) == '') {
            $("#txtContactPerson").addClass('invalid');
        }
        else {
            $("#txtContactPerson").removeClass('invalid');
        }
    }

});

$("#txtStoreName").change(function () {
    var Company = $('#txtStoreName').val();
    if ($.trim(Company) != '') {
        $("#txtStoreName").removeClass('invalid');
    }
});

$("#txtStoreName").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var Company = $("#txtStoreName").val();
        if ($.trim(Company) == '') {
            $("#txtStoreName").addClass('invalid');
        }
        else {
            $("#txtStoreName").removeClass('invalid');
        }
    }

});

$("#txtCity").change(function () {
    var ContactNo = $('#txtCity').val();
    if ($.trim(ContactNo) != '') {
        $("#txtCity").removeClass('invalid');

    }
});

$("#txtCity").keydown(function (e) {
    var code = e.keyCode || e.which;
    if (code == '9') {
        var ContactNo = $('#txtCity').val();
        if ($.trim(ContactNo) == '') {
            $("#txtCity").addClass('invalid');

        }
        else {
            $("#txtCity").removeClass('invalid');
        }
    }

});

$("#drpdwnState").change(function () {

    var State = $('#drpdwnState').val();
    if ($.trim(State) != '') {
        $("#drpdwnState").removeClass('invalid');
    }
});

$("#drpdwnState").keydown(function (e) {
    var code = e.keyCode || e.which;
    if (code == '9') {
        var State = $('#drpdwnState').val();
        if ($.trim(State) == '') {
            $("#drpdwnState").addClass('invalid');
        }
        else {
            $("#drpdwnState").removeClass('invalid');
        }
    }

});

$("#txtTelephoneTradeShow").change(function () {
    var ContactNo = $('#txtTelephoneTradeShow').val();
    if ($.trim(ContactNo) != '') {
        $("#txtTelephoneTradeShow").removeClass('invalid');

    }
});

$("#txtTelephoneTradeShow").keydown(function (e) {
    var code = e.keyCode || e.which;
    if (code == '9') {
        var ContactNo = $('#txtTelephoneTradeShow').val();
        if ($.trim(ContactNo) == '') {
            $("#txtTelephoneTradeShow").addClass('invalid');

        }
        else {
            $("#txtTelephoneTradeShow").removeClass('invalid');
        }
    }

});

$("#txtEmailTradeShow").change(function () {
    var chkEmail = $("#txtEmailTradeShow").val();
    if ($.trim(chkEmail) != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#txtEmailTradeShow").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#errEmailTradeShow").empty();
            $("#errEmailTradeShow").append("*Invalid Email");
            $("#txtEmailTradeShow").addClass('invalid');
            return false
        }
        else {
            $("#errEmailTradeShow").empty();
            $("#txtEmailTradeShow").removeClass('invalid');
        }
    }
    else {
        $("#errEmailTradeShow").empty();
        $("#txtEmailTradeShow").removeClass('invalid');

    }
    if ($.trim(chkEmail) == '') {
        $("#errEmailTradeShow").empty();
        $("#txtEmailTradeShow").addClass('invalid');
    }
});

$("#txtEmailTradeShow").keydown(function (e) {

    var code = e.keyCode || e.which;
    if (code == '9') {
        var chkEmail = $("#txtEmailTradeShow").val();
        if ($.trim(chkEmail) == '') {
            $("#txtEmailTradeShow").addClass('invalid');
        }
        else {
            $("#txtEmailTradeShow").removeClass('invalid');
        }
    }

});

$("#ddlSelectDate").change(function () {

    var AppointmentDate = $('#ddlSelectDate').val();
    if ($.trim(AppointmentDate) != '') {
        $("#ddlSelectDate").removeClass('invalid');
    }
});

$("#ddlSelectDate").keydown(function (e) {
    var code = e.keyCode || e.which;
    if (code == '9') {
        var AppointmentDate = $('#ddlSelectDate').val();
        if ($.trim(AppointmentDate) == '') {
            $("#ddlSelectDate").addClass('invalid');
        }
        else {
            $("#ddlSelectDate").removeClass('invalid');
        }
    }

});

$("#ddlSelectTime").change(function () {

    var AppointmentTime = $('#ddlSelectTime').val();
    if ($.trim(AppointmentTime) != '') {
        $("#ddlSelectTime").removeClass('invalid');
    }
});

$("#ddlSelectTime").keydown(function (e) {
    var code = e.keyCode || e.which;
    if (code == '9') {
        var AppointmentTime = $('#ddlSelectTime').val();
        if ($.trim(AppointmentTime) == '') {
            $("#ddlSelectTime").addClass('invalid');
        }
        else {
            $("#ddlSelectTime").removeClass('invalid');
        }
    }

});

$('input[type="radio"]').on('click change', function (e) {
    var AvalonCustomer = $('input[name="radio"]:checked').val();
    if ($.trim(AvalonCustomer) != '') {
        $("#rdAvalonCustomer").removeClass('invalid');
    }
});

//*****************Submit Event*********************//

$("#btnSubmitTradeShow").click(function () {

    var isValid = true;

    var TradeShow = $("#hdnShowName").val();

    var BoothNo = $("#hdnBoothNumber").val();
    

    var ContactPerson = $("#txtContactPerson").val();
    if ($.trim(ContactPerson) == '') {
        $("#txtContactPerson").addClass('invalid');
        isValid = false;
    }
    else {
        $("#txtContactPerson").removeClass('invalid');
    }

    var StoreName = $("#txtStoreName").val();
    if ($.trim(StoreName) == '') {
        $("#txtStoreName").addClass('invalid');
        isValid = false;
    }

    var City = $("#txtCity").val();
    if ($.trim(City) == '') {
        $("#txtCity").addClass('invalid');
        isValid = false;
    }

    var State = $("#drpdwnState").val();
    if ($.trim(State) == '') {
        $("#drpdwnState").addClass('invalid');
        isValid = false;
    }


    var AppointmentDate = $("#ddlSelectDate").val();
    if ($.trim(AppointmentDate) == '') {
        $("#ddlSelectDate").addClass('invalid');
        isValid = false;
    }

    var Telephone = $("#txtTelephoneTradeShow").val();
    if ($.trim(Telephone) == '') {
        $("#txtTelephoneTradeShow").addClass('invalid');
        isValid = false;
    }


    var Email = $("#txtEmailTradeShow").val();
    if ($.trim(Email) == '') {
        $("#txtEmailTradeShow").addClass('invalid');
        isValid = false;
    }
    if ($.trim(Email) != '') {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = $("#txtEmailTradeShow").val();
        if (!emailReg.test(emailaddressVal)) {
            $("#errEmailTradeShow").empty();
            $("#errEmailTradeShow").append("*Invalid Email");
            isValid = false;
        }
    }


    var AppointmentTime = $("#ddlSelectTime").val();
    if ($.trim(AppointmentTime) == '') {
        $("#ddlSelectTime").addClass('invalid');
        isValid = false;
    }

    var AvalonCustomer = $('input[name="radio"]:checked').val();
    if ($.trim(AvalonCustomer) == '') {
        $("#rdAvalonCustomer").addClass('invalid');
        isValid = false;
    }


    var Comments = $("#txtComments").val();

    
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

        var url = sitesetting.AvalonDataServicesPath + "Company/ServicePages/TradeShowAppointment.ashx?ContactPerson=" + ContactPerson + "&StoreName=" + StoreName + "&City=" + City + "&State=" + State + "&Phone=" + Telephone + "&Email=" + Email + "&AppointmentDate=" + AppointmentDate + "&AppointmentTime=" + AppointmentTime + "&AvalonCustomer=" + AvalonCustomer + "&TradeShow=" + TradeShow + "&Comments=" + Comments + "&BoothNo=" + encodeURIComponent(BoothNo) + "&response=" + response;
       


        $.getJSON(url, function (json) {
            //if (json == 'success') {
            $("#TradeShowSuccess").css("display", "block");
            $("#TradeShowAppointmentForm").css("display", "none");
            $("#appointmentDetails").empty();
            $("#appointmentDetails").append(TradeShow);
            $("#appointmentDates").empty();
            $("#appointmentDates").append(AppointmentDate);
            $("#appointmentTime").empty();
            $("#appointmentTime").append(AppointmentTime);
            Loader(false);
            if (json == 'Luxury Show' || json == 'Luxury / JCK Show') {
                $("#LuxuryShowSuccess").css("display", "block");
            }
        });
    }
    else {
        return isValid;
    }
});
