
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Partners").setTemplateURL(sitesetting.templateUrl + 'Html/Company/Partners.html');
    $("#Partners").setParam('webRoot', sitesetting.webRoot);
    $("#Partners").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Partners").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Partners").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Partners").setParam('PartnersNAME', sitesetting.Partners_NAME);
    $("#Partners").setParam('ClientUrl', ClientUrl);
    $("#Partners").setParam('PHONE1', sitesetting.PHONE1);
    $("#Partners").setParam('EMAILID', sitesetting.EMAILID);
    $("#Partners").setParam('YearsInBusiness', sitesetting.YearsInBusiness);

    $("#Partners").processTemplate();



    /*****************end pager code****************/

});