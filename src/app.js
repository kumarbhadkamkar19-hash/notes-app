const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const noteRouter = require("../src/routes/note1.routes");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Note app running succefully",
  });
});

app.use("/api/note", noteRouter);


module.exports = app;
