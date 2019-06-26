
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#SupportRequest").setTemplateURL(sitesetting.templateUrl + 'Html/Support/Support_Request.html');
    $("#SupportRequest").setParam('webRoot', sitesetting.webRoot);
    $("#SupportRequest").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#SupportRequest").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#SupportRequest").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#SupportRequest").setParam('SupportNAME', sitesetting.Support_NAME);
    $("#SupportRequest").setParam('ClientUrl', ClientUrl);
    $("#SupportRequest").setParam('PHONE1', sitesetting.PHONE1);
    $("#SupportRequest").setParam('EMAILID', sitesetting.EMAILID);

    $("#SupportRequest").processTemplate();



    /*****************end pager code****************/

});