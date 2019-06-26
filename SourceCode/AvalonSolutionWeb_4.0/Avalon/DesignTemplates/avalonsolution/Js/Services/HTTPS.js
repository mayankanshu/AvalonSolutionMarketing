
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#HTTPS").setTemplateURL(sitesetting.templateUrl + 'Html/Services/HTTPS.html');
    $("#HTTPS").setParam('webRoot', sitesetting.webRoot);
    $("#HTTPS").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#HTTPS").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#HTTPS").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#HTTPS").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#HTTPS").setParam('ClientUrl', ClientUrl);
    $("#HTTPS").setParam('PHONE1', sitesetting.PHONE1);
    $("#HTTPS").setParam('EMAILID', sitesetting.EMAILID);

    $("#HTTPS").processTemplate();



    /*****************end pager code****************/

});