
const express = require("express");

const https  = require("https");

const bodyParser = require("body-parser");

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function (){

    console.log("Server Is Running On Port " + port);

}); 

app.get("/", function(req, res){
   
    res.send("Working");

});