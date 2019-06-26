
function SearchInfo()
{
    this.vendorId = undefined;
    this.pageIndex = undefined;
    this.pageSize = undefined;
    this.keyWords = undefined;
    this.manufacturerId = undefined;
    this.storeId = undefined;
    this.designerIds = [];
    this.collectionIds = [];
    this.categoryIds = [];
    this.productStatus = undefined;
    this.publishedProducts = undefined;
    this.priceRangeMin = undefined;
    this.priceRangeMax = undefined;
    this.diamondRangeMin = undefined;
    this.diamondRangeMax = undefined;
    this.metaKarat = undefined;
    this.metalColor = undefined;
    this.stoneType = undefined;
    this.stoneShapes = undefined;
    this.productTagId = undefined;
    this.searchDescriptions = undefined;
    this.searchProductTags = undefined;
    this.filterableSpecificationAttributeOptionIds = [];
    this.loadFilterableSpecificationAttributeOptionIds = undefined;
    this.isAdvanceSerach = undefined;
    this.SortBy = undefined;
    this.ProductType = undefined;
};



$(document).ready(function () {

    "use strict";
   
  $("#btnSerach").SeachBottons();

  $('#searchbox').pressEnter(function () {
      var search = $("#searchbox").val();
      $.fn.SeachActions(search);
      
  });
  
 
  

});

(function ($)
{
    $.fn.SeachActions = function (keyWord) {

        var searchinfo = new SearchInfo();
        searchinfo.vendorId = 0;
        searchinfo.pageIndex = 1;
        searchinfo.pageSize = 100;
        searchinfo.keyWords = keyWord;
        searchinfo.manufacturerId = 0;
        searchinfo.storeId = 0;
        searchinfo.designerIds.push(parseInt(0));
        searchinfo.collectionIds.push(parseInt(0));
        searchinfo.categoryIds.push(parseInt(0));
        searchinfo.categoryIds.push(parseInt(0));
        searchinfo.productStatus = false;
        searchinfo.publishedProducts = false;
        searchinfo.priceRangeMin = parseInt(0);
        searchinfo.priceRangeMax = parseInt(0);
        searchinfo.diamondRangeMin = 0;
        searchinfo.diamondRangeMax = 0;
        searchinfo.metaKarat = 0;
        searchinfo.metalColor = 0;
        searchinfo.stoneType = 0;
        searchinfo.stoneShapes = 0;
        searchinfo.productTagId = 0;
        searchinfo.searchDescriptions = false;
        searchinfo.searchProductTags = false;
        searchinfo.filterableSpecificationAttributeOptionIds.push(parseInt(0));
        searchinfo.loadFilterableSpecificationAttributeOptionIds = false;
        searchinfo.isAdvanceSerach = false;
        searchinfo.SortBy = parseInt(0);
        searchinfo.ProductType = parseInt(0);
      
        alert('r');
        var PostUer = sitesetting.AvalonDataServicesPath + "Shared/ServicePages/SearchResults.ashx";
      
        $.ajax({
            url: PostUer,
            dataType: "json",
            data: { SearchInfo: JSON.stringify(searchinfo),Mode:'HS' },
            success: function (json)
            {
                if (json != null) {
                    $.fn.GetBindList(json);
                }
                else
                {
                    $.fn.ErrorMe();
                }

              },
            error: function (msg)
            {
                
                $.fn.ErrorMe();
            }

        });//end of ajax


    };
    $.fn.SeachBottons = function () {
        $(this).click(function () {
            var search = $("#searchbox").val();
            $.fn.SeachActions(search);
        });
        return this;
    };
    $.fn.pressEnter = function (fn) {

        return this.each(function () {
            $(this).bind('enterPress', fn);
            $(this).keyup(function (e) {
                if (e.keyCode == 13) {
                    $(this).trigger("enterPress");
                }
            })
        });
    };
    $.fn.GetBindList = function (json) {};
    $.fn.ErrorMe = function () {}

}(jQuery));



(function ($) { }(jQuery));
$(function () { });
$(document).ready(function () { });
$(window).load(function () { });






















//$.extend({
//    Searchcls:function(){
//            this.name=undefined;
//            this.lastname = undefined;
//            this.address = undefined;

//        }


//});




























//jQuery.fn.SeachActions = function (keyWord) {

//    var searchmodel = new SearchModel();
//    searchmodel.SearchKeyWord = keyWord;
//    var PostUer = sitesetting.AvalonDataServicesPath + "";
    
//    //alert(keyWord);

//};

//$.fn.myFunction = function () {
//    alert('hi');
//}

//jQuery.fn.SeachBottons = function ()
//{
//    $(this).click(function () {
//        var search = $("#searchbox").val();
//        $.fn.SeachActions(search);
//    });
//    return this;
//}

//$.fn.pressEnter = function (fn) {

//    return this.each(function () {
//        $(this).bind('enterPress', fn);
//        $(this).keyup(function (e) {
//            if (e.keyCode == 13) {
//                $(this).trigger("enterPress");
//            }
//        })
//    });
//};
////input type="search" id="searchbox"
