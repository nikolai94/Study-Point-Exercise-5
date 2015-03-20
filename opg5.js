var request = require("request");
var optionsToGet = {
    url: "http://www.iheartquotes.com/api/v1/random",
    method: 'GET',
    json: true
};
request(optionsToGet, function (error, response, body) {
    if(!error && response.statusCode === 200){
        return console.log(JSON.stringify(body));
    }
    console.log(error+ " : " +JSON.stringify(body));
});