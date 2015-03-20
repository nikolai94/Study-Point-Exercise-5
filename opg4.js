var request = require("request");

var newPerson = {
    firstname: "Nikolai",
    lastname: "Hansen",
    street : "testvej",
    additionalinfo : "testadd",
    email : "mail@mail.dd",
    zipcode: "4000",
    city : "Roskilde"
};

var optionsToGet = {
    url: "http://testnikolai-testnikolai1.rhcloud.com/Ka2Web/api/getpersononzip/1600",
    method: 'GET',
    json: true
};

/*request(optionsToGet, function (error, response, body) {
    if(!error && response.statusCode === 200){
        return console.log(JSON.stringify(body));
    }
    console.log(error+ " : " +JSON.stringify(body));
});*/



var optionsPost = {
    url: "http://testnikolai-testnikolai1.rhcloud.com/Ka2Web/api/opretperson",
    method: 'POST',
    body: newPerson,
    json: true
};

/*request(optionsPost, function (error, response, body) {
    if(!error && response.statusCode === 200){
        return console.log(JSON.stringify(body));
    }
    console.log(error+ " : " +JSON.stringify(body));
});*/


var optionsDel = {
    url: "http://testnikolai-testnikolai1.rhcloud.com/Ka2Web/api/delperson/757",
    method: 'DELETE',
    json: true
};


request(optionsDel, function (error, response, body) {
    if(!error && response.statusCode === 200){
        return console.log(JSON.stringify(body));
    }
    console.log(error+ " : " +JSON.stringify(body));
});



