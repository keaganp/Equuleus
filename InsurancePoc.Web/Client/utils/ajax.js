define('ajax', ['jquery', 'underscore'], function ($, _) {


    var _postJson = function (url, callbacks, data) {
        if (_.isFunction(callbacks))
            callbacks = {
                success: callbacks,
                error: on_error
            };

        if (typeof callbacks.error === "undefined") {
            callbacks.error = null;
        }

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: "json",
            traditional: true,
            success: function (data) {
                if (callbacks.success)
                    callbacks.success(data);
            },
            error: function (jqXHR, textStatus, errorThrow) {
                if (jqXHR.status == 200) {
                    if (callbacks.success)
                        callbacks.success(data);
                    return;
                }
                if (jqXHR.status == 550 && callbacks.error) {
                    callbacks.error(jqXHR.responseText);
                    return;
                }
                on_error();
            },
            cache: false
        });
    };

    var _getJson = function (url, callback, data) {
        if (_.isFunction(callback))
            callback = {
                success: callback,
                error: on_error
            };

        $.ajax({
            type: "GET",
            url: url,
            data: data,
            dataType: "json",
            traditional: true,
            success: callback.success,
            error: callback.error,
            cache: false
        });
    };


    var _postForm = function (formId, callback) {
        var attr = {
            type: "POST",
            iframe: true,
            dataType: null,
            beforeSubmit: function (formData, form, options) {
                return true;
            },
            uploadProgress: function (event, position, total, percentComplete) {
            },
            success: function (data) {
                callback(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                on_error(jqXHR, textStatus);
            }
        };

        var form = $('#' + formId);
        form.ajaxForm(attr);
        form.submit();
    };

    var on_error = function (jqXHR, textStatus) {
        require(['error/view'], function (view) {
            view.Render('Sorry. A system error occured. Please contact the system administrator for help.');
        });
    };


    return {
        PostJson: _postJson,
        GetJson: _getJson,
        PostForm: _postForm
    };
});