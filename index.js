var express = require('express'); //import express 
var app = express();
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const encryptpass = require('./PasswordEncrypt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//const uri1 = "mongodb+srv://thilam:"+ encryptpass.get("GxaQjsens9SETQZDqOi/9mWdUGzA6Kj0nVQwHwjCds0=", '123456$#@$^@1ERF') +"@taxibooking-5qeqb.mongodb.net/test?retryWrites=true&w=majority";

const uri = "mongodb+srv://thilam:mentalomega1@taxibooking-5qeqb.mongodb.net/test?retryWrites=true&w=majority";

app.get("/", (req, res) => {
    res.end("Welcome to MongoDB RESTFUL API!");
});

app.get("/api/designlist", (req, res) => {
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            throw new Error("Unable to connect the database")
        } else {
            let collection = client.db('heatlosscaldb').collection('design');
            collection.find({}).toArray((err, result) => {
                if (err) {
                    res.json("No data inside collection!")
                } else {
                    if (result.length) {
                        res.json(result);
                    } else {
                        res.json("No Document found!");
                    }
                }
            });
        }
        client.close();
    });
});

var server = app.listen(8080, function () {



        var host = server.address().address;
        var host1 = server.address();
        console.log(host1);
        var port = server.address().port;

        console.log("server listening at http://%s:%s", host, port);


});

module.exports = app;