
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Domains").setTemplateURL(sitesetting.templateUrl + 'Html/Services/Domains.html');
    $("#Domains").setParam('webRoot', sitesetting.webRoot);
    $("#Domains").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Domains").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Domains").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Domains").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Domains").setParam('ClientUrl', ClientUrl);
    $("#Domains").setParam('PHONE1', sitesetting.PHONE1);
    $("#Domains").setParam('EMAILID', sitesetting.EMAILID);

    $("#Domains").processTemplate();



    /*****************end pager code****************/

});