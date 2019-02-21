import {Request, Response} from 'express';
import * as cors from 'cors';
import * as express from 'express';
import * as bodyParser from 'body-parser';

let users = require('../users.json');

const app = express();

app.use(cors());

interface IUser {
  id: number;
  username: string;
  age: number;
  password: string;
  dateOfBirth: string;
  dateOfFirstLogin: string;
  dateOfNextNotification: string;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

function toIsoString(date: string):string {
  return new Date(date).toISOString();
}
app.listen(8080, function () {
  console.log('Server started');
});

app.get('/users', function (req: Request, res: Response) {
  res.send(users);
});

app.get('/users/:id', function (req: Request, res: Response) {
  const user: IUser = users.find(function (item: IUser) {
    return item.id === Number(req.params.id);
  });

  setTimeout(function () {
    res.send(JSON.stringify(user));
  }, 3000);
});

app.post('/users/add', function (req: Request, res: Response) {

  const user: IUser = {
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

app.put('/users/:id', function (req: Request, res: Response) {
  const user: IUser = users.find(function (item: IUser): boolean {
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

app.delete('/users/:id', function (req: Request, res: Response) {
  users = users.filter(function (item: IUser) {
    return item.id !== Number(req.params.id);
  });
  res.sendStatus(200);
});

app.post('/authUser', function (req: Request, res: Response) {
  const user: IUser = users.find(function (item: IUser): boolean {
    return item.username === req.body.username && item.password === req.body.password;
  });

  setTimeout(function () {
    res.send(JSON.stringify(user));
  }, 3000);
});


app.post('/resetPassword', function (req: Request, res: Response) {
  const user: IUser = users.find(function (item: IUser): boolean {
    return item.username === req.body.username && item.dateOfBirth === toIsoString(req.body.dateOfBirth);
  });

  const response = user ? user.id : null;

  setTimeout(function () {
    res.send(JSON.stringify(response));
  }, 3000);
});

app.put('/updatePassword/:id', function (req: Request, res: Response) {
  const user: IUser = users.find(function (item: IUser): boolean {
    return item.id === Number(req.params.id);
  });

  user.password = req.body.password;

  setTimeout(function () {
    res.send();
  }, 3000);
});

