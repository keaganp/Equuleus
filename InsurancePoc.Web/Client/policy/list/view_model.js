define(['ko', 'repo_policy_filter'], function (ko, repo) {

    var mod = function () {
        this.Policies = ko.observableArray([]);
    }

    var fn = mod.prototype;

    fn.LoadData = function (callback) {
        var _this = this;
        repo.GetData(function (data) {
            _this.Policies(data);
            callback();
        });
    };

    var _dataLoaded = function () {
    };

    return new mod();
});