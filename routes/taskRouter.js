const express = require("express");
const router = express.Router();
const { getAllTask, createTask } = require("../controllers/task");

router.route("/tasks").get(getAllTask).post(createTask);

// router.route("/:id").delete(deleteTask).get(getSingleTask).patch(updateTask);

module.exports = router;
