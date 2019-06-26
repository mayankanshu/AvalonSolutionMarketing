$(document).ready(function () {
   
    var ClientUrl = sitesetting.CLIENTURL;

    $("#TradeShows").setTemplateURL(sitesetting.templateUrl + 'Html/Company/Trade_Shows.html');
    $("#TradeShows").setParam('webRoot', sitesetting.webRoot);
    $("#TradeShows").setParam('AvalonDesignTemplagePath', sitesetting.templateUrl);
    $("#TradeShows").setParam('webRootforimages', sitesetting.webRootforimages);
    $("#TradeShows").setParam('THEMEPATH', sitesetting.THEMEPATH);
    $("#TradeShows").setParam('Trade_ShowsNAME', sitesetting.Trade_Shows_NAME);
    $("#TradeShows").setParam('ClientUrl', ClientUrl);
    $("#TradeShows").setParam('PHONE1', sitesetting.PHONE1);
    $("#TradeShows").setParam('EMAILID', sitesetting.EMAILID);
    $("#TradeShows").setParam('reCaptchaSiteKey', sitesetting.reCaptchaSiteKey);

    $("#TradeShows").processTemplate();

    $.getScript(sitesetting.templateUrl + 'Js/Company/Trade_ShowsAction.js', function () { });

    // recaptcha Google integration JS
    $.getScript('https://www.google.com/recaptcha/api.js', function () { });

    /*****************end pager code****************/

});