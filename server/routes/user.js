import express, {response} from "express";
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
    userModel.findOne({
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

Router.post('/auth', jsonParser, (req, res) => {
  let authData = req.body;
  if(authData.login) {
    userModel.findOne({
      where: {
        login : authData.login,
      }
    }).then(response => {
      if(response.password) {
        bcrypt.compare(authData.password, response.password, (err, result) => {
          if (err) throw err;

          if(result) {
            res.send({
              status: 200,
              user: response
            });
          } else {
            res.status(400).send({message: 'wrong pass'})
          }
        })
      }
    });
  }
});

export default Router;
