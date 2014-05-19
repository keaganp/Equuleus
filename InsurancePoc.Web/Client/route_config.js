define(['jquery', 'auth', 'blocker'], function ($, auth, blocker) {

    var _configure = function (sammy) {
        return sammy(function () {

            // User Login
            this.get('#/login', function (context) {
                _load_screen('login/v_login');
            });

            // Home
            this.get('/', function (context) {
                _load_screen('v_home');
            });

            // Dashboard
            this.get('#/dashboard', function (context) {
                _load_screen('v_dashboard');
            });

            // Policy 
            this.get('#/policies', function (context) {
                _load_screen('v_policy_list');
            });
            this.get('#/policy/new', function (context) {
                _load_screen('v_policy_create');
            });
            this.get('#/policy/:id', function (context) {
                _load_screen('v_policy_detail');
            });
            this.get('#/payment_history/:id', function (context) {
                _load_screen('v_payment_history');
            });
        });
    };

    var _load_screen = function (view_name) {
        blocker.Block();
        auth.Authenticate(function (result) {
            if (result.IsAuthenticated === false) {
                window.location = '/#/login';
                view_name = 'login/v_login';
            }

            require(['nav_bar/v_navbar', view_name], function (navbar, view) {
                navbar.Render(auth);
                view.Render();
            });
        });


    };

    return {
        Configure: _configure
    }
});