define(['jquery', 'fader', 'blocker', 'text!t_policy_detail'], function ($, fader, blocker, tpl) {

    var _render = function () {
        fader.Fade($('#main_content'), tpl, _fade_complete);
    };

    var _fade_complete = function () {
        blocker.Unblock();
    };

    return {
        Render: _render
    }
});