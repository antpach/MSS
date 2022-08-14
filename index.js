
const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer();
const app = express();
const path = require('path');
const ADMINC  = require('./Controller/AdminController');
const USERC = require('./Controller/AccountController');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('view'));

app.get('/',function (req,res)
{
    res.send('hi')
});

app.get('/newRoom',function (req,res){
    console.log(req.body);
    res.send("Room Created")
    ADMINC(req.body.Rnum,req.body.Rcap,req.body.Rcost);
})

app.post('/newAccount', function (req,res){
    console.log("Created New User")
    console.log(req.body)
    res.send("User created")
    let ac = new USERC.AccountController_Class();
    ac.createUser(req.body.name,req.body.address,req.body.newU,req.body.pass);
})

const server = http.createServer(app).listen(8080,function (err) {
    if (err){
        console.log(err);
    }
    else
    {
        console.log("Server is running at " + server.address())
    }
})



