const { Task } = require("../models");

//  lay danh sach ng dung
const getAllTask = async (req, res) => {
  try {
    const task = await Task.findAll();
    res.json(task);
  } catch (error) {
    res
      .status(500)
      .json({ error: "loi khi lay du lieu cac nhiem vu tu database" });
  }
};

const createTask = async (req, res) => {
  const { username, taskname } = req.body;
  try {
    const newTask = await Task.create({
      username: username,
      taskname: taskname,
    });
    console.log("task created");
    res.send(newTask);
  } catch (error) {
    res.status(500).json({ error: "loi khi tao du lieu nhiem vu tu database" });
  }
};
module.exports = { getAllTask, createTask };
