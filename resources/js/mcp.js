console.log('mcp.js');

var videos = {};

videos.preview = {
    init: function() {
        console.log('mcp.preview.init()');


        overlay = $('<div class="dv-overlay"></div>');

        overlay.appendTo('body');

        $('.dv-overlay, .dv-modal .cancel').click(function() {
            videos.preview.hide();

            return false;
        });

        //$('#player').appendTo('body');

    },

    resize: function() {
        var winH = $(window).height();
        var winW = $(window).width();
        
        var playerTop = (winH / 2) - $('#player').outerHeight() / 2;
        var playerLeft = (winW / 2) - $('#player').outerWidth() / 2;

        $('#player').css('top', playerTop);
        $('#player').css('left', playerLeft);
    },

    show : function() {
        $('#player').css('display', 'block');
        $('.dv-overlay').css('display', 'block');
        videos.preview.resize();
    },

    hide: function() {
        $('.dv-overlay').css('display', 'none');
        $('#player #videoDiv').html('');
        $('#player .title').html('Loading...');
        $('#player').css('display', 'none');
    }
};

videos.preview.init();

$(document).ready(function() {
    $('html').attr('ng-app', "duktvideos");
    $('body').attr('ng-controller', "ServicesListCtrl");
});