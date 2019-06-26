$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#product_management").setTemplateURL(sitesetting.templateUrl + 'Html/Features/Product_Management.html');
    $("#product_management").setParam('webRoot', sitesetting.webRoot);
    $("#product_management").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#product_management").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#product_management").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#product_management").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#product_management").setParam('ClientUrl', ClientUrl);
    $("#product_management").setParam('PHONE1', sitesetting.PHONE1);
    $("#product_management").setParam('EMAILID', sitesetting.EMAILID);

    $("#product_management").processTemplate();



    /*****************end pager code****************/

});