
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#SocialMedia").setTemplateURL(sitesetting.templateUrl + 'Html/Services/SocialMedia.html');
    $("#SocialMedia").setParam('webRoot', sitesetting.webRoot);
    $("#SocialMedia").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#SocialMedia").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#SocialMedia").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#SocialMedia").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#SocialMedia").setParam('ClientUrl', ClientUrl);
    $("#SocialMedia").setParam('PHONE1', sitesetting.PHONE1);
    $("#SocialMedia").setParam('EMAILID', sitesetting.EMAILID);

    $("#SocialMedia").processTemplate();



    /*****************end pager code****************/

});