$(document).ready(function () {
   
    
});


jQuery(document).on('click', ".brandCustomization", function () {
    var BrandType = jQuery(this).find('input').val();
   
    var url = sitesetting.AvalonDataServicesPath + "Features/ServicePages/BrandCustom.ashx?BrandType=" + BrandType;
    
    $.getJSON(url, function (json) {
     
        if (BrandType == 'J') {
           
            var brandhtml = '<div class="col-md-12 col-sm-12 nopadding">'
            for (var i = 0; i < json.length; i++) {
                brandhtml += '<div class="col-md-3 col-sm-4 retail_fronts wow fadeInUp nopadding">'
                brandhtml += '<a target="_blank" href=' + json[i].BrandUrl + '>'
                brandhtml += '<span>' + json[i].BrandName + '</span>'
                brandhtml += '<img class="img-responsive" src="' + json[i].BrandImageUrl + '" alt=' + json[i].BrandName + ' title=' + json[i].BrandName + '>'
              // brandhtml += '<img src="' + json[i].BrandImageUrl + '" class="zoomicon">'
                brandhtml += '<img src="' + sitesetting.AvalonDataDesinTemplatesPath + 'images/zoomicon.png" class="zoomicon">'
                brandhtml += '</a>'
                brandhtml += '</div>'
            }
            brandhtml += '</div>'

            $('#JewelryBrands').html(brandhtml);

        }

        else if (BrandType == 'W')
        {
            var brandhtml = '<div class="col-md-12 col-sm-12 nopadding">'
            for (var i = 0; i < json.length; i++) {
                brandhtml += '<div class="col-md-3 col-sm-4 retail_fronts wow fadeInUp nopadding">'
                brandhtml += '<a target="_blank" href=' + json[i].BrandUrl + '>'
                brandhtml += '<span>' + json[i].BrandName + '</span>'
                brandhtml += '<img class="img-responsive" src="' + json[i].BrandImageUrl + '" alt=' + json[i].BrandName + ' title=' + json[i].BrandName + '>'
                brandhtml += '<img src="' + sitesetting.AvalonDataDesinTemplatesPath + 'images/zoomicon.png" class="zoomicon">'
                brandhtml += '</a>'
                brandhtml += '</div>'
            }
            brandhtml += '</div>'

            $('#WatchBrands').html(brandhtml);

        }

        else if (BrandType == 'G') {

            var brandhtml = '<div class="col-md-12 col-sm-12 nopadding">'
            for (var i = 0; i < json.length; i++) {
                brandhtml += '<div class="col-md-3 col-sm-4 retail_fronts wow fadeInUp nopadding">'
                brandhtml += '<a target="_blank" href=' + json[i].BrandUrl + '>'
                brandhtml += '<span>' + json[i].BrandName + '</span>'
                brandhtml += '<img class="img-responsive" src="' + json[i].BrandImageUrl + '" alt=' + json[i].BrandName + ' title=' + json[i].BrandName + '>'
                brandhtml += '<img src="' + sitesetting.AvalonDataDesinTemplatesPath + 'images/zoomicon.png" class="zoomicon">'
                brandhtml += '</a>'
                brandhtml += '</div>'
            }
            brandhtml += '</div>'
            $('#GiftBrands').html(brandhtml);

        }
        else{}


           
        
    });


});


