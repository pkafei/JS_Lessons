/* The response times of my favorite websites */

var http = require('http'),
	urls = ['plbanalytics.com', 'www.clutchmagonline.com', 'jvns.ca']

function fetchPage(url) {
	var start = new Date();
	http.get({host: url}, function(res){
		console.log("Got response from: " + url);
		console.log('Request took:', new Date() - start, 'ms');
	});
}

for(var i =0; i < urls.length; i++) {
	fetchPage(urls[i]);
}