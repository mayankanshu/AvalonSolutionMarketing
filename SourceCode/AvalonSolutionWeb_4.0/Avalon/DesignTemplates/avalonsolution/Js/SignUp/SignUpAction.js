
var Salutation; var FirstName; var LastName; var Company;
var JobTitle; var Address1; var Address2; var City1; var State1; var Zip1; var Telephone; var Mobile;
var EmailAddress; var Website; var BuyingGroup; var Comments; var WebsitePlan; var WebsiteDesign
var myarray = []; var websitearray = []; var designarray = [];
var queryString = new Array();
var PricingWebsitePlan = [];
var selectedFiles = [];
var storeInfo = [];
var existingDomainName; var yearsInbuisness; var supplier1; var supplier2; var supplier3; var storehoursDays1; var storehoursDays2; var storehoursDays3; var formatted; var companyLogo; var storePictures;

$(document).ready(function () {
 
    $('#txtBusinessEstablishmentYear').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

    $("#txtBusinessEstablishmentYear").focus(function () {
        //alert('2')
        $("#spReqBusinessEstablishmentYear").text('')
        $("#txtBusinessEstablishmentYear").removeClass('invalid')

    });

    $("#txtBusinessEstablishmentYear").change(function () {
        var yearsInbuisness = $('#txtBusinessEstablishmentYear').val();
        if (yearsInbuisness != "") {
            if (yearsInbuisness.length < 4) {
                $("#spReqBusinessEstablishmentYear").text("Invalid Business Establishment Year.")
                $("#txtBusinessEstablishmentYear").addClass('invalid')
                // $("#txtBusinessEstablishmentYear").focus();
              //  isValid = false;
            }

            var startingYear = yearsInbuisness.slice(0, 1);
            if (startingYear == "0" || startingYear > 2) {
                $("#spReqBusinessEstablishmentYear").text("Invalid Business Establishment Year.")
                $("#txtBusinessEstablishmentYear").addClass('invalid')
                // $("#txtBusinessEstablishmentYear").focus();
                //isValid = false;
            }
            var currentYear = new Date().getFullYear();
           // alert(currentYear)
            if(parseInt(yearsInbuisness) > parseInt(currentYear))
            {
                $("#spReqBusinessEstablishmentYear").text("Invalid Business Establishment Year.")
                $("#txtBusinessEstablishmentYear").addClass('invalid')
            }


        }

        else {
            //$("#spReqBusinessEstablishmentYear").text("Mandatory field and cannot be left empty.")
            $("#txtBusinessEstablishmentYear").addClass('invalid')
            // $("#txtBusinessEstablishmentYear").focus();
           // isValid = false;
        }
    })

    $("#txtStoreBusinessDaysHours1").focus(function () {
        //alert('2')
        $("#spReqStoreBusinessDaysHours1").text("")
        $("#txtStoreBusinessDaysHours1").removeClass('invalid')
        

    })



    $("#txtExistingDomainName").change(function () {
       // alert(this.value.indexOf("http") )
        if (this.value != '') {
            if (this.value.indexOf("http") != 0)
                {
                if (this.value.indexOf("https") != 0) {
                    this.value = "http://" + this.value;
                }
            }
        }
        //$("#ContentPlaceHolder1_txtDesignerWebsite").removeClass('borderred')
        //$("#errWebsiteContactUs").empty();
    });


    $("#btnCompanyLogo").click(function () {
        $('#CompanyLogoField').removeClass('invalid')
        $('#spReqCompanyLogo').text('')
    });


    $("#btnCompanyLogo").on("change", function () {
      
        var compnaylogonew = document.getElementById('btnCompanyLogo').files[0].name.toLowerCase();
        if(compnaylogonew.indexOf('.jpg') !=-1 || compnaylogonew.indexOf('.png') !=-1 || compnaylogonew.indexOf('.gif') !=-1 || compnaylogonew.indexOf('.jpeg') !=-1)
        {
            $('#CompanyLogoField').removeClass('invalid')
            $('#spReqCompanyLogo').text('')
        }
        else
        {
            $('#CompanyLogoField').addClass('invalid')
            $('#spReqCompanyLogo').text('Invalid File Format! Allowed Formats: .jpg | .jpeg | .png | .gif')
        }

        var sizeCompanyLogo = parseFloat((document.getElementById('btnCompanyLogo').files[0].size / 1024) / 1024).toFixed(2);
       
        if (parseInt(sizeCompanyLogo) >= 2)
        {
            $('#CompanyLogoField').addClass('invalid')
            $('#spReqCompanyLogo').text('Maximum File Upload Size Allowed: 2 MB')
        }



    });

    document.getElementById('btnStorePictures').addEventListener('change', function (e) {
        $('#filelist').val("");
        var list = document.getElementById('filelist');
        list.innerHTML = '';
        var image = "";
        // console.log(list);
        // var newSelectedFiles=[];
       // alert(selectedFiles.length)
        selectedFiles = [];
        for (var i = 0; i < this.files.length; i++) {
            var tmppath = URL.createObjectURL(event.target.files[i]);
            //alert(tmppath)
            //image += '<input type="image" src="' + tmppath + '" />'
            list.innerHTML += '<li> ' + this.files[i].name + '<span onclick="removeSelectedFiles(' + i + ')" id=' + i + '">&times;</span>  </li>';
            selectedFiles.push(this.files[i]);
            
        }
        
        if (list.innerHTML == '') list.style.display = 'none';
        else list.style.display = 'block';
    });
  


    $("#btnStorePictures").on("change", function () {

        var storepicturenew = document.getElementById('btnStorePictures').files[0].name.toLowerCase();
        if (storepicturenew.indexOf('.jpg') != -1 || storepicturenew.indexOf('.png') != -1 || storepicturenew.indexOf('.gif') != -1 || storepicturenew.indexOf('.jpeg') != -1) {
            $('#StorePicturesField').removeClass('invalid')
            $('#spReqStoreLogo').text('')
        }
        else {
            $('#StorePicturesField').addClass('invalid')
            $('#spReqStoreLogo').text('Invalid File Format! Allowed Formats: .jpg | .jpeg | .png | .gif')

         
        }
        //alert('333')
        //alert(document.getElementById("btnStorePictures").files.length)
        if (document.getElementById("btnStorePictures").files.length > 5) {
            $('#StorePicturesField').addClass('invalid')
            $('#spReqStoreLogo').text('Limit Exceeded. Only 5 Store Pictures are allowed to Upload.')
        }


        var files = document.getElementById("btnStorePictures").files;
        //alert(files)
        for (var i = 0; i < files.length; i++) {
          //  alert(files[i].size)
            var sizeStorePicture = parseFloat((files[i].size / 1024) / 1024).toFixed(2);
           // alert(sizeStorePicture)
            if (parseInt(sizeStorePicture) >= 5) {
                $('#StorePicturesField').addClass('invalid')
                $('#spReqStoreLogo').text('Maximum File Upload Size Allowed: 5 MB')
               

            }
        }


      



    });

    $("#btnStorePictures").click(function () {
        $('#StorePicturesField').removeClass('invalid')
        $('#spReqStoreLogo').text('')
    });

    $("#txtBusinessEstablishmentYear").keydown(function (e) {
        if (e.shiftKey) e.preventDefault();
        else {
           
            var nKeyCode = e.keyCode;
            //Ignore Backspace and Tab keys
            if (nKeyCode == 8 || nKeyCode == 9) return;
            if (nKeyCode < 95) {
                if (nKeyCode < 48 || nKeyCode > 57) e.preventDefault();
            } else {
                if (nKeyCode < 96 || nKeyCode > 105) e.preventDefault();
            }
        }
    });


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
            $("#txtWebsiteURLSignUp").removeClass('invalid');
        }
    });


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

        myarray = [];
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
        //alert(sAddress1)
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
            //isValid = true;
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
                        $('[href=#SignupStoreInfoTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignAdvanced").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignupStoreInfoTab]').tab('show');
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
                        $('[href=#SignupStoreInfoTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignStandard").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignupStoreInfoTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignAdvanced").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignupStoreInfoTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignPremium").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignupStoreInfoTab]').tab('show');
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
                        $('[href=#SignupStoreInfoTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignStandard").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignupStoreInfoTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignAdvanced").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignupStoreInfoTab]').tab('show');
                        $("#upgradePlanPopup").css("display", "none");
                    });

                    $(".DesignPremium").click(function () {
                        var websiteDesign = jQuery(this).find('input').val();
                        designarray.splice(0, 1);
                        designarray.push(websiteDesign);
                        $('[href=#SignupStoreInfoTab]').tab('show');
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
          //  alert('2')
            //$("#CompanyInformation").focus();
            return isValid;
        }

  
   
   

    });

   

    //**************************Start Website Plan & Website Design*****************************************************************//



    jQuery(document).on('click', ".selectWebsitePlan", function () {
        websitearray.splice(0, 1);
        var websitePlan = jQuery(this).find('input').val();
        //if (websitePlan == 'Bronze')
        //{
            
        //}
        if (websitePlan == 'Bronze') {

            $("#imgSelectWebSitePlan").attr('src', "");
            $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/bronze.png");


            $(".DesignBasic").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
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
            websitePlan = "Starter";
        }


         
        else if (websitePlan == 'Silver') {

            $("#imgSelectWebSitePlan").attr('src', "");
            $("#imgSelectWebSitePlan").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "Images/Silver.png");

            $(".DesignBasic").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
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
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignAdvanced").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
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
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignAdvanced").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignPremium").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
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
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignStandard").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignAdvanced").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
                $("#upgradePlanPopup").css("display", "none");
            });

            $(".DesignPremium").click(function () {
                var websiteDesign = jQuery(this).find('input').val();
                designarray.splice(0, 1);
                designarray.push(websiteDesign);
                $('[href=#SignupStoreInfoTab]').tab('show');
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
        //var WebsiteDesign = designarray[0];
        designarray = [];
       // alert(WebsiteDesign)
        $('[href=#SignupStoreInfoTab]').tab('show');
    });

    $("#btnPreviousWebsiteDesign").click(function () {
       
        var prevIdWebsiteDesign = $(this).parents('.active').prev().attr("id");
        $('[href=#' + prevIdWebsiteDesign + ']').tab('show');
        

    });

    $("#btnPreviousStoreInfo").click(function () {
        var prevIdWebsitePlan = $(this).parents('.active').prev().attr("id");
        $('[href=#' + prevIdWebsitePlan + ']').tab('show');
    });

    $("#btnPreviousComment").click(function () {
        var prevIdWebsitePlan = $(this).parents('.active').prev().attr("id");
        $('[href=#' + prevIdWebsitePlan + ']').tab('show');
    });

   



    //**********************************End Website Plan & Website Design*********************************************************************//

    //************************************Store Info START*******************************************************************************************//
    $('#btnStoreInfoTab').click(function () {
        var  WebsitePlanNew = websitearray[0];

        if (WebsitePlanNew == 'Bronze') {

            $("#imgSelectWebsiteDesignFinal").attr('src', "");
            $("#imgSelectWebsiteDesignFinal").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/bronze.png");
        }
        else if (WebsitePlanNew == 'Silver') {
            $("#imgSelectWebsiteDesignFinal").attr('src', "");
            $("#imgSelectWebsiteDesignFinal").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/silver.png");
        }
        else if (WebsitePlanNew == 'Gold') {
            $("#imgSelectWebsiteDesignFinal").attr('src', "");
            $("#imgSelectWebsiteDesignFinal").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/gold.png");
        }
        else if (WebsitePlanNew == 'Platinum') {
            $("#imgSelectWebsiteDesignFinal").attr('src', "");
            $("#imgSelectWebsiteDesignFinal").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/plantilnum.png");
        }
        else if (WebsitePlanNew == 'Diamond') {
            $("#imgSelectWebsiteDesignFinal").attr('src', "");
            $("#imgSelectWebsiteDesignFinal").attr('src', sitesetting.AvalonDataDesinTemplatesPath + "images/dimond.png");
        }
        storeInfo = [];
        var isValid = true;
        var existingDomainName = $('#txtExistingDomainName').val();
        if (existingDomainName != "") {

            var webUrl = CheckWebSiteUrl($('#txtExistingDomainName'));
            if (webUrl == false) {
                $("#spReqExistingDomainName").html("Invalid Domain");
                isValid = false;
            }
        }


        //else {
        //    $("#spReqExistingDomainName").html("Invalid Domain");
        //    $("#txtExistingDomainName").addClass("invalid");
        //    isValid = false;
        //}
        var yearsInbuisness = $('#txtBusinessEstablishmentYear').val();

        if (yearsInbuisness != "") {
            if (yearsInbuisness.length < 4) {
                $("#spReqBusinessEstablishmentYear").text("Invalid Business Establishment Year.")
                $("#txtBusinessEstablishmentYear").addClass('invalid')
                // $("#txtBusinessEstablishmentYear").focus();
                isValid = false;
            }

            var startingYear = yearsInbuisness.slice(0, 1);
            if (startingYear == "0" || startingYear > 2) {
                $("#spReqBusinessEstablishmentYear").text("Invalid Business Establishment Year.")
                $("#txtBusinessEstablishmentYear").addClass('invalid')
                // $("#txtBusinessEstablishmentYear").focus();
                isValid = false;
            }

            var currentYear = new Date().getFullYear();
            // alert(currentYear)
            if (parseInt(yearsInbuisness) > parseInt(currentYear)) {
                $("#spReqBusinessEstablishmentYear").text("Invalid Business Establishment Year.")
                $("#txtBusinessEstablishmentYear").addClass('invalid')
                isValid = false;
            }


        }
        else {
            //$("#spReqBusinessEstablishmentYear").text("Mandatory field and cannot be left empty.")
            $("#txtBusinessEstablishmentYear").addClass('invalid')
            // $("#txtBusinessEstablishmentYear").focus();
            isValid = false;
        }


        var supplier1 = $('#txtSupplier1').val();
        var supplier2 = $('#txtSupplier2').val();
        var supplier3 = $('#txtSupplier3').val();
        var storehoursDays1 = $('#txtStoreBusinessDaysHours1').val();
        var storehoursDays2 = $('#txtStoreBusinessDaysHours2').val();
        var storehoursDays3 = $('#txtStoreBusinessDaysHours3').val();


        if (storehoursDays1 != "") {

        } else {
            //$("#spReqStoreBusinessDaysHours1").text("Mandatory field and cannot be left empty.")
            $("#txtStoreBusinessDaysHours1").addClass('invalid')
            isValid = false;
        }

        var now = new Date(Date.now());
        var formatted = now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
        var companyLogo = "";
        if ($("#btnCompanyLogo").val() != "") {
            companyLogo = document.getElementById('btnCompanyLogo').files[0].name;

            var compnaylogonew = document.getElementById('btnCompanyLogo').files[0].name.toLowerCase();
            if (compnaylogonew.indexOf('.jpg') != -1 || compnaylogonew.indexOf('.png') != -1 || compnaylogonew.indexOf('.gif') != -1 || compnaylogonew.indexOf('.jpeg') != -1) {
                $('#btnCompanyLogo').removeClass('invalid')
                $('#spReqCompanyLogo').text('')
            }
            else {
                $('#btnCompanyLogo').addClass('invalid')
                $('#spReqCompanyLogo').text('Invalid File Format! Allowed Formats: .jpg | .jpeg | .png | .gif')
                isValid = false;
            }

            var sizeCompanyLogo = parseFloat((document.getElementById('btnCompanyLogo').files[0].size / 1024) / 1024).toFixed(2);

            if (parseInt(sizeCompanyLogo) >= 2) {
                $('#btnCompanyLogo').addClass('invalid')
                $('#spReqCompanyLogo').text('Maximum File Upload Size Allowed: 2 MB')
                isValid = false;

            }

        }
        else {

            //$('#CompanyLogoField').addClass('invalid')
            ////$('#spReqCompanyLogo').text('Mandatory field and cannot be left empty. ')
            //isValid = false;
        }


        //alert(companyLogo)

        var storePictures = "";
        if ($("#btnStorePictures").val() != "") {
            var files = "";
            files = document.getElementById("btnStorePictures").files;
            console.log("selectedfiles data", selectedFiles)
           // alert(files.length)
            for (var k = 0; k < selectedFiles.length; k++) {
                var storepicturenew = selectedFiles[k].name.toLowerCase();
                if (storepicturenew.indexOf('.jpg') != -1 || storepicturenew.indexOf('.png') != -1 || storepicturenew.indexOf('.gif') != -1 || storepicturenew.indexOf('.jpeg') != -1) {
                    if (selectedFiles.length > 5) {
                        $('#btnStorePictures').addClass('invalid')
                        $('#spReqStoreLogo').text('Limit Exceeded. Only 5 Store Pictures are allowed to Upload.')
                    }

                    if (selectedFiles.length <= 5) {
                       // for (var i = 0; i < selectedFiles.length; i++) {
                            var sizeStorePicture = parseFloat((selectedFiles[k].size / 1024) / 1024).toFixed(2);

                            if (parseInt(sizeStorePicture) >= 5) {
                                $('#btnStorePictures').addClass('invalid')
                                $('#spReqStoreLogo').text('Maximum File Upload Size Allowed: 5 MB')
                                isValid = false;

                            }
                            else {
                                //alert(i)
                                if (k == selectedFiles.length - 1) {
                                    storePictures += formatted + "_" + selectedFiles[k].name;

                                }
                                else {
                                    storePictures += formatted + "_" + selectedFiles[k].name + ","
                                }

                            }
                        //}
                    }
                    else {
                        $('#btnStorePictures').addClass('invalid')
                        $('#spReqStoreLogo').text('Limit Exceeded. Only 5 Store Pictures are allowed to Upload.')
                        isValid = false;
                    }
                }
                else {
                    $('#btnStorePictures').addClass('invalid')
                    $('#spReqStoreLogo').text('Invalid File Format! Allowed Formats: .jpg | .jpeg | .png | .gif')
                    isValid = false;
                }


            }
        }
        else {
            //$('#StorePicturesField').addClass('invalid')
            ////$('#spReqStoreLogo').text('Mandatory field and cannot be left empty. ')
            //isValid = false;
        }
    
        if(isValid)
        {
           // alert(storePictures)
            storeInfo.push(existingDomainName, yearsInbuisness, supplier1, supplier2, supplier3, storehoursDays1, storehoursDays2, storehoursDays3, companyLogo, storePictures, formatted)
            $('[href=#SignUpTab]').tab('show');
        }






    })


    //************************************Store Info END*******************************************************************************************//

    //********************************** Sign Up Now Button Event ****************************************************************************//
    $("#btnSignUpNow").click(function () {
        //alert('2')
        var isValid = true;
        var sComments = $("#txtComments").val();
        //alert('1')
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
        existingDomainName = storeInfo[0];
        yearsInbuisness = storeInfo[1];
        supplier1 = storeInfo[2];
        supplier2 = storeInfo[3];
        supplier3 = storeInfo[4];
        storehoursDays1 = storeInfo[5];
        storehoursDays2 = storeInfo[6];
        storehoursDays3 = storeInfo[7];
        companyLogo = storeInfo[8];
        storePictures = storeInfo[9];
        formatted = storeInfo[10];
        if (companyLogo != "") {
            companyLogo = formatted + "_" + companyLogo;
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

        
        
       //alert(isValid)

       
        if (isValid == true) {
            var url = sitesetting.AvalonDataServicesPath + "SignUp/ServicePages/SignUpRequest.ashx?Salutation=" + Salutation + "&FirstName=" + FirstName + "&LastName=" + LastName + "&Company=" + Company + "&JobTitle=" + JobTitle + "&Address1=" + Address1 + "&Address2=" + Address2 + "&City=" + City1 + "&State=" + State1 + "&Zip=" + Zip1 + "&Phone1=" + Telephone + "&Mobile=" + Mobile + "&Email=" + EmailAddress + "&Website=" + Website + "&BuyingGroup=" + BuyingGroup + "&Comments=" + Comments + "&WebPlan=" + WebsitePlan + "&WebDesignerNumber=" + WebsiteDesign + "&response=" + response + "&existingDomainName=" + existingDomainName + "&buisnessInYears=" + yearsInbuisness + "&supplier1=" + supplier1 + "&supplier2=" + supplier2 + "&supplier3=" + supplier3 + "&StoreHoursDays1=" + storehoursDays1 + "&StoreHoursDays2=" + storehoursDays2 + "&StoreHoursDays3=" + storehoursDays3 + "&companyLogo=" + companyLogo + "&storePictures=" + storePictures;
         
           // alert(url)

            $.getJSON(url, function (json) {
                if (json == 'success') {
                    SignUpSuccess();
                    Loader(false);
                }
            });


            var filesStore = new FormData();
            
            var file1Store = $("#btnStorePictures")[0].files;
            //  var file2 = document.getElementById("btnStorePictures").files[0];
            for (var i = 0; i < file1Store.length; i++) {
                filesStore.append('files[0]', file1Store[i]);
                }
            
            // files.append('files[1]', file2);

            var fileUploadUrlStore = sitesetting.AvalonDataServicesPath + "SignUp/ServicePages/StorePicture.ashx?formatted=" + formatted;
          //  alert(fileUploadUrlStore)
            $.ajax({
                type: 'POST',
                url: fileUploadUrlStore,
                data: filesStore,
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    //$('#uploadMsg').text('Files have been uploaded successfully');
                },
                error: function (error) {
                    //$('#uploadMsg').text('Error has occured. Upload is failed');
                }
            });









            var files = new FormData();
            var file1 = document.getElementById("btnCompanyLogo").files[0];
          //  var file2 = document.getElementById("btnStorePictures").files[0];
            files.append('files[0]', file1);
           // files.append('files[1]', file2);
        
            var fileUploadUrl = sitesetting.AvalonDataServicesPath + "SignUp/ServicePages/CompanyLogoHandler.ashx?formatted=" + formatted;
           // alert(fileUploadUrl)
            $.ajax({
                type: 'POST',
                url: fileUploadUrl,
                data: files,
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    //$('#uploadMsg').text('Files have been uploaded successfully');
                },
                error: function (error) {
                    //$('#uploadMsg').text('Error has occured. Upload is failed');
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

function removeSelectedFiles(e) {
    //alert('step 1')
    //var files = document.getElementById('btnStorePictures').files;
    selectedFiles.splice(e, 1)
  //  alert('step2')
    // var val = numFiles > 1 ? numFiles + ' files selected' : label;
 // alert(selectedFiles.length)
    if (selectedFiles.length == 0) {
        //$('#filelist').val("");
        //list.innerHTML = "";
        $("#btnStorePictures").val('');
        $('#StorePicturesField').val('')
        $('#StorePicturesField').removeClass('invalid')
        $('#spReqStoreLogo').text('')
    }
    else {
        $('#StorePicturesField').val(selectedFiles.length + " files selected")
    }

    if(selectedFiles.length <=5)
    {
        $('#StorePicturesField').removeClass('invalid')
        $('#spReqStoreLogo').text('')
    }

    var list = document.getElementById('filelist');
    list.innerHTML = '';
    //var image = "";
    //// console.log(list);
   // alert('1')
    for (var i = 0; i < selectedFiles.length; i++) {
       // alert(selectedFiles[i].name)
        list.innerHTML += '<li> ' + selectedFiles[i].name + '<span onclick="removeSelectedFiles(' + i + ')" id=' + i + '">&times;</span>  </li>';
        console.log("file",selectedFiles)
       // selectedFiles.push(selectedFiles[i]);
    }
    ////$("#image").html(image);
    if (list.innerHTML == '') list.style.display = 'none';
    else list.style.display = 'block'; SignUpTab


  

}

function UpgradePlan() {
    $("#upgradePlanPopup").fadeOut("slow");
    $("#upgradePlanPopup").css("display", "none");
    $('[href=#SelectWebsitePlan]').tab('show');
   



};

function SamePlan() {
    $("#upgradePlanPopup").fadeOut("slow");
    $("#upgradePlanPopup").css("display", "none");
};

function CheckWebSiteUrl(me) {
    $("#spReqExistingDomainName").empty();
    
    var domainName = $("#txtExistingDomainName").val().trim();
    var arrUrl = $("#txtExistingDomainName").val().trim().split('.');
   
    if (domainName != "") {
        if (domainName.includes("www")) {
            //alert('2')
            if (arrUrl.length > 4 || arrUrl.length == 2) {
                $("#spReqExistingDomainName").html("Invalid Domain");
               // urlerror.innerHTML = "Invalid Domain";
                $("#txtExistingDomainName").addClass("invalid");
                return false;
            }
            else if (arrUrl.length == 3) {
                var webDomain = arrUrl[0].replace("http://", "").replace("https://", "")
               // alert(webDomain)
                var webDomainLeangth = webDomain.split("w").length - 1;
              //  alert(webDomainLeangth)
                if (parseInt(webDomainLeangth) == 3) {
                  //  alert('100')
                }
                else {
                   // alert('99')
                    $("#spReqExistingDomainName").html("Invalid Domain");
                    $("#txtExistingDomainName").addClass("invalid");
                    return false;
                }
            }
        }
        else if (arrUrl.length == 3) {
            var webDomain = arrUrl[0].replace("http://", "").replace("https://", "")
            //alert(webDomain)
            var webDomainLeangth = webDomain.split("w").length - 1;
            //alert(webDomainLeangth)
            if (parseInt(webDomainLeangth) == 3) {
               // alert('100')
            }
            else {
                //alert('99')
                $("#spReqExistingDomainName").html("Invalid Domain");
                $("#txtExistingDomainName").addClass("invalid");
                return false;
            }
        }
        

        else {
            if (arrUrl.length > 3 || arrUrl.length == 1) {
                $("#spReqExistingDomainName").html("Invalid Domain");
                $("#txtExistingDomainName").addClass("invalid");
                return false;
            }
        }
    }
    var url = $("#txtExistingDomainName").val().trim().split(':')[0];
    url = url.toLowerCase();
    if ((url != "http")) {
        if ((url != "https")) {
            if ((url != "")) {
                $("#txtExistingDomainName").val('http://' + $("#txtExistingDomainName").val().trim());
                if (!/^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test($("#txtExistingDomainName").val().trim().toLowerCase())) {
                    $("#spReqExistingDomainName").html("Invalid Domain");
                    $("#txtExistingDomainName").addClass("invalid");
                    return false;
                } else {
                    $("#spReqExistingDomainName").html("");
                    $("#txtExistingDomainName").removeClass("invalid");
                    return true;
                }
            }
            else {
                
                $("#txtExistingDomainName").removeClass("invalid");
                //urlerror.innerHTML = "";
                $("#spReqExistingDomainName").empty();
            }
        }
        else {
            $("#txtExistingDomainName").val($("#txtExistingDomainName").val().trim());
        }
    }
    else {
        $("#txtExistingDomainName").val($("#txtExistingDomainName").val().trim());
        if (!/^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test($("#txtExistingDomainName").val().trim().toLowerCase())) {
            $("#spReqExistingDomainName").html("Invalid Website URL");
            $("#txtExistingDomainName").addClass("invalid");
            return false;
        } else {
            $("#spReqExistingDomainName").html("");
            $("#txtExistingDomainName").removeClass("invalid");
            return true;
        }
    }
}