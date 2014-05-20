
(function ($) {
    require.config({
        baseUrl: '/Client',
        urlArgs: "appver=" +  (new Date()).getTime(),
        paths: {
            // Libraries
            "jquery": "/Scripts/jquery-1.10.0.min",
            'text': '/Scripts/text',
            'sammy': '/Scripts/sammy-0.7.4',
            "ko": "/Scripts/knockout-2.1.0",
            "jqui": "/Scripts/jquery-ui-1.10.4.custom.min",
            'bootstrap': '/Scripts/bootstrap.min',
            "date_picker": '/Scripts/bootstrap-datetimepicker.min',
            "moment" :"/Scripts/moment.min",
            'underscore': '/Scripts/underscore-min',
            "jquery-validate": '/Scripts/jquery.validate.min',
            'jquery.blockUI':'/Scripts/jquery.blockUI.min',
            'd3': '/Scripts/d3.v3.min',

            // Common controls
            "msg_error": "/Client/common/msgbox_error/view",


            // Utils
            "fader": "/Client/utils/fader",
            "auth"  :"/Client/utils/auth",
            "ajax"  :"/Client/utils/ajax",
            "blocker"  :"/Client/utils/blocker",
            'commands_auth':'/Client/utils/commands/commands_auth',
            'global_loader': '/Client/utils/global_loader',

            // App modules
            'chart_premiums_collected': '/Client/dashboard/charts/premiums_collected/view',
            'chart_agent_commisions': '/Client/dashboard/charts/agent_commissions/view',
            "v_dashboard": "/Client/dashboard/view",
            't_dashboard': '/Client/dashboard/template.html',
            'v_home': '/Client/home/view',
            'v_policy_list': '/Client/policy/list/view',
            't_policy_list': '/Client/policy/list/tpl.html',
            'vm_policy_list': '/Client/policy/list/view_model',
            'repo_policy_filter': '/Client/repository/policy/repo_policy_filter',
            'v_policy_detail': '/Client/policy/detail/view',
            't_policy_detail': '/Client/policy/detail/tpl.html',
            'v_policy_create': '/Client/policy/create/view',
            't_policy_create': '/Client/policy/create/tpl.html',
            't_policy_popup_add_member': '/Client/policy/create/popup_add_member/tpl.html',
            'v_policy_popup_add_member': '/Client/policy/create/popup_add_member/view',
            'vm_policy_popup_add_member': '/Client/policy/create/popup_add_member/view_model',
            'vm_policy_create': '/Client/policy/create/view_model',
            'vm_payment_history': '/Client/policy/payment_history/view_model',
            'v_payment_history': '/Client/policy/payment_history/view',
            't_payment_history': '/Client/policy/payment_history/tpl.html',
        },
        shim: {
            'sammy': {
                deps:['jquery'],
                exports: 'sammy'
                },
            'jqui': {deps:['jquery']},
            'bootstrap': ['jquery'],
            'date_picker': {deps:['moment']},
            'jquery-validate': {deps:['jquery']},
            'jquery.blockUI': {deps: ['jquery']}
        }
    });

    require(['jquery', 'jquery-validate', 'jquery.blockUI'], function($){
        //Hack add globals        
        window.$ = $;
    });

    require(['jquery', 'route_config', 'auth', 'blocker'], 
        function($, route_conf, auth, blocker){
        
        blocker.Block();
        var app = route_conf.Configure(Sammy);
        app.run('/');
    });






})(jQuery);