
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#ADA_Initiative").setTemplateURL(sitesetting.templateUrl + 'Html/Features/ADA_Initiative.html');
    $("#ADA_Initiative").setParam('webRoot', sitesetting.webRoot);
    $("#ADA_Initiative").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#ADA_Initiative").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#ADA_Initiative").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#ADA_Initiative").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#ADA_Initiative").setParam('ClientUrl', ClientUrl);
    $("#ADA_Initiative").setParam('PHONE1', sitesetting.PHONE1);
    $("#ADA_Initiative").setParam('EMAILID', sitesetting.EMAILID);

    $("#ADA_Initiative").processTemplate();



    /*****************end pager code****************/

});