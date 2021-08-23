
const express = require("express");

const https  = require("https");

const bodyParser = require("body-parser");

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.listen(port, function (){

    console.log("Server Is Running On Port " + port);

}); 

app.get("/", function(req, res){
   
    res.sendFile(__dirname + "/signUp.html");

});

app.post("/", function (req, res){
    var userFirstName = req.body.yourFirstName;
    var userLastName = req.body.yourLastName;
    var userEmailAddress = req.body.yourEmailAddress;
    console.log(userFirstName, userLastName, userEmailAddress);
    res.sendFile(__dirname + "/signUp.html")
})
