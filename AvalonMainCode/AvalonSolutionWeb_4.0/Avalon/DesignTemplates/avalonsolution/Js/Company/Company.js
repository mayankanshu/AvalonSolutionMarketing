
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Company").setTemplateURL(sitesetting.templateUrl + 'Html/Company/Company.html');
    $("#Company").setParam('webRoot', sitesetting.webRoot);
    $("#Company").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Company").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Company").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Company").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Company").setParam('ClientUrl', ClientUrl);
    $("#Company").setParam('PHONE1', sitesetting.PHONE1);
    $("#Company").setParam('EMAILID', sitesetting.EMAILID);

    $("#Company").processTemplate();



    /*****************end pager code****************/

});