define(['ajax'], function (ajax) {

    var authenticate = function (data, callback) {
        var url = '/auth/authenticate';
        ajax.PostJson(url, callback, data);
    };

    var logout = function (callback) {
        var url = '/auth/logout';
        var data = {};
        ajax.PostJson(url, callback, data);
    };

    return {
        Authenticate: authenticate,
        Logout: logout
    };
});