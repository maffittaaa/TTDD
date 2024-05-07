const express = require('express');
const session = require("express-session");
const attack = require('./API/attack');
const login = require('./API/login');
const register = require('./API/register');
const match = require('./API/match');
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

    resetMatches();
})

app.use(session({
    secret: "someAmazingSecret", //its so amazing that no one knows what it is
    resave: false,    
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

//Middlewares
app.use(express.static("www")); //provide static files on the www folder
app.use(bodyParser.urlencoded({ extended: true })); // use body-parser as a middleware of our app

app.use('/attack', attack);
app.use('/login', login);
app.use('/register', register);
app.use('/match', match);

function resetMatches(){
    connection.execute("UPDATE matche SET matche_state_id = 2",
    function(err, rows, fields){
        if(err){
            console.log(err);
        }else{
            console.log(rows);
        }
    }
)};

app.listen(serverPort, () => {
    console.log('Server is running on port 3000');
});