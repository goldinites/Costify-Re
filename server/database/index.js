import {Sequelize} from "sequelize";

const dbconfig = {
  dialect: "mysql",
  host: "localhost",
  port: '3306',
  username: "root",
  database: "costify_db",
  password: "karma&koma1613"
}

const db = new Sequelize(dbconfig);

export default db;
