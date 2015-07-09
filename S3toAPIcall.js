/**
 * Created by sudo on 7/9/15.
 */
console.log('Loading function');
var http = require('http');
var aws = require('aws-sdk');
var s3 = new aws.S3({apiVersion: '2006-03-01'});

exports.handler = function(event, context) {
    //get filename
    var key = event.Records[0].s3.object.key;
    //call api to process the added file
    http.get('http://www.routetoapi.com/processor?filename=' + key, function(res) {
        console.log("Got response: " + res.statusCode);
        context.succeed();
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
        context.fail('Error', "Error getting file: " + err);
    });
};