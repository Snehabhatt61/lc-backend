const express = require("express");
const path = require("path");
const mongo = require('mongodb');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

// connect to the database "lc-db"
mongoose.connect('mongodb://snehabhatt:iwilldoit123@ds147734.mlab.com:47734/lc-db', { useNewUrlParser: true }).then((success) => console.log('Connected to Database')).catch(err => console.log(err));

// Override mongoose promise as it is depricate.    
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

// initialize routes
app.use('/', routes);

app.use(function (err, req, res, next) {
    res.send({ error: err.message })
})
// Define port
app.listen(4000, function () {
    console.log('Started');
});  