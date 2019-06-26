
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#TermsOfUse").setTemplateURL(sitesetting.templateUrl + 'Html/TermsOfUse/TermsOfUse.html');
    $("#TermsOfUse").setParam('webRoot', sitesetting.webRoot);
    $("#TermsOfUse").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#TermsOfUse").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#TermsOfUse").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#TermsOfUse").setParam('TermsOfUseNAME', sitesetting.TermsOfUse_NAME);
    $("#TermsOfUse").setParam('ClientUrl', ClientUrl);
    $("#TermsOfUse").setParam('PHONE1', sitesetting.PHONE1);
    $("#TermsOfUse").setParam('EMAILID', sitesetting.EMAILID);

    $("#TermsOfUse").processTemplate();



    /*****************end pager code****************/

});

setTimeout(function () {
    var crdate = new Date().getFullYear();
    $("#cpyear").html(crdate);
}, 5000);