
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#News").setTemplateURL(sitesetting.templateUrl + 'Html/Company/News.html');
    $("#News").setParam('webRoot', sitesetting.webRoot);
    $("#News").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#News").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#News").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#News").setParam('NewsNAME', sitesetting.News_NAME);
    $("#News").setParam('ClientUrl', ClientUrl);
    $("#News").setParam('PHONE1', sitesetting.PHONE1);
    $("#News").setParam('EMAILID', sitesetting.EMAILID);

    $("#News").processTemplate();



    /*****************end pager code****************/

});