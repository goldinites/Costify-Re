import express from "express";
import bodyParser from "body-parser";
import userModel from "../database/models/user.js";
import bcrypt from "bcrypt";
const Router = express();

let jsonParser = bodyParser.json()

Router.get('/users', (req, res) => {
  userModel.findAll({
    attributes: ['login', 'email']
  }).then((response) => {
    res.send(response);
  });
});

Router.get('/users:id', (req, res) => {
  let id = req.params.id;
  if(id) {
    userModel.findAll({
      attributes: ['login', 'email'],
      where: {
        id : id
      }
    }).then(response => res.send(response))
  }
});

Router.post('/users', jsonParser, (req, res) => {
  let userData = req.body;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(userData.password, salt, function(err, hash) {
      if (err) throw err;

      userData.password = hash;
      userModel.create(userData);
      res.send('user added');
    });
  });

});

export default Router;
