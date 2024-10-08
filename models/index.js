const sequelize = require("../config/database");
const User = require("./user");
const Task = require("./task");

const connectDB = async () => {
  try {
    await sequelize.authenticate(); //kiem tra ket noi vs database
    console.log("ket noi co so du lieu thanh cong");
    // dong bo cac models
    await sequelize.sync(); // tao bang neu chua ton tai dua vao dinh nghia cac models
    console.log("dong bo models vs co so du lieu thanh cong");
  } catch (error) {
    console.log(
      "loi khi dong bo cac models vs co so du lieu khong thanh cong",
      error
    );
  }
};

module.exports = {
  User,
  Task,
  connectDB,
};
