
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#ResponsiveDesigns").setTemplateURL(sitesetting.templateUrl + 'Html/Portfolio/ResponsiveDesigns.html');
    $("#ResponsiveDesigns").setParam('webRoot', sitesetting.webRoot);
    $("#ResponsiveDesigns").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#ResponsiveDesigns").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#ResponsiveDesigns").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#ResponsiveDesigns").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#ResponsiveDesigns").setParam('ClientUrl', ClientUrl);
    $("#ResponsiveDesigns").setParam('PHONE1', sitesetting.PHONE1);
    $("#ResponsiveDesigns").setParam('EMAILID', sitesetting.EMAILID);

    $("#ResponsiveDesigns").processTemplate();



    /*****************end pager code****************/

});