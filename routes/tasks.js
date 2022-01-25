const express = require("express");

const {
  getAllTasks,
  createNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createNewTask);

router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
