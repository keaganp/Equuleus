define(['jquery', 'blocker'], function ($, blocker) {

    var _render = function () {
        $('#main_content').html('');
        blocker.Unblock();
    };

    return {
        Render: _render
    }
});