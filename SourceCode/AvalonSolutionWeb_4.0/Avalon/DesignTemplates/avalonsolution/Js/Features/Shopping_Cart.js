$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Shopping_Cart").setTemplateURL(sitesetting.templateUrl + 'Html/Features/Shopping_Cart.html');
    $("#Shopping_Cart").setParam('webRoot', sitesetting.webRoot);
    $("#Shopping_Cart").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Shopping_Cart").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Shopping_Cart").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Shopping_Cart").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Shopping_Cart").setParam('ClientUrl', ClientUrl);
    $("#Shopping_Cart").setParam('PHONE1', sitesetting.PHONE1);
    $("#Shopping_Cart").setParam('EMAILID', sitesetting.EMAILID);

    $("#Shopping_Cart").processTemplate();



    /*****************end pager code****************/

});