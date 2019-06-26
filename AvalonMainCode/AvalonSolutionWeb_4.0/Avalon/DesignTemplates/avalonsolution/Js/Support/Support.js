
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Support").setTemplateURL(sitesetting.templateUrl + 'Html/Support/Support.html');
    $("#Support").setParam('webRoot', sitesetting.webRoot);
    $("#Support").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Support").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Support").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Support").setParam('SupportNAME', sitesetting.Support_NAME);
    $("#Support").setParam('ClientUrl', ClientUrl);
    $("#Support").setParam('PHONE1', sitesetting.PHONE1);
    $("#Support").setParam('EMAILID', sitesetting.EMAILID);

    $("#Support").processTemplate();



    /*****************end pager code****************/

});