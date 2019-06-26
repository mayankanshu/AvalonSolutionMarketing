
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#Testimonials").setTemplateURL(sitesetting.templateUrl + 'Html/Clients/Testimonials.html');
    $("#Testimonials").setParam('webRoot', sitesetting.webRoot);
    $("#Testimonials").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#Testimonials").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#Testimonials").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#Testimonials").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#Testimonials").setParam('ClientUrl', ClientUrl);
    $("#Testimonials").setParam('PHONE1', sitesetting.PHONE1);
    $("#Testimonials").setParam('EMAILID', sitesetting.EMAILID);

    $("#Testimonials").processTemplate();



    /*****************end pager code****************/

});