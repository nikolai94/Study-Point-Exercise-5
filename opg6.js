var  http = require('http');
var request = require("request");
var Randomquote = "";
var optionsToGet = {
    url: "http://www.iheartquotes.com/api/v1/random",
    method: 'GET',
    json: true
};
request(optionsToGet, function (error, response, body) {
    if(!error && response.statusCode === 200){
        Randomquote = JSON.stringify(body);
        //      return console.log(JSON.stringify(body));
    }
    // console.log(error+ " : " +JSON.stringify(body));
});
http.createServer(function (req, res) {
    res.writeHead(200,{'content-Type': 'text/plain'});
    res.end(Randomquote + "testHej");
}).listen(5555,'127.0.0.1');
console.log('server started');