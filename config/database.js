const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testDB", "root", "hieu220120", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
