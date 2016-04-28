/*global $ */

var initialize = function(options) {
    $('input').on('keypress', function () {
        $('.has-error').hide();
    });

    if (options) {
        $.get(options.getItemsUrl).then(function (response) {
            var rows = '';
            for (var i=0; i<response.length; i++) {
                var item = response[i];
                rows += '\n<tr><td>' + (i+1) + ': ' + item.text + '</td></tr>';
            }
            $('#id_list_table').html(rows);
        });
    }

};


window.Superlists = window.Superlists || {};
window.Superlists.Lists = window.Superlists.Lists || {
    initialize: initialize,
};

