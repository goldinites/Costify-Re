import database from '../index.js'
import {DataTypes} from "sequelize";

const userModel = database.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    login: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    tableName: 'users',
    timestamps: false,
  });

export default userModel;
