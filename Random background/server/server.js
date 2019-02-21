"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const cors = require("cors");
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let db;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.post('/registerUser', (req, res) => {

    const user = {
        ...req.body.registrationData,
        categories: {
            landscape: true,
            animals: true,
            people: true,
            city: true
        },
        id: Date.now()
    };

    db.collection('users').insertOne(user, (err, result) => {

        if(err){
            return console.log(err);
        }

        setTimeout(() => {
            res.send(result);
        }, 1000)

    });
});

app.post('/authUser', (req, res) => {

    const { username, password } = req.body;

    db.collection('users').findOne({'username': username, 'password': password}, (err, doc) => {
        if (err) {
            return res.sendStatus(500);
        }

        if (!doc) {
            return res.sendStatus(401);
        }

            const userData = {...doc};

            delete userData.password;

        setTimeout(() => {
            res.send(userData);
        }, 1000)
    })

});

app.put('/updateUserData', (req, res) => {

    const { categories, userId } = req.body.data;

    db.collection('users').findOneAndUpdate(
        {'id': userId},
        {$set: {'categories': categories}},
        {returnOriginal: false},
        (err, result) => {
            setTimeout(() => {
                res.send(JSON.stringify(result));
            }, 1000)
        }
    );
});


mongoose.connect('mongodb://localhost:27017/random-background', (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;
    app.listen(8080, function () {
        console.log('Server started');
    })
});