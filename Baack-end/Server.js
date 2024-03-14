var express = require("express");
require("dotenv").config();
var mongoose = require("mongoose");
const {startDatabase,isConnected} = require('./dbcon.js');
const bodyParser = require('body-parser')

const { getRouter, postRouter, deleteRouter, putRouter } = require('./image-locker/Image-routes.js')
var app = express();
app.use(bodyParser.json())


app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello guys");
});
app.get("/ping", (req, res) => {
    res.send("pong");
});
app.get('/home', (req, res) => {
    res.json({
        message: isConnected() ? 'Database is connected' : 'disconnected'
    })
});
app.use('/', getRouter);
app.use('/', postRouter);
app.use('/', deleteRouter);
app.use('/', putRouter);

app.listen(3000, async () => {
    await startDatabase();
    console.log("Server is running on port 3000");
});
