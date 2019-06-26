
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#AboutUs").setTemplateURL(sitesetting.templateUrl + 'Html/Company/About_Us.html');
    $("#AboutUs").setParam('webRoot', sitesetting.webRoot);
    $("#AboutUs").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#AboutUs").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#AboutUs").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#AboutUs").setParam('About_UsNAME', sitesetting.About_Us_NAME);
    $("#AboutUs").setParam('ClientUrl', ClientUrl);
    $("#AboutUs").setParam('PHONE1', sitesetting.PHONE1);
    $("#AboutUs").setParam('EMAILID', sitesetting.EMAILID);

    $("#AboutUs").processTemplate();



    /*****************end pager code****************/

});