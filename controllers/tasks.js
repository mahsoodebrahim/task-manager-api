const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createNewTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = (req, res) => {
  const { id } = req.params;
  res.json({ id: id });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  res.send(`update taks with the id of ${id}`);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  res.send(`deleting task with an id of ${id}`);
};

module.exports = {
  getAllTasks,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
