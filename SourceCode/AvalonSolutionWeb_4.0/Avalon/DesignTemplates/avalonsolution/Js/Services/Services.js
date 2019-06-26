
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Services").setTemplateURL(sitesetting.templateUrl + 'Html/Services/Services.html');
    $("#Services").setParam('webRoot', sitesetting.webRoot);
    $("#Services").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Services").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Services").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Services").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Services").setParam('ClientUrl', ClientUrl);
    $("#Services").setParam('PHONE1', sitesetting.PHONE1);
    $("#Services").setParam('EMAILID', sitesetting.EMAILID);

    $("#Services").processTemplate();



    /*****************end pager code****************/

});