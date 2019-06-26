
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#MarketingSEO").setTemplateURL(sitesetting.templateUrl + 'Html/Services/MarketingSEO.html');
    $("#MarketingSEO").setParam('webRoot', sitesetting.webRoot);
    $("#MarketingSEO").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#MarketingSEO").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#MarketingSEO").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#MarketingSEO").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#MarketingSEO").setParam('ClientUrl', ClientUrl);
    $("#MarketingSEO").setParam('PHONE1', sitesetting.PHONE1);
    $("#MarketingSEO").setParam('EMAILID', sitesetting.EMAILID);

    $("#MarketingSEO").processTemplate();



    /*****************end pager code****************/

});