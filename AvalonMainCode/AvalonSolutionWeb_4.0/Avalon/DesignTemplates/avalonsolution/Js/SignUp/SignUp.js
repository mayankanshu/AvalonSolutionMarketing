$(document).ready(function () {
  
    var ClientUrl = sitesetting.CLIENTURL;
   // var websitePlan = "";
       $("#SignUp").setTemplateURL(sitesetting.templateUrl + 'Html/SignUp/SignUp.html');
    $("#SignUp").setParam('webRoot', sitesetting.webRoot);
    $("#SignUp").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#SignUp").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#SignUp").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#SignUp").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#SignUp").setParam('ClientUrl', ClientUrl);
    $("#SignUp").setParam('PHONE1', sitesetting.PHONE1);
    $("#SignUp").setParam('EMAILID', sitesetting.EMAILID);
    

    $("#SignUp").processTemplate();
   
    $.getScript(sitesetting.templateUrl + 'Js/SignUp/SignUpAction.js', function () {
      
    });
    // recaptcha Google integration JS
    $.getScript('https://www.google.com/recaptcha/api.js', function () { });
    /*****************end pager code****************/
    $("body").addClass("SignUpPage");

    $(function () {
        // Multiple images preview in browser
        var imagesPreview = function (input, placeToInsertImagePreview) {

            if (input.files) {
                var filesAmount = input.files.length;

                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();

                    reader.onload = function (event) {
                        $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                    }

                    reader.readAsDataURL(input.files[i]);
                }
            }

        };
        $('#btnStorePictures').on('change', function () {
            imagesPreview(this, 'div.StorePics');
        });
    });

    $(document).on('change', '.button-browse :file', function () {
        var input = '';
         input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label, input]);
    });

    $('.button-browse :file').on('fileselect', function (event, numFiles, label, input) {

        var val = numFiles > 1 ? numFiles + ' files selected' : label;
        input.parent('.button-browse').next(':text').val(val);
    });

});