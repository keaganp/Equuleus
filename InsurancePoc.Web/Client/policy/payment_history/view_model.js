define(['ko'], function (ko) {

    var data = [
        { tranId: "00034322", paymentDate: "23 Sep 2013", premium: "R 165.00", paid: "R 50.00", paymentType: "Cash Payment", agent: "Mike Brown", paidInFull: false },
        { tranId: "00034322", paymentDate: "21 Oct 2013", premium: "R 165.00", paid: "R 70.00", paymentType: "Cash Payment", agent: "Mike Brown", paidInFull: false },
        { tranId: "00034322", paymentDate: "20 Nov 2013", premium: "R 165.00", paid: "R 165.00", paymentType: "Debit Order", agent: "n/a", paidInFull: true },
        { tranId: "00034322", paymentDate: "20 Dec 2013", premium: "R 165.00", paid: "R 165.00", paymentType: "Debit Order", agent: "n/a", paidInFull: true },
        { tranId: "00034322", paymentDate: "20 Jan 2014", premium: "R 165.00", paid: "R 165.00", paymentType: "Debit Order", agent: "n/a", paidInFull: true}];

    var mod = function () {
        this.Transactions = ko.observableArray([]);
    };

    var fn = mod.prototype;



    fn.LoadData = function (callback) {
        this.Transactions(data);
        callback(data);
    };



    return new mod();
});