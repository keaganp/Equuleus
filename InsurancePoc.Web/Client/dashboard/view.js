define(['jquery', 'fader', 'blocker', 'text!t_dashboard', 'chart_premiums_collected',
    'chart_agent_commisions'],
    function ($, fader, blocker, tpl, chart_premiums_collected, chart_agent_commisions) {

        var _render = function () {
            fader.Fade($('#main_content'), tpl, _fadeComplete);
        };

        var _fadeComplete = function () {
            chart_premiums_collected.Render('chart_premiums_collected', 550);
            chart_agent_commisions.Render('chart_agent_commisions', 550);
            blocker.Unblock();
        };

        return {
            Render: _render
        }
    });