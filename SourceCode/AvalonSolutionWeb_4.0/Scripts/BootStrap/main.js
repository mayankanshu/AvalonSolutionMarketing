/*scroll to top*/

$(document).ready(function(){
    "use strict";
 // hide #scroll_up first
 $("#scroll_up").hide();
 
 // fade in #scroll_up
 $(function () {
  $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
    $('#scroll_up').fadeIn();
   } else {
    $('#scroll_up').fadeOut();
   }
  });

  // scroll body to 0px on click
  $('#scroll_up a').click(function () {
   $('body,html').animate({
    scrollTop: 0
   }, 800);
   return false;
  });
 });

});

/*Blog and Comments Tab*/

$(document).ready(function(){
    "use strict";
	$("#comments").click(function(){
	$("#latestcomments").slideDown("slow");
	$(this).css("background","white").css("color","#DF302B");
	$("#fromblog").slideUp("slow");
	$("#blogs").css("background","#DF302B").css("color","white");
	});
  
	$("#blogs").click(function(){
	$("#fromblog").slideDown("slow");
	$(this).css("background","white").css("color","#DF302B");
	$("#latestcomments").slideUp("slow");
	$("#comments").css("background","#DF302B").css("color","white");
	});
  
  
});




$(document).ready(function () {

    "use strict";
    $(".tip-top").tooltip({
        placement : 'top'
    });
    $(".tip-right").tooltip({
        placement : 'right'
    });
    $(".tip-bottom").tooltip({
        placement : 'bottom'
    });
    $(".tip-left").tooltip({
        placement : 'left'
    });

    //$('[data-toggle=tooltip]').tooltip();

});

 
// left menu - collaspe 
$(window).bind('resize load', function () {
    "use strict";
    if ($(this).width() >= 767) {
        $('.collapse').addClass('in');
        $('.accordion-toggle').removeClass('collapsed');
        $('.panel-collapse').collapse({ toggle: false });
    }
    else {
        $('.collapse').removeClass('in');
        $('.accordion-toggle').addClass('collapsed');
    }
});






 

function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    return params;
}
function getUrlParamsKeyName() {
    var GetKeyName = []; //new Array();
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        GetKeyName.push(key);
    });
    return GetKeyName;
}
function removeURLParam(url, param) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var prefix = encodeURIComponent(param) + '=';
        var pars = urlparts[1].split(/[&;]/g);
        for (var i = pars.length; i-- > 0;)
            if (pars[i].indexOf(prefix, 0) == 0)
                pars.splice(i, 1);
        if (pars.length > 0)
            return urlparts[0] + '?' + pars.join('&');
        else
            return urlparts[0];
    }
    else
        return url;
}
function getQuerystringKeyName(OldUrl) {
    var GetKeyName = [];
    var url = OldUrl;
    if (url.split('?')[1] != undefined) {

        var qs = url.split('?')[1];

        var pair = "";
        var key = "";
        var value = "";
        if (qs.length > 0) {

            pairs = qs.split(/&/);
            for (i = 0, n = pairs.length; i < n; i++) {
                pair = pairs[i].split(/=/);
                key = pair[0];
                value = decodeURIComponent(pair[1].replace(/\+/g, " "));
                GetKeyName.push(key);
            } //end for lop

            return GetKeyName;
        } //qs length check
    } //end of url split string
}
function getQuerystringKeyValue(OldUrl) {
    var GetKeyValue = [];
    var url = OldUrl;
    if (url.split('?')[1] != undefined) {
        var qs = url.split('?')[1];
        var pair = "";
        var key = "";
        var value = "";
        if (qs.length > 0) {
            //qs = qs.substr(1);
            pairs = qs.split(/&/);
            for (i = 0, n = pairs.length; i < n; i++) {
                pair = pairs[i].split(/=/);
                key = pair[0];
                value = decodeURIComponent(pair[1].replace(/\+/g, " "));
                GetKeyValue.push(value);
            } //end for lop

            return GetKeyValue;
        } //qs length check
    } //end of url split string
}



$(document).ready(function () {
    $('.imag').hover(
    function () {
        $(this).children('.contenthover').slideDown(300);
    },
    function () {
        $(this).children('.contenthover').slideUp(300);
        $('[data-toggle="dropdown tooltip"]').parent().removeClass('open');
    }
    );
});

$(document).ready(function () {
    $('.pop').each(function () {
        var $elem = $(this);
        $elem.popover({
            placement: 'auto',
            trigger: 'hover',
            html: true,
            container: $elem,
            animation: true,
            //title: 'Name goes here',
            content: 'This is the popover content. You should be able to mouse over HERE.'
        });
    });
});