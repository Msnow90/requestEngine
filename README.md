# requestEngine
Throttle Requests sent out from application


***To install : npm install requestengine

RequestEngine uses a decorator function to wrap the request module's method and provide addtional functionality such as throttling
requests.

To use simply (in main app module):

<code>
var RequestEngine = require("requestengine");
</code>

// -- new RequestEngine (*numberOfRequestsToLimit*, *timeInSecondsForRequestLimit*)

<code>
var requestEngine = new RequestEngine(10, 60)
</code>

// Will ensure that no more than 10 requests will be sent out within every 60 seconds.


// Next step, which can be done in any module without any require statements:

<code>
requestEngine.addRequest(url, callback); // same format as request method from request module
</code>
