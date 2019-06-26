
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Content_Management").setTemplateURL(sitesetting.templateUrl + 'Html/Features/Content_Management.html');
    $("#Content_Management").setParam('webRoot', sitesetting.webRoot);
    $("#Content_Management").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Content_Management").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Content_Management").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Content_Management").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Content_Management").setParam('ClientUrl', ClientUrl);
    $("#Content_Management").setParam('PHONE1', sitesetting.PHONE1);
    $("#Content_Management").setParam('EMAILID', sitesetting.EMAILID);

    $("#Content_Management").processTemplate();



    /*****************end pager code****************/

});