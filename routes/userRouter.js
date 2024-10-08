const express = require("express");
const router = express.Router();
const {
  getAllUser,
  createUser,
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/userController");

router.route("/user").get(getAllUser).post(createUser);
router.route("/user/:userId").get(getUser).delete(deleteUser).put(updateUser);
module.exports = router;
