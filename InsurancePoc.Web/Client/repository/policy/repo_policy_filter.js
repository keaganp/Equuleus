define([], function () {

    var dummy_data = [
        {
            PolicyId: 1,
            PolicyNum: "00282732",
            PolicyHolderFullName: "Dan Smith",
            PolicyHolderIdNumber: "8801020392911"
        },
        {
            PolicyId:2 ,
            PolicyNum: "00023243",
            PolicyHolderFullName: "Peter Brown",
            PolicyHolderIdNumber: "7201049382930"
        },        
        {
            PolicyId: 3,
            PolicyNum: "00902932",
            PolicyHolderFullName: "Chris Gray",
            PolicyHolderIdNumber: "6504118372938"
        },        
        {
            PolicyId: 4,
            PolicyNum: "00028374",
            PolicyHolderFullName: "Kerri Chandler",
            PolicyHolderIdNumber: "5506019283728"
        },        
        {
            PolicyId: 5,
            PolicyNum: "00019274",
            PolicyHolderFullName: "Charles Webster",
            PolicyHolderIdNumber: "8002128374928"
        }];

    var _getData = function (callback) {
        callback(dummy_data);
    };

    return {
        GetData: _getData
    };
});