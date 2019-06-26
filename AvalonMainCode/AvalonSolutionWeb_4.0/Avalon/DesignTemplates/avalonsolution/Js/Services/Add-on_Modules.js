
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#AddOnModules").setTemplateURL(sitesetting.templateUrl + 'Html/Services/AddOnModules.html');
    $("#AddOnModules").setParam('webRoot', sitesetting.webRoot);
    $("#AddOnModules").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#AddOnModules").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#AddOnModules").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#AddOnModules").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#AddOnModules").setParam('ClientUrl', ClientUrl);
    $("#AddOnModules").setParam('PHONE1', sitesetting.PHONE1);
    $("#AddOnModules").setParam('EMAILID', sitesetting.EMAILID);

    $("#AddOnModules").processTemplate();



    /*****************end pager code****************/

});