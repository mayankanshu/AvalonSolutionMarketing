
$(document).ready(function () {
    //alert('hh');
    var ClientUrl = sitesetting.CLIENTURL;

    $("#Featuresmain").setTemplateURL(sitesetting.templateUrl + 'Html/Features/Features.html');
    $("#Featuresmain").setParam('webRoot', sitesetting.webRoot);
    $("#Featuresmain").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Featuresmain").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Featuresmain").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Featuresmain").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Featuresmain").setParam('ClientUrl', ClientUrl);
    $("#Featuresmain").setParam('PHONE1', sitesetting.PHONE1);
    $("#Featuresmain").setParam('EMAILID', sitesetting.EMAILID);

    $("#Featuresmain").processTemplate();



    /*****************end pager code****************/

});