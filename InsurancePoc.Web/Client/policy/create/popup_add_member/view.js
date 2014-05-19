define(['text!t_policy_popup_add_member', 'jquery'], //, 'bootstrap'], 
    function (tpl, $) {

    var _show = function () {
        _addTemplate();
        $('#popup_add_policy_member').modal({});
    };

    var _addTemplate = function () {
        if ($('#popup_add_policy_member').length > 0)
            return;
        $('#main_content').append(tpl);
    };

    return {
        Show: _show
    }
});
    