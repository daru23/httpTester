
exports.generateRandomData = function (){

    var data = {
        "TargetDate": (new Date()).toISOString(),
        "TargetTime": getRandomProtocol(['0123456789', '2514639870', '9874563210', 2103658947]),
        "POSID": getRandomNumber(1,5),
        "POSName": getRandomProtocol(['aloha', 'futurepos', 'until', 'genericPos', 'standardPos']),
        "Reports": {
            "Turnover": getRandomNumber(10,3000),
            "Hourly":
                [
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    },
                    {
                        "time":(new Date()).toISOString(),
                        "turnover": getRandomNumber(10,500),
                        "tax":getRandomNumber(10,40)
                    }
                ],
            "Departments":
                [
                    {
                        "departmentName":getRandomProtocol(['Foo', 'Bar', 'Zar', 'Tall']),
                        "departmentID":getRandomNumber(1,50),
                        "turnover":getRandomNumber(10,500)
                    },
                    [
                        {
                            "departmentName":getRandomProtocol(['Foo', 'Bar', 'Zar', 'Tall']),
                            "departmentID":getRandomNumber(1,50),
                            "turnover":getRandomNumber(10,500)
                        }
                    ],
                    [
                        {
                            "departmentName":getRandomProtocol(['Foo', 'Bar', 'Zar', 'Tall']),
                            "departmentID":getRandomNumber(1,50),
                            "turnover":getRandomNumber(10,500)
                        }
                    ],
                    [
                        {
                            "departmentName":getRandomProtocol(['Foo', 'Bar', 'Zar', 'Tall']),
                            "departmentID":getRandomNumber(1,50),
                            "turnover":getRandomNumber(10,500)
                        }
                    ]
                ]
        }
    };

    return data;
};

exports.generateRandomHeader = function () {

    var header = {
        "POSUniqueID" : getRandomProtocol(['aloha', 'futurepos', 'until', 'genericPos', 'standardPos']),
        "ClientID": getRandomNumber(1,999),
        "Hash": getRandomNumber(10000, 99999) + getRandomProtocol(['abcd','efgh','ijkl','mnop','qrst','uvwx','yz']) + getRandomNumber(10000, 99999) + getRandomProtocol(['abcd','efgh','ijkl','mnop','qrst','uvwx','yz'])
    };

    return {data :JSON.stringify(header)};
};
 

// Generate Ramdom numbers between a range givens
function getRandomNumber(min, max) {
     return Math.floor( Math.random() * (max - min) + min );
}

function getRandomProtocol(array){
    return array[Math.floor(Math.random() * array.length)];
}

//console.log("%s",JSON.stringify(this.generateRandomData(),2,2));
//console.log("%s",JSON.stringify(this.generateRandomHeader(),2,2));