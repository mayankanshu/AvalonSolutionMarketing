
$(document).ready(function () {
    //$(".basic").css("display", "block");
    //$(".standard").css("display", "none");

    var ClientUrl = sitesetting.CLIENTURL;

    $("#WebsiteDesigns").setTemplateURL(sitesetting.templateUrl + 'Html/Portfolio/WebsiteDesigns.html');
    $("#WebsiteDesigns").setParam('webRoot', sitesetting.webRoot);
    $("#WebsiteDesigns").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#WebsiteDesigns").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#WebsiteDesigns").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#WebsiteDesigns").setParam('COMPANYNAME', sitesetting.COMPANY_NAME);
    $("#WebsiteDesigns").setParam('ClientUrl', ClientUrl);
    $("#WebsiteDesigns").setParam('PHONE1', sitesetting.PHONE1);
    $("#WebsiteDesigns").setParam('EMAILID', sitesetting.EMAILID);

    $("#WebsiteDesigns").processTemplate();



    $(function () {
        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');

        $('.nav-tabs a').click(function (e) {
            $(this).tab('show');
            var scrollmem = $('body').scrollTop(0) || $('html').scrollTop(0);
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    });

    /*****************end pager code****************/

});