
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Mobile_Website").setTemplateURL(sitesetting.templateUrl + 'Html/Features/Mobile_Website.html');
    $("#Mobile_Website").setParam('webRoot', sitesetting.webRoot);
    $("#Mobile_Website").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Mobile_Website").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Mobile_Website").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Mobile_Website").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Mobile_Website").setParam('ClientUrl', ClientUrl);
    $("#Mobile_Website").setParam('PHONE1', sitesetting.PHONE1);
    $("#Mobile_Website").setParam('EMAILID', sitesetting.EMAILID);

    $("#Mobile_Website").processTemplate();



    /*****************end pager code****************/

});