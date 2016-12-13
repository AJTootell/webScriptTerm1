var 
http = require('http'),
url = require('url'),
server = http.createServer(
	function (req,res) {
		var setUrl = url.parse(req.url, true);
		if(setUrl.pathname == '/add'){
		//respond to the request
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		var out = Number(setUrl.query.a) + Number(setUrl.query.b);
		res.end("" + out);
		} else {
			res.statusCode = 404;
			res.end('Not Found!\n');
		}
	}
);
server.listen(8080);//nevers stops, just waits
