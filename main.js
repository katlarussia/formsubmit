// import express, mongoDB, and body parser... assign express module to app variable
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();
const port = 4000;

// this is used to allow cross-site access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); // ends use request

//body-parser package is used to handle the data from the POST
app.use(bodyParser.urlencoded({ extended: true}));

//serving static images:
app.use(express.static(path.join(__dirname, '/')));


// MIDDLEWARE

// GET REQUESTS

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/home.html");
}); //ends home get request

app.get('/services', function (req, res) {
    res.sendFile(__dirname + "/services.html");
}); //ends contacts get request

app.get('/projects', function (req, res) {
    res.sendFile(__dirname + "/projects.html");
}); //ends contacts get request

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/contact.html");
}); //ends contacts get request



// POST REQUESTS

app.post('/contact', (req, res) => {
  
}); // ends post contact request

app.listen(port, function (){
    console.log(`listening on port ${port} (http://localhost:${port}/)`);
}); // ends listen request