const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createNewTask = (req, res) => {
  res.json(req.body);
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
