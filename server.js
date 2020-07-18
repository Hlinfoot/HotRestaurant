var reservations = [
    {
        customerName: "Rick Sanchez",
        customerEmail: "RSanchez@gmail.com",
        customerID: "RicknMorty69",
        phoneNumber: "000-000-0000"
      }
    ];

var waitList = [
    {
    customerName: "Fry",
    customerEmail: "PhillipJFry@Futurama.com",
    phoneNumber: "000-000-0000",
    customerID: "Frylock"
  } ];

  module.exports = waitList;

  module.exports = reservations;


var reservations = require("server.js");
var waitList = require("server.js");

module.exports = function(app) {

    app.get("/api/tableList", function(req, res) {
        res.json(reservations);
    });
    
}


// Dependencies

var express = require("express");
var path = require("path");

//Sets up the Express App
var app = express();
var PORT = 3000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Reservations Data Here

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendfile(path.join(__dirname, "tables.html"));
});

//Post new reservations
app.post("api/reservations", function(req,res) {
    var newReservation = req.body;

    newReservation.routename = newReservation.name.replace(/\s+/g, "").toLowerCase();


    console.log (newReservation);
    
    characters.push(newReservation);

    res.json(newReservation);
});

app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT);
});
