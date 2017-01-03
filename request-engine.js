"use strict";

var request = require("request");


var requestEngine = function(reqLimit, timeInSeconds){
  // limit the number of requests in the given time provided
  this.reqLimit = reqLimit;
  // the frequency in which requestEngine will ensure we haven't reached a limit
  this.timeInSeconds = timeInSeconds;
  // variable holding number of requests, will be cleared after time limit of checks reached
  this.requestCount = 0;
  // boolean to determine whether requests are allowed or not
  this.throttle = false;

  this.startTime = new Date().getTime();

  this.timeCheck = function(){
    global.requestEngine.requestCount = 0;
    global.requestEngine.startTime = new Date().getTime();
    global.requestEngine.throttle = false;
  }

  var intTime = timeInSeconds * 1000;


  this.timer = setInterval(this.timeCheck, intTime);


  // decorator function to wrap request and add additional functionality
  this.addRequest = function(url, callback){
    if (this.throttle == true){
      callback("Request limit reached for this application, please wait awhile before trying again!");
      return false;
    }
    this.requestCount++;
    request.call(this, url, callback);
    if (this.requestCount >= this.reqLimit){
      this.throttle = true;
    }
  }
  global.requestEngine = this;
}

module.exports = requestEngine;
