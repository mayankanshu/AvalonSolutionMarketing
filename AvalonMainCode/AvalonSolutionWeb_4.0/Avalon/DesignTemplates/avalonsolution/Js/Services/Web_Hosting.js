
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#WebHosting").setTemplateURL(sitesetting.templateUrl + 'Html/Services/WebHosting.html');
    $("#WebHosting").setParam('webRoot', sitesetting.webRoot);
    $("#WebHosting").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#WebHosting").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#WebHosting").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#WebHosting").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#WebHosting").setParam('ClientUrl', ClientUrl);
    $("#WebHosting").setParam('PHONE1', sitesetting.PHONE1);
    $("#WebHosting").setParam('EMAILID', sitesetting.EMAILID);

    $("#WebHosting").processTemplate();



    /*****************end pager code****************/

});