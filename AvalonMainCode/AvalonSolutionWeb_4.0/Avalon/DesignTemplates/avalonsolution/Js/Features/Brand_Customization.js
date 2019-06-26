
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Brand_Customization").setTemplateURL(sitesetting.templateUrl + 'Html/Features/Brand_Customization.html');
    $("#Brand_Customization").setParam('webRoot', sitesetting.webRoot);
    $("#Brand_Customization").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Brand_Customization").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Brand_Customization").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Brand_Customization").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Brand_Customization").setParam('ClientUrl', ClientUrl);
    $("#Brand_Customization").setParam('PHONE1', sitesetting.PHONE1);
    $("#Brand_Customization").setParam('EMAILID', sitesetting.EMAILID);

    $("#Brand_Customization").processTemplate();
    
    $.getScript(sitesetting.templateUrl + 'Js/Features/Brand_CustomizationAction.js', function () { });

    /*****************end pager code****************/

});