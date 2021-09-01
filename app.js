
// Mailchimp API Key

// 4cfd253662a7abdc040d8932cd3ccca4-us5

// Mailchimp List ID

// e0fc551579

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

    const data = {
        members: [
            {
                email_address: userEmailAddress,
                status: "subscribed",
                merge_fields: {
                    FNAME: userFirstName,
                    LNAME: userLastName 
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url =  "https://us5.api.mailchimp.com/3.0/lists/e0fc551579";

    const options = {
        method: "POST",
        auth: "arbab:4cfd253662a7abdc040d8932cd3ccca4-us5"

    }

    const request = https.request(url, options, function (response){

        console.log(response.statusCode)
        
        response.on("data", function(data){
        })

        if (response.statusCode == 200){
            res.sendFile(__dirname + "/suscess.html")
        } else {
            res.sendFile(__dirname + "/failure.html")
        }

    })

    request.write(jsonData);
    request.end();

})

app.post("/failure", function (req, res){
    res.redirect("/");
})