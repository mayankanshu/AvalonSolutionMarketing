
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#DigitalECatalog").setTemplateURL(sitesetting.templateUrl + 'Html/Services/DigitalECatalog.html');
    $("#DigitalECatalog").setParam('webRoot', sitesetting.webRoot);
    $("#DigitalECatalog").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#DigitalECatalog").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#DigitalECatalog").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#DigitalECatalog").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#DigitalECatalog").setParam('ClientUrl', ClientUrl);
    $("#DigitalECatalog").setParam('PHONE1', sitesetting.PHONE1);
    $("#DigitalECatalog").setParam('EMAILID', sitesetting.EMAILID);

    $("#DigitalECatalog").processTemplate();



    /*****************end pager code****************/

});