#!/usr/local/bin/node

/*************************************************
 File:      index.js
 Project:   DyflexisPOS -httpTester
 For:       Wodan Brothers (2015)
 By:        Lars van der Schans (◣_◢)
 ::: (\_(\  Daniela Ruiz (｡◕‿◕｡)
 *: (=’ :’) :*
 •..(,(”)(”)¤°.¸¸.•´¯`»***************************/


/* Request Packages */
var http = require('http'),
    validator = require('is-my-json-valid'),
/* Private Packages */
    generator = require('./generator.js'),
    headerSchema = require('./schema/header.json'),
    bodySchema = require('./schema/body.json');
/**
 * setOptions
 * @param host
 * @param port
 * @param method
 * @param path
 * @param headers
 * @returns Object
 */
function setOptions (host, port, method, path, headers){

    return {
        'host'    : host,
        'port'    : port,
        'method'  : method,
        'path'    : path,
        'headers' : headers
    };
}

/**
 * sendRequestOptions
 * @param options
 * @param body
 */
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

    req.write(JSON.stringify(body));

    req.end();
}

/**
 * init
 */
function init () {

    var POSDate = process.argv[2];
    var POSHash = process.argv[3];
    var POSName = process.argv[4];
    var POSClientID = process.argv[5];

    var header = generator.generateRandomHeader(POSHash, POSName, POSClientID);

    var options = setOptions('pos.planning.nu', 80,'POST','/' + POSName,header);

    var body = generator.generateRandomData(POSDate, POSHash, POSName, POSClientID);

    /* Validate JSONs before send the http request */
    //Validate header
    console.log("Is my header valid? " + validator(headerSchema)(header));
    //Validate body
    console.log("Is my body valid? " + validator(bodySchema)(body));

    sendRequestOptions(options, body);
}

init();
//setInterval(function(){ init() }, 6000); // to send http request every 60 seconds