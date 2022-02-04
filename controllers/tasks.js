const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createNewTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findById(taskID);

  if (!task) {
    const error = createCustomError(`No task with id: ${taskID}`, 404);
    return next(error);
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const body = req.body;
  const updatedTask = await Task.findByIdAndUpdate(taskID, body, {
    new: true,
    runValidators: true,
  });

  if (!updatedTask) {
    const error = createCustomError(`No task with id: ${taskID}`, 404);
    return next(error);
  }

  res.status(200).json({ updatedTask });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const deletedTask = await Task.deleteOne({ _id: taskID });

  if (!deletedTask) {
    const error = createCustomError(`No task with id: ${taskID}`, 404);
    return next(error);
  }

  res.status(200).json({ deleteTask });
});

module.exports = {
  getAllTasks,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
