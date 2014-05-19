define(['jquery', 'fader', 'text!common/msgbox_error/tpl.html'], function ($, fader, tpl) {

    var render = function (parent, msg, width) {
        parent.html(tpl);
        var el = $('#msgDlgError');
        if (width)
            el.width(width);

        el.fadeIn(200);
        $('#btnCloseMsgDlgError').click(onCloseMsgDlgError);
        $('#msgDlgError_message').html(msg);
    };

    var onCloseMsgDlgError = function () {
        $('#msgDlgError').fadeOut(200);
    };

    var close = function () {
        $('#msgDlgError').fadeOut(100);
    };

    return {
        Render: render,
        Close: close
    };
});