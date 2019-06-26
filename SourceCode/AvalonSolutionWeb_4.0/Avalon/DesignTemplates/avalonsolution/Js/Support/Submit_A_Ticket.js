
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#SubmitATicket").setTemplateURL(sitesetting.templateUrl + 'Html/Support/Submit_A_Ticket.html');
    $("#SubmitATicket").setParam('webRoot', sitesetting.webRoot);
    $("#SubmitATicket").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#SubmitATicket").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#SubmitATicket").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#SubmitATicket").setParam('SupportNAME', sitesetting.Support_NAME);
    $("#SubmitATicket").setParam('ClientUrl', ClientUrl);
    $("#SubmitATicket").setParam('PHONE1', sitesetting.PHONE1);
    $("#SubmitATicket").setParam('EMAILID', sitesetting.EMAILID);

    $("#SubmitATicket").processTemplate();



    /*****************end pager code****************/

});