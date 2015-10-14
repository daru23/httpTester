/*************************************************
 File:      generator.js
 Project:   DyflexisPOS -httpTester
 For:       Wodan Brothers (2015)
 By:        Lars van der Schans (◣_◢)
 ::: (\_(\  Daniela Ruiz (｡◕‿◕｡)
 *: (=’ :’) :*
 •..(,(”)(”)¤°.¸¸.•´¯`»***************************/

/* Require Packages */
var dateHelper = require("date-extended");

/**
 * generateRandomHeader
 * @param POSHash
 * @param POSName
 * @param POSClientID
 * @returns Object
 */
exports.generateRandomHeader = function (POSHash, POSName, POSClientID) {

    var header = {
        "POSUniqueID" : POSName,
        "ClientID": POSClientID,
        "Hash": POSHash
    };

    return {data :JSON.stringify(header)};
};

/**
 * generateRandomData
 * @param POSDate
 * @param POSHash
 * @param POSName
 * @param POSClientID
 * @returns Object
 */
exports.generateRandomData = function (POSDate, POSHash, POSName, POSClientID){

    var dateString = POSDate + 'T04:00:00.000Z',
        date = new Date(dateString);

    return {
        "TargetDate" : dateString,
        "TargetTime" : 1444659458228,
        "BusinessDate" : dateString,
        "POSID" : POSClientID,
        "POSName" : POSName,
        "Reports" : {
            "Turnover" : {
                "turnover" : 204.05,
                "tax" : 16.2864
            },
            "Hourly" : [
                {
                    "time" :  (dateHelper(date).add("hour", 0).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 1).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 2).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 3).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 4).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 5).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 6).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 7).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 8).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 9).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 10).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 11).value()).toISOString(),
                    "turnover" : 31.45,
                    "tax" : 2.365
                },
                {
                    "time" :  (dateHelper(date).add("hour", 12).value()).toISOString(),
                    "turnover" : 80.40000000000001,
                    "tax" : 5.077
                },
                {
                    "time" :  (dateHelper(date).add("hour", 13).value()).toISOString(),
                    "turnover" : 27,
                    "tax" : 3.6918
                },
                {
                    "time" :  (dateHelper(date).add("hour", 14).value()).toISOString(),
                    "turnover" : 58.6,
                    "tax" : 4.779
                },
                {
                    "time" :  (dateHelper(date).add("hour", 15).value()).toISOString(),
                    "turnover" : 6.6,
                    "tax" : 0.3736
                },
                {
                    "time" :  (dateHelper(date).add("hour", 16).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 17).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 18).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 19).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 20).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 21).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 22).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                },
                {
                    "time" :  (dateHelper(date).add("hour", 23).value()).toISOString(),
                    "turnover" : 0,
                    "tax" : 0
                }
            ],
            "Departments" : [
                {
                    "departmentName" : "Restaurant",
                    "departmentID" : "Restaurant",
                    "turnover" : 135.55,
                    "tax" : 10.4208
                },
                {
                    "departmentName" : "Terras",
                    "departmentID" : "Terras",
                    "turnover" : 68.5,
                    "tax" : 5.8656
                },
                {
                    "departmentName" : "Kassa7",
                    "departmentID" : "Kassa7",
                    "turnover" : 0,
                    "tax" : 0
                }
            ]
        }
    };
};