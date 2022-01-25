const express = require("express");

const tasksRoutes = require("./routes/tasks");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRoutes);

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
