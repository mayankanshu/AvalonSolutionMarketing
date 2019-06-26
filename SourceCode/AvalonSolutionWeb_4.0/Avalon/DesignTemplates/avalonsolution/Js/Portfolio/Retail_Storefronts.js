
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#RetailStorefronts").setTemplateURL(sitesetting.templateUrl + 'Html/Portfolio/RetailStorefronts.html');
    $("#RetailStorefronts").setParam('webRoot', sitesetting.webRoot);
    $("#RetailStorefronts").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#RetailStorefronts").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#RetailStorefronts").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#RetailStorefronts").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#RetailStorefronts").setParam('ClientUrl', ClientUrl);
    $("#RetailStorefronts").setParam('PHONE1', sitesetting.PHONE1);
    $("#RetailStorefronts").setParam('EMAILID', sitesetting.EMAILID);

    $("#RetailStorefronts").processTemplate();



    /*****************end pager code****************/

});