// 1. Request Call Form Validation
// 2. MIXIT FILTER ( FOR PORTFOLIO ) & some pages
// 3. Home page Portfolio Slider Code
// 4. Fix Pricing Heder after scroll Code

$(document).ready(function () {
	
	
// 1. Request Call Form Validation Start
   $('#name_req').on('keydown', function (event) {
	   $('#name_req').removeClass("error");
   });
   $('#company_req').on('keydown', function (event) {
	   $('#company_req').removeClass("error");
   });
   $('#phone_req').on('keydown', function (event) {
	   $('#phone_req').removeClass("error");
   });
   $('#email_req').on('keydown', function (event) {
	   $('#email_req').removeClass("error");
   });

   var counter = 2;
   var flg = 'true';

   $(".form_section button").click(function () {

	   if ($.trim($('#name_req').val()) == '') {
		   $('#name_req').addClass("error");
		   flg = 'false';
	   }
	   else {
		   $('#name_req').removeClass("error");
		   var flg = 'true';

	   }

	   if ($.trim($('#company_req').val()) == '') {
		   $('#company_req').addClass("error");
		   flg = 'false';
	   }
	   else {
		   $('#company_req').removeClass("error");
		   var flg = 'true';

	   }
	   
	   if ($.trim($('#phone_req').val()) == '') {
		   $('#phone_req').addClass("error");
		   flg = 'false';
	   }
	   else {
		   $('#phone_req').removeClass("error");
		   var flg = 'true';

	   }
	   
	   if ($.trim($('#email_req').val()) == '') {
		   $('#email_req').addClass("error");
		   flg = 'false';
	   }
	   else {
		   $('#email_req').removeClass("error");
		   var flg = 'true';

	   }
		if (flg == 'false')
	   return false;
	   else
		   return true;

   });
    // 1. Request Call Form Validation End


    /*  2. MIXIT FILTER ( FOR PORTFOLIO ) */
   jQuery(function () {
       $('#mixit-container').mixItUp();
   });

    /* FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) */
   $(".fancybox").fancybox();



    /*  3. Home page Portfolio Slider Code */
   jQuery.fn.center = function () {
       this.css("position", "absolute");
       this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
       this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
       return this;
   }

    $("#thumbnail .overlay").click(function (e) {

        $("#background").css({ "opacity": "0.7" })
                        .fadeIn("slow");

        $("#large").html("<img src='" + $(this).parent().attr("href") + "' alt='" + $(this).attr("alt") + "' />")
                    .fadeIn("slow");

        return false;
    });

    $(document).keypress(function (e) {
        if (e.keyCode == 27) {
            $("#background").fadeOut("slow");
            $("#large").fadeOut("slow");
        }
    });

    $("#background").click(function () {
        $("#background").fadeOut("slow");
        $("#large").fadeOut("slow");
    });

    $("#large").click(function () {
        $("#background").fadeOut("slow");
        $("#large").fadeOut("slow");
    });

    /*  3. Home page Portfolio Slider Code End  */


    /* 4. Fix Pricing Heder after scroll Start */
    //$(window).scroll(function () {
    //    var scroll = $(window).scrollTop();

    //    if (scroll >= 290) {
    //        $("section.pricing #maintable thead").addClass("navbar-fixed-top container animated fadeInDown");
    //    } else {
    //        $("section.pricing #maintable thead").removeClass("navbar-fixed-top container");
    //    }
    //});

    // Fix Pricing Heder after scroll 
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 260) {
            $(".mobile_table .nav-tabs").addClass("navbar-fixed-top container animated fadeInDown");
        } else {
            $(".mobile_table .nav-tabs").removeClass("navbar-fixed-top container");
        }
    });
    /* 4. Fix Pricing Heder after scroll End */



   
});

setTimeout(function () {
    var crdate = new Date().getFullYear();
    //alert(crdate);
    $("#cpyear").html(crdate);
}, 5000);