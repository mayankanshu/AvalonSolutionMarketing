
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#EmailMarketing").setTemplateURL(sitesetting.templateUrl + 'Html/Services/EmailMarketing.html');
    $("#EmailMarketing").setParam('webRoot', sitesetting.webRoot);
    $("#EmailMarketing").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#EmailMarketing").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#EmailMarketing").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#EmailMarketing").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#EmailMarketing").setParam('ClientUrl', ClientUrl);
    $("#EmailMarketing").setParam('PHONE1', sitesetting.PHONE1);
    $("#EmailMarketing").setParam('EMAILID', sitesetting.EMAILID);

    $("#EmailMarketing").processTemplate();



    /*****************end pager code****************/

});