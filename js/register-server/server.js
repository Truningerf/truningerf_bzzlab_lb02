'use strict';

let express = require("express");
let bodyParser = require("body-parser");
let app     = express();
const { v4: uuidv4 } = require('uuid');
const UserRepository = require('./UserRepository');
const Validation = require('./ValidationService');


const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//Warning: Korrekt setzen!!
const staticPath = './js/register-server/data/';
const registrationFile = staticPath+'registration.json';


// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});

// test uuid
app.get('/test1', (req, res) => {
    const id = uuidv4();
    res.send(id);
})

// necessary for posting data
// support json encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/register', (req, res) => {
    // http status if data is not valid
    const HTTP_STATUS_NO_ACCEPTABLE = 406;
    // read data of post request und create user-id
    let userObj = {
        "id": uuidv4(),
        "firstname": req.body.user.firstname,
        "lastname": req.body.user.lastname,
        "email": req.body.user.email,
        "phone": req.body.user.phone,
        "birthdate": req.body.user.birthdate,
        "subject": req.body.user.subject
    }

    let result = Validation.validateUser(userObj);
    if (result.isNotValid){
        res.status(HTTP_STATUS_NO_ACCEPTABLE).send(result.msg);
    } else {
        // save new user
        let userRepo = new UserRepository(registrationFile);
        userRepo.read()
            .then((data) => {
                // log data for analysis
                console.log(userObj);
                // add new user to json-file
                data.push(userObj)
                return data;
            })
            .then(data => userRepo.save(data))
            .catch(error => {
                console.log(error);
            });
        res.status(201).send(`User ${userObj.firstname} ${userObj.lastname} inserted`);
    }
})