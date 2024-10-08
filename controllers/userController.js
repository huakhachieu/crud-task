const { User } = require("../models");

//  lay danh sach ng dung
const getAllUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res
        .status(404)
        .json({ msg: `user with id ${userId} doesn't exits` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createUser = async (req, res) => {
  const { username, password } = req.body;
  const { userId } = req.params;
  try {
    const newUser = await User.create({
      id: userId,
      username: username,
      password: password,
    });
    if (userId === newUser.id) {
      return res.status(404).json({ msg: ` user with id ${userId} exits` });
    }
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { userId } = req.params;
    const user = await User.update(
      {
        username: username,
        password: password,
      },
      { where: { id: userId } }
    );
    if (!user) {
      return res
        .status(404)
        .json({ msg: `user with id ${userId} doesn't exits` });
    }
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const deleteUser = await User.destroy({
      where: { id: userId },
    });
    if (!deleteUser) {
      return res
        .status(404)
        .json({ msg: `user with id ${userId} doesn't exits` });
    }
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllUser, updateUser, getUser, createUser, deleteUser };
