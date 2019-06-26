
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#PrivacyPolicy").setTemplateURL(sitesetting.templateUrl + 'Html/PrivacyPolicy/PrivacyPolicy.html');
    $("#PrivacyPolicy").setParam('webRoot', sitesetting.webRoot);
    $("#PrivacyPolicy").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#PrivacyPolicy").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#PrivacyPolicy").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#PrivacyPolicy").setParam('PrivacyPolicyNAME', sitesetting.PrivacyPolicy_NAME);
    $("#PrivacyPolicy").setParam('ClientUrl', ClientUrl);
    $("#PrivacyPolicy").setParam('PHONE1', sitesetting.PHONE1);
    $("#PrivacyPolicy").setParam('EMAILID', sitesetting.EMAILID);

    $("#PrivacyPolicy").processTemplate();



    /*****************end pager code****************/

});