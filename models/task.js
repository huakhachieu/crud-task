const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define(
  "Task",
  {
    username: {
      type: DataTypes.STRING,
      required: [true, "must provide a username"],
      allowNull: false,
    },
    taskname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "task",
    timestamps: false,
  }
);
module.exports = Task;
