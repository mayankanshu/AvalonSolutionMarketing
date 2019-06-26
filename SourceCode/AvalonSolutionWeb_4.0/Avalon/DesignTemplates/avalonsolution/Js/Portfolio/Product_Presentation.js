
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#ProductPresentation").setTemplateURL(sitesetting.templateUrl + 'Html/Portfolio/ProductPresentation.html');
    $("#ProductPresentation").setParam('webRoot', sitesetting.webRoot);
    $("#ProductPresentation").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#ProductPresentation").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#ProductPresentation").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#ProductPresentation").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#ProductPresentation").setParam('ClientUrl', ClientUrl);
    $("#ProductPresentation").setParam('PHONE1', sitesetting.PHONE1);
    $("#ProductPresentation").setParam('EMAILID', sitesetting.EMAILID);

    $("#ProductPresentation").processTemplate();



    /*****************end pager code****************/

});