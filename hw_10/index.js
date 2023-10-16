const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const router = express.Router();
const { Client } = require('pg');
var multer  = require('multer');

const port = process.env.PORT || 3000


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images',express.static('images'));

app.get('/', (req, res) => { 
    res.send("Heyy!!"); 
});

require('./routes/image_routes')(app);


app.listen(port, () => {
    console.log('Server is running on port ' + port);
})

