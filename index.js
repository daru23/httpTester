/*
 * index.js
 *
 * Send http request in several intervals of time
 */

/* Request Packages */

var http = require('http'),
    generator = require('./generator.js');

function setOptions (host, port, method, path, headers){

    var options = {
        'host'    : host,
        'port'    : port,
        'method'  : method,
        'path'    : path,
        'headers' : headers
    };

    return options;
}


function sendRequestOptions (options, body){

    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function(error) {
        console.log('Error request: ' + error.message);
    });

    // write data to request body
    //var test = JSON.stringify(body);
    //console.log((JSON).parse(test));

    req.write(JSON.stringify(body));

    req.end();
}

function init () {

    var options = setOptions('localhost.localdomain',8080,'POST','/aloha',generator.generateRandomHeader());

    var body = generator.generateRandomData();

    sendRequestOptions(options, body);
}







setInterval(function(){ init() }, 10);
