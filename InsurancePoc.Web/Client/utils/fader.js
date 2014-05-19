define([], function () {

    var _fade = function (el, html, callback) {

        el.fadeOut(100, function () {
            el.html(html);
            el.fadeIn(200);

            if (callback)
                callback();
        });
    };

    return {
        Fade: _fade
    };
});