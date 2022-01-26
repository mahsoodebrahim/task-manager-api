require("dotenv").config();
const express = require("express");

const connectDB = require("./db/connect");
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

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
