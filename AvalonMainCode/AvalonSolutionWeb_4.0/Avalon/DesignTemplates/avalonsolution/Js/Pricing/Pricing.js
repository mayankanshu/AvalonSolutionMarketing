
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Pricing").setTemplateURL(sitesetting.templateUrl + 'Html/Pricing/Pricing.html');
    $("#Pricing").setParam('webRoot', sitesetting.webRoot);
    $("#Pricing").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Pricing").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Pricing").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Pricing").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Pricing").setParam('ClientUrl', ClientUrl);
    $("#Pricing").setParam('PHONE1', sitesetting.PHONE1);
    $("#Pricing").setParam('EMAILID', sitesetting.EMAILID);

    $("#Pricing").processTemplate();

    $.getScript(sitesetting.templateUrl + 'Js/Pricing/PricingAction.js', function () {
       

    });

    /*****************end pager code****************/

});