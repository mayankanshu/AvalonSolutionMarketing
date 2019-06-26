
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Diamond_Feed").setTemplateURL(sitesetting.templateUrl + 'Html/Features/Diamond_Feed.html');
    $("#Diamond_Feed").setParam('webRoot', sitesetting.webRoot);
    $("#Diamond_Feed").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Diamond_Feed").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Diamond_Feed").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Diamond_Feed").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Diamond_Feed").setParam('ClientUrl', ClientUrl);
    $("#Diamond_Feed").setParam('PHONE1', sitesetting.PHONE1);
    $("#Diamond_Feed").setParam('EMAILID', sitesetting.EMAILID);

    $("#Diamond_Feed").processTemplate();



    /*****************end pager code****************/

});