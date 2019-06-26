
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Clients").setTemplateURL(sitesetting.templateUrl + 'Html/Clients/Clients.html');
    $("#Clients").setParam('webRoot', sitesetting.webRoot);
    $("#Clients").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Clients").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Clients").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Clients").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Clients").setParam('ClientUrl', ClientUrl);
    $("#Clients").setParam('PHONE1', sitesetting.PHONE1);
    $("#Clients").setParam('EMAILID', sitesetting.EMAILID);

    $("#Clients").processTemplate();



    /*****************end pager code****************/

});