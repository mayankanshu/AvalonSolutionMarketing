$.extend({
    getUrlVars: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    }
});
//user 
//http://www.example.com/?me=myValue&name2=SomeOtherValue
//var first = getUrlVars()["me"];
// To get the second parameter
//var second = getUrlVars()["name2"];
// Get object of URL parameters
//var allVars = $.getUrlVars();

// Getting URL var by its nam
//var byName = $.getUrlVar('name');