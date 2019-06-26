$(document).ready(function () {
    //alert('hh');
    $("#RetailerInvitation").setTemplateURL(sitesetting.templateUrl + 'Html/Features/RetailerInvitation.html');
    $("#RetailerInvitation").setParam('webRoot', sitesetting.webRoot);
    $("#RetailerInvitation").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#RetailerInvitation").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#RetailerInvitation").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#RetailerInvitation").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#RetailerInvitation").setParam('PHONE1', sitesetting.PHONE1);
    $("#RetailerInvitation").setParam('EMAILID', sitesetting.EMAILID);
    $("#RetailerInvitation").processTemplate();

    // recaptcha Google integration JS
    $.getScript('https://www.google.com/recaptcha/api.js', function () {
    });

    $.getScript(sitesetting.templateUrl + 'Js/Features/RetailerInviAction.js', function () { });
    /*****************end pager code****************/

});