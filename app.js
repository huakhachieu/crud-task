const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRouter");
const userRoutes = require("./routes/userRouter");
const { connectDB } = require("./models/index");

const port = 5000;

app.use(express.static("./public"));
app.use(express.json());

app.use("/api", taskRoutes);
app.use("/api", userRoutes);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server listening on port: ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};
start();
