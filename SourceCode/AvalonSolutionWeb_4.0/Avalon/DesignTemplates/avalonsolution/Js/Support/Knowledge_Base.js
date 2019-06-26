
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#KnowledgeBase").setTemplateURL(sitesetting.templateUrl + 'Html/Support/Knowledge_Base.html');
    $("#KnowledgeBase").setParam('webRoot', sitesetting.webRoot);
    $("#KnowledgeBase").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#KnowledgeBase").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#KnowledgeBase").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#KnowledgeBase").setParam('SupportNAME', sitesetting.Support_NAME);
    $("#KnowledgeBase").setParam('ClientUrl', ClientUrl);
    $("#KnowledgeBase").setParam('PHONE1', sitesetting.PHONE1);
    $("#KnowledgeBase").setParam('EMAILID', sitesetting.EMAILID);

    $("#KnowledgeBase").processTemplate();



    /*****************end pager code****************/

});