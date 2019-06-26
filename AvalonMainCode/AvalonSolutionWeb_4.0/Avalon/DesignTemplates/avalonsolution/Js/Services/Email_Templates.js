
$(document).ready(function () {

    var ClientUrl = sitesetting.CLIENTURL;

    $("#EmailTemplates").setTemplateURL(sitesetting.templateUrl + 'Html/Services/EmailTemplates.html');
    $("#EmailTemplates").setParam('webRoot', sitesetting.webRoot);
    $("#EmailTemplates").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#EmailTemplates").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#EmailTemplates").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#EmailTemplates").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#EmailTemplates").setParam('ClientUrl', ClientUrl);
    $("#EmailTemplates").setParam('PHONE1', sitesetting.PHONE1);
    $("#EmailTemplates").setParam('EMAILID', sitesetting.EMAILID);

    $("#EmailTemplates").processTemplate();

  
    $('#tabSimpleDesign').click(function () {
   
        $("#tabSimple").addClass('active');
        $("#tabIntroduction").removeClass('active');
        $("#tabStandard").removeClass('active');
        $("#tabAdvance").removeClass('active');

    });

    $('#tabStandardDesign').click(function () {

        $("#tabStandard").addClass('active');
        $("#tabIntroduction").removeClass('active');
        $("#tabSimple").removeClass('active');
        $("#tabAdvance").removeClass('active');

    });

    $('#tabAdvanceDesign').click(function () {

        $("#tabAdvance").addClass('active');
        $("#tabSimple").removeClass('active');
        $("#tabIntroduction").removeClass('active');
        $("#tabStandard").removeClass('active');
        

    });

    $('#linkSimpleDesign').click(function () {

        $("#tabSimple").addClass('active');
        $("#tabIntroduction").removeClass('active');
        $("#tabStandard").removeClass('active');
        $("#tabAdvance").removeClass('active');

    });

    $('#linkStandardDesign').click(function () {

        $("#tabStandard").addClass('active');
        $("#tabIntroduction").removeClass('active');
        $("#tabSimple").removeClass('active');
        $("#tabAdvance").removeClass('active');

    });

    $('#linkAdvanceDesign').click(function () {

        $("#tabAdvance").addClass('active');
        $("#tabSimple").removeClass('active');
        $("#tabIntroduction").removeClass('active');
        $("#tabStandard").removeClass('active');


    });


    

    /*****************end pager code****************/

});