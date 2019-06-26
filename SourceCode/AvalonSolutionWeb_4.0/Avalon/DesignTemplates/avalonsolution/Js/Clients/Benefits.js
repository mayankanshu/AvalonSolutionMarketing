
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Benefits").setTemplateURL(sitesetting.templateUrl + 'Html/Clients/Benefits.html');
    $("#Benefits").setParam('webRoot', sitesetting.webRoot);
    $("#Benefits").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Benefits").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Benefits").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Benefits").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Benefits").setParam('ClientUrl', ClientUrl);
    $("#Benefits").setParam('PHONE1', sitesetting.PHONE1);
    $("#Benefits").setParam('EMAILID', sitesetting.EMAILID);

    $("#Benefits").processTemplate();



    /*****************end pager code****************/

});