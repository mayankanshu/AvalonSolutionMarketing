
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Portfolio").setTemplateURL(sitesetting.templateUrl + 'Html/Portfolio/Portfolio.html');
    $("#Portfolio").setParam('webRoot', sitesetting.webRoot);
    $("#Portfolio").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Portfolio").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Portfolio").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Portfolio").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Portfolio").setParam('ClientUrl', ClientUrl);
    $("#Portfolio").setParam('PHONE1', sitesetting.PHONE1);
    $("#Portfolio").setParam('EMAILID', sitesetting.EMAILID);

    $("#Portfolio").processTemplate();



    /*****************end pager code****************/

});