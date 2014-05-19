define(['ko', 'fader', 'blocker', 'text!t_policy_create', 'vm_policy_create', 'v_policy_popup_add_member', 'msg_error', 'jqui', 'date_picker'],
    function (ko, fader, blocker, tpl, ViewModel, popup_add_member, msg_error) {

        var vm;

        var _render = function () {
            fader.Fade($('#main_content'), tpl, _fade_complete);
        };

        var _fade_complete = function () {
            _load_controls();
            vm = new ViewModel();
            ko.applyBindings(vm, document.getElementById("main_content"));
            _configureValidation();
            _bind_dom_events();
            blocker.Unblock();
        };

        var _configureValidation = function () {
            $('#frm_wiz_step_1').validate({
                rules: {
                    title: "required",
                    policyHolderFirstName: "required",
                    policyHolderSurname: "required",
                    policyHolderIdNumber: {
                        required: true,
                        minlength: 13,
                        maxlength: 13
                    },
                    policyHolderGender: "required",
                    inputDateOfBirth: "required",
                },
                messages: {
                     policyHolderIdNumber: {
                        required: "This field is required.",
                        minlength: "ID Number must be 13 digits long",
                        maxlength: "ID Number must be 13 digits long"
                     },
                    //policyHolderFirstName: "This is a required field"
                }
            });
        };

        var _load_controls = function () {
            $('#dpDateOfBirth').datetimepicker({
                pickTime: false,
                showToday: true,
                icons: {
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                }
            });
        };

        var _bind_dom_events = function () {
            $('#btnNext').click(_on_next_click);
            $('#btnPervious').click(_on_previous_click);
            $('#btn_add_member').click(_on_add_member_click);
        };

        var _on_add_member_click = function () {
            popup_add_member.Show();
        };

        var _on_next_click = function () {
            if (!$('#frm_wiz_step_' + vm.CurrentStep()).valid()){
                var msg = '<b>Validation faild</b><br> Please first fix all the errors on the page before clicking Next / Finish';
                msg_error.Render($('#validation_msgbox'), msg);
                return;
            }
            msg_error.Close();

            if ($('#btnNext').hasClass('btn-success')) {
                _on_finish_click();
                return;
            }

            $('.wiz-step:visible').fadeOut(300, function () {
                vm.MoveToNextStep();

                var next = $('#wiz_step_' + vm.CurrentStep()).fadeIn(300)
                next.fadeIn(200);

                $('#step_name').html(next.attr('data-step-name'));
            });
        };

        var _on_finish_click = function () {
            $('#msg_error_on_finish').fadeIn(350);
        };

        var _on_previous_click = function () {
            $('.wiz-step:visible').fadeOut(300, function () {
                vm.MoveToPreviousStep();
                var next = $('#wiz_step_' + vm.CurrentStep());
                next.fadeIn(600);

                $('#step_name').html(next.attr('data-step-name'));
            });
        };
        
        return {
            Render: _render
        }
    });