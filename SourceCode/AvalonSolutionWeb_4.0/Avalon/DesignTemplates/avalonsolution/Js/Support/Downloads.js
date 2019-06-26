
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Downloads").setTemplateURL(sitesetting.templateUrl + 'Html/Support/Downloads.html');
    $("#Downloads").setParam('webRoot', sitesetting.webRoot);
    $("#Downloads").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Downloads").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Downloads").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Downloads").setParam('SupportNAME', sitesetting.Support_NAME);
    $("#Downloads").setParam('ClientUrl', ClientUrl);
    $("#Downloads").setParam('PHONE1', sitesetting.PHONE1);
    $("#Downloads").setParam('EMAILID', sitesetting.EMAILID);

    $("#Downloads").processTemplate();



    /*****************end pager code****************/

});