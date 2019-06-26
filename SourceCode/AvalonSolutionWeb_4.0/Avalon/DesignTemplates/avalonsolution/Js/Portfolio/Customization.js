
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Customization").setTemplateURL(sitesetting.templateUrl + 'Html/Portfolio/Customization.html');
    $("#Customization").setParam('webRoot', sitesetting.webRoot);
    $("#Customization").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Customization").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Customization").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Customization").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Customization").setParam('ClientUrl', ClientUrl);
    $("#Customization").setParam('PHONE1', sitesetting.PHONE1);
    $("#Customization").setParam('EMAILID', sitesetting.EMAILID);

    $("#Customization").processTemplate();



    /*****************end pager code****************/

});