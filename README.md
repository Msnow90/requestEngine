# requestEngine
Throttle Requests sent out from application


***To install : npm install requestengine

RequestEngine uses a decorator function to wrap the request module's method and provide addtional functionality such as throttling
requests.

To use simply (in main app module):

var RequestEngine = require("requestengine");


// -- new RequestEngine (*numberOfRequestsToLimit*, *timeInSecondsForRequestLimit*)

var requestEngine = new RequestEngine(10, 60)


// Will ensure that no more than 10 requests will be sent out within every 60 seconds.


(Next step, which can be done in any module without any require statements):


// same format as request method from request module

requestEngine.addRequest(url, callback);
