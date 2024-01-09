const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const summary = require("./routes/summary");
const user = require("./routes/login");
const db = require("./Utilities/db");

//MiddleWire
app.use(cors());
app.use(express.json());
app.use(express.static("public/image/"));

//Mongodb Connection
db.connectToDatabase()
  .then(() => {
    console.log("Connected to database Successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

//Routes
app.use("/api/v1/summary", summary);
app.use("/api/v1/getuser", user);

app.get("/", (req, res) => {
  res.send("Project Running");
});

app.listen(port, () => {
  console.log(`Project Running at Port ${port}`);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});
