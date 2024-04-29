const express = require('express');
const attack = require('./API/attack');
const bodyParser = require('body-parser');

const connection = require('./database');

const app = express();
const serverPort = 3000;

connection.connect((err) => {
    if (err) {
        console.log(" There is an error connection to the database: " + err);
        return;
    }
    console.log(" You are connected to database!");
})

//Middlewares
app.use(express.static("www")); //provide static files on the www folder
app.use(bodyParser.urlencoded({ extended: true })); // use body-parser as a middleware of our app

app.use('/attack', attack);

app.listen(serverPort, () => {
    console.log('Server is running on port 3000');
});