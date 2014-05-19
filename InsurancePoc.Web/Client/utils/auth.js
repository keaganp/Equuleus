define(['ajax'], function (ajax) {

    _isAuthenticated = false;
    _roles = [];

    var isAuthenticated = function () {
        return _isAuthenticated;
    };

    var getRoles = function (callback) {
        callback(_roles);
    };

    var authenticate = function (callback) {
        var url = '/auth/isauthenticated';
        ajax.GetJson(url, function (result) {
            _isAuthenticated = result.IsAuthenticated;
            _roles = result.Roles;
            callback(result);
        });
    };

    return {
        IsAuthenticated: isAuthenticated,
        GetRoles: getRoles,
        Authenticate: authenticate
    };
});