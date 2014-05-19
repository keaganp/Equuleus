define(['jquery', 'underscore', 'auth', 'text!nav_bar/tpl.html', 'commands_auth'], function ($, _, auth, tpl, command) {

    var render = function () {
        $('div#main_navbar').html(tpl);
        if (auth.IsAuthenticated())
            auth.GetRoles(onGotRoles);
        else
            renderUnAuth();
    };

    var renderUnAuth = function () {
        var html = '<li><a href="/#/login">[Login]</a></li>';
        $('#nav_items_right').html(html);
    };

    var onGotRoles = function (roles) {
        var nav = $('#nav_items');

        renderDash(nav, roles);
        renderPolicy(nav, roles);
        renderCollections(nav, roles);
        renderInventory(nav, roles);
        renderReports(nav, roles);
        renderLogout();
    };

    var renderDash = function (nav, roles) {
        if (_.contains(roles, 'dashboard viewer'))
            nav.append('<li><a href="/#/dashboard">Dashboard</a></li>');
    };

    var renderPolicy = function (nav, roles) {
        if (_.contains(roles, 'policy admin'))
            nav.append('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Policy Admin <b class="caret"></b></a><ul class="dropdown-menu"><li data-target=".nav-collapse"><a href="/#/policies">Search</a></li><li><a href="/#/policy/new">Create New</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li><a href="#">Separated link</a></li><li class="divider"></li><li><a href="#">One more separated link</a></li></ul></li>');
    };

    var renderCollections = function (nav, roles) {
        if (_.contains(roles, 'collections admin'))
            nav.append('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Collections<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">Debit Orders</a></li><li><a href="#">Field Collections</a></li></ul></li>');
    };

    var renderInventory = function (nav, roles) {
        if (_.contains(roles, 'inventory admin'))
            nav.append('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Inventory<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">Search</a></li><li><a href="#">Create New</a></li><li class="divider"></li><li><a href="#">Quick Quote</a></li><li><a href="#">Create Invoice</a></li><li class="divider"></li><li><a href="#">Availability</a></li></ul></li>');
    };

    var renderReports = function (nav, roles) {
        if (_.contains(roles, 'report viewer'))
            nav.append('<li><a href="#">Reports</a></li>');
    };

    var renderLogout = function () {
        var html = '<li><a href="#">Help</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Account <b class="caret"></b></a><ul class="dropdown-menu"><li><a href="#">Reset Password</a></li><li><a href="#">My Preferences</a></li><li class="divider"></li><li><a href=""  id="lnk_logout" >Log Out</a></li></ul></li>';
        $('#nav_items_right').html(html);
        $('#lnk_logout').click(function () {
            command.Logout(onLoggedOut);
        });
    };

    var onLoggedOut = function () {
        window.location = '#/';
        location.reload();
    };

    return {
        Render: render
    };
});