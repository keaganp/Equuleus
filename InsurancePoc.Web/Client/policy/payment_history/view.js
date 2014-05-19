define(['ko', 'fader', 'blocker', 'text!t_payment_history', 'vm_payment_history'], function (ko, fader, blocker, tpl, vm) {


    var _render = function () {
        fader.Fade($('#main_content'), tpl, _fade_complete);
    };

    var _fade_complete = function () {
        vm.LoadData(_on_data_loaded);
    };

    var _on_data_loaded = function () {
        ko.applyBindings(vm, document.getElementById("main_content"));
        blocker.Unblock();
    };


    return {
        Render: _render
    }
});