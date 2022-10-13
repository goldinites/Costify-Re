import express from "express";
import bodyParser from "body-parser";
import authController from "../controllers/auth.js";

const Router = express();

const jsonParser = bodyParser.json();

Router.post('/auth', jsonParser, (req, res, next) =>  authController.auth(req, res, next));
Router.post('/register', jsonParser, (req, res, next) =>  authController.register(req, res, next));

export default Router;
