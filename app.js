const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const dbPath = path.join(__dirname, "nxtwatch.db");
app.use(express.json());

let database = null;

const initializeDBAndServer = async () => {
  try {
    database = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.get("/", async (req, res) => {
  const { search = "" } = req.query;
  const videoList = `
  SELECT * FROM videos
  WHERE title LIKE '%${search}%'`;

  data = await database.all(videoList);
  console.log(search);
  res.send(data);
});

module.exports = app;
