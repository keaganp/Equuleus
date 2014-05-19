define(['jquery', 'jquery.blockUI'], function ($) {

    var block = function () {
        $.blockUI({ message: '<span style="font-weight:bold; font-size:16pt"  ><img src="/Content/images/busy.gif" align="center" /> Please Wait...</span>' });
    };

    var unblock = function () {
        $.unblockUI();
    };

    return {
        Block: block,
        Unblock: unblock
    };
});