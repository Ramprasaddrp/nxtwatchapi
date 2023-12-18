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
      console.log("Server Running at http://locathost:3000/");
    });

    const createTableQuery = `
        CREATE TABLE videos (
            id TEXT PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            thumbnail_url TEXT NOT NULL,
            channel_name TEXT NOT NULL,
            channel_profile_image_url TEXT NOT NULL,
            view_count TEXT NOT NULL,
            published_at TEXT NOT NULL
        );`;

    database.run(createTableQuery, (err) => {
      if (err) {
        console.error("Error creating table:", err.message);
      } else {
        console.log("Table created successfully");
      }
      database.close();
    });
  } catch (error) {
    console.log(`DB Err0t:${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

module.exports = app;
