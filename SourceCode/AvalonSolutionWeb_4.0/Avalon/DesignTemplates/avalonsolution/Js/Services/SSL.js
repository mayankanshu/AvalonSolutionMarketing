
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#SSL").setTemplateURL(sitesetting.templateUrl + 'Html/Services/SSL.html');
    $("#SSL").setParam('webRoot', sitesetting.webRoot);
    $("#SSL").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#SSL").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#SSL").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#SSL").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#SSL").setParam('ClientUrl', ClientUrl);
    $("#SSL").setParam('PHONE1', sitesetting.PHONE1);
    $("#SSL").setParam('EMAILID', sitesetting.EMAILID);

    $("#SSL").processTemplate();



    /*****************end pager code****************/

});