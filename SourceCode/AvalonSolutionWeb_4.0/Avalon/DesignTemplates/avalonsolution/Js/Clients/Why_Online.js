
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#WhyOnline").setTemplateURL(sitesetting.templateUrl + 'Html/Clients/Why_Online.html');
    $("#WhyOnline").setParam('webRoot', sitesetting.webRoot);
    $("#WhyOnline").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#WhyOnline").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#WhyOnline").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#WhyOnline").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#WhyOnline").setParam('ClientUrl', ClientUrl);
    $("#WhyOnline").setParam('PHONE1', sitesetting.PHONE1);
    $("#WhyOnline").setParam('EMAILID', sitesetting.EMAILID);

    $("#WhyOnline").processTemplate();



    /*****************end pager code****************/

});