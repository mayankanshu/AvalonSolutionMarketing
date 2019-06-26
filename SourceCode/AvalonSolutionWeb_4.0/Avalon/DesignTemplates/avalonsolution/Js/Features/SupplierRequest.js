$(document).ready(function () {
    //alert('hh');
    $("#SupplierRequest").setTemplateURL(sitesetting.templateUrl + 'Html/Features/SupplierRequest.html');
    $("#SupplierRequest").setParam('webRoot', sitesetting.webRoot);
    $("#SupplierRequest").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#SupplierRequest").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#SupplierRequest").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#SupplierRequest").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#SupplierRequest").setParam('PHONE1', sitesetting.PHONE1);
    $("#SupplierRequest").setParam('EMAILID', sitesetting.EMAILID);
    $("#SupplierRequest").processTemplate();

    // recaptcha Google integration JS
    $.getScript('https://www.google.com/recaptcha/api.js', function () {
    });

    $.getScript(sitesetting.templateUrl + 'Js/Features/SupplierReqAction.js', function () { });
    /*****************end pager code****************/

});