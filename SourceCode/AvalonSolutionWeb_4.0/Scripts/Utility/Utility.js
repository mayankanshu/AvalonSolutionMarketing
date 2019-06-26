function getJSvars(script_name, var_name, if_empty) {
    var script_elements = document.getElementsByTagName('script');
    if (if_empty == null) {
        var if_empty = "";
    }
    for (a = 0; a < script_elements.length; a++) {
        var source_string = script_elements[a].src;
        if (source_string.indexOf(script_name) >= 0) {

            var_name = var_name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex_string = new RegExp("[\\?&]" + var_name + "=([^&#]*)");
            var parsed_vars = regex_string.exec(source_string);
            if (parsed_vars == null) { return if_empty; }
            else { return parsed_vars[1]; }

        }
    }
};


function checkRequired(id) {

    $("*[required=required]").each(function () {
        if ($(this).val() == "" || $(this).val() == null) {
            $(this).addClass('form-control-required');
        }
    }).change(function () {
        if ($(this).val() != "" || $(this).val() != null) {
            $(this).removeClass('form-control-required');
        }
    }).keypress(function () {
        if ($(this).val() != "" || $(this).val() != null) {
            $(this).removeClass('form-control-required');
        }
    }).focusout(function () {
        if ($(this).val() == "" || $(this).val() == null) {
            $(this).addClass('form-control-required');
        }
    });
};

function Loader(isFade) {
    if (isFade) {

       
        $('#progressBackgroundFilter').fadeIn();
        $('#loadingbox').fadeIn();
        $('#Loader').fadeIn();
    } else {
        //  $('#ItemList').fadeOut();
        //$('#ItemList').fadeIn(1000);
        $('#progressBackgroundFilter').fadeOut();
        $('#loadingbox').fadeOut();
        $('#Loader').fadeOut();
    }
}

