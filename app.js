const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRouter");
const userRoutes = require("./routes/userRouter");
const { connectDB } = require("./models/index");

const port = 5000;

app.use(express.static("./public"));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("this is my home page");
// });

app.use("/api", taskRoutes);
// console.log("hieu", taskRoutes);
// console.log(userRoutes);
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
