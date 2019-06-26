
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Edge_POS").setTemplateURL(sitesetting.templateUrl + 'Html/Features/Edge_POS.html');
    $("#Edge_POS").setParam('webRoot', sitesetting.webRoot);
    $("#Edge_POS").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Edge_POS").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Edge_POS").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Edge_POS").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Edge_POS").setParam('ClientUrl', ClientUrl);
    $("#Edge_POS").setParam('PHONE1', sitesetting.PHONE1);
    $("#Edge_POS").setParam('EMAILID', sitesetting.EMAILID);

    $("#Edge_POS").processTemplate();



    /*****************end pager code****************/

});