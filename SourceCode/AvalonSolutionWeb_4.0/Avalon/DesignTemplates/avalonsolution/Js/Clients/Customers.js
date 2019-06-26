
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Customers").setTemplateURL(sitesetting.templateUrl + 'Html/Clients/Customers.html');
    $("#Customers").setParam('webRoot', sitesetting.webRoot);
    $("#Customers").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Customers").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Customers").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Customers").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Customers").setParam('ClientUrl', ClientUrl);
    $("#Customers").setParam('PHONE1', sitesetting.PHONE1);
    $("#Customers").setParam('EMAILID', sitesetting.EMAILID);

    $("#Customers").processTemplate();



    /*****************end pager code****************/

});