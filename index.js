var splunkjs = require('splunk-sdk');
var request = require('request');
var async = require("async");
var config = require('config');


// Create a Service instance and log in 
var service = new splunkjs.Service({
  username: config.get('splunk.admin.username'),
  password: config.get('splunk.admin.password'),
  scheme: config.get('splunk.admin.scheme'),
  host: config.get('splunk.admin.host'),
  port: config.get('splunk.admin.port'),
  version: config.get('splunk.admin.version')
});

service.apps().fetch(function(err, apps) {
  if (err) {
    //console.log("Error retrieving apps: ", err);
    return;
  }

  //console.log("Applications:");

  // Print installed apps to the console to verify login
  var appsList = apps.list();
  for(var i = 0; i < appsList.length; i++) {
    var app = appsList[i];
    //console.log("  App " + i + ": " + app.name);
  }

});

// Search a query and post the results to webhook
var jobs = service.jobs();
service.login(function(err, success) {
    jobs.oneshotSearch(config.get('splunk.search.query'), {exec_mode: "blocking"}, function(err, results) {
        //console.log(results); 
        request.post(config.get('splunk.webhook.url')).form(JSON.stringify(results));
        console.log("Results posted to webhook: "+ config.get('splunk.webhook.url')); 
        
    });
});

