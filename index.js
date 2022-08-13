
const http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer();
const app = express();
const ADMINC  = require('./Controller/AdminController');


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

app.post('/newRoom',function (req,res){
    console.log(req.body);
    res.send("Room Created")
    ADMINC(req.body.Rnum,req.body.Rcap,req.body.Rcost);
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



