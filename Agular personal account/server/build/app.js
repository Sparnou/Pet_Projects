"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
let users = require('../users.json');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
function toIsoString(date) {
    return new Date(date).toISOString();
}
app.listen(8080, function () {
    console.log('Server started');
});
app.get('/users', function (req, res) {
    res.send(users);
});
app.get('/users/:id', function (req, res) {
    const user = users.find(function (item) {
        return item.id === Number(req.params.id);
    });
    setTimeout(function () {
        res.send(JSON.stringify(user));
    }, 3000);
});
app.post('/users/add', function (req, res) {
    const user = {
        id: Date.now(),
        username: req.body.username,
        age: req.body.age,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        dateOfFirstLogin: req.body.firstLoginDate,
        dateOfNextNotification: req.body.dateOfNextNotification
    };
    users.push(user);
    res.send(user);
});
app.put('/users/:id', function (req, res) {
    const user = users.find(function (item) {
        return item.id === Number(req.params.id);
    });
    user.username = req.body.username ? req.body.username : user.username;
    user.password = req.body.password ? req.body.password : user.password;
    user.age = req.body.age ? req.body.age : user.age;
    user.dateOfBirth = req.body.dateOfBirth ? toIsoString(req.body.dateOfBirth) : user.dateOfBirth;
    user.dateOfFirstLogin = req.body.dateOfFirstLogin ? toIsoString(req.body.dateOfFirstLogin) : user.dateOfFirstLogin;
    user.dateOfNextNotification = req.body.dateOfNextNotification ? toIsoString(req.body.dateOfNextNotification) : user.dateOfNextNotification;
    setTimeout(function () {
        res.send(JSON.stringify(user));
    }, 3000);
});
app.delete('/users/:id', function (req, res) {
    users = users.filter(function (item) {
        return item.id !== Number(req.params.id);
    });
    res.sendStatus(200);
});
app.post('/authUser', function (req, res) {
    const user = users.find(function (item) {
        return item.username === req.body.username && item.password === req.body.password;
    });
    setTimeout(function () {
        res.send(JSON.stringify(user));
    }, 3000);
});
app.post('/resetPassword', function (req, res) {
    const user = users.find(function (item) {
        return item.username === req.body.username && item.dateOfBirth === toIsoString(req.body.dateOfBirth);
    });
    const response = user ? user.id : null;
    setTimeout(function () {
        res.send(JSON.stringify(response));
    }, 3000);
});
app.put('/updatePassword/:id', function (req, res) {
    const user = users.find(function (item) {
        return item.id === Number(req.params.id);
    });
    user.password = req.body.password;
    setTimeout(function () {
        res.send();
    }, 3000);
});
//# sourceMappingURL=app.js.map