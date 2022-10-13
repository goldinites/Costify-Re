import userModel from "../database/models/user.js";
import bcrypt from "bcrypt";

class authController {
  auth(req, res, next) {
    let authData = req.body;
    userModel.findOne({
      where: {
        email: authData.email
      }
    }).then(user => {
      if(!user) {
        return res.status(401).json({
          error: "Пользователя с таким email не существует"
        });
      }

      bcrypt.compare(authData.password, user.password, (err, result) => {
        if (err) throw err;

        if(result) {
          res.status(200).json(user);
        } else {
          res.status(401).json({error: 'Неверный пароль'})
        }
      })
    });
  }

  register(req, res, next) {
    let userData = req.body;

    userModel.findOne({
      where: {
        email: userData.email
      }
    }).then(user => {
      if(user) {
        return res.status(401).json({
          error: 'Пользователь с таким email уже существует'
        });
      }

      bcrypt.hash(userData.password, 10, (err, hash) => {
        userData.password = hash;

        userModel.create(userData)
          .then(newUser => res.status(200).json(newUser))
      });
    });
  }
}

export default new authController();
