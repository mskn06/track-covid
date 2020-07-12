const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const staticFilePath = path.join(__dirname, "frontend/www/");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;
const app = express();

app.set("port", PORT);
app.set("host", HOST);

require("./database/index");

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(staticFilePath));

const userRoutes = require("./routes/user");
userRoutes(app);

app.get("*", (req, res) => {
  res.send("index.html");
  // res.sendFile(path.join(staticFilePath, "index.html"));
});

process
  .on("SIGTERM", shutdown("SIGTERM"))
  .on("SIGINT", shutdown("SIGINT"))
  .on("uncaughtException", shutdown("uncaughtException"));

app.listen(PORT, () => console.log("Listening @" + PORT));

function shutdown(signal) {
  return (err) => {
    console.log(`${signal}...`);
    if (err) console.error(err.stack || err);
    setTimeout(() => {
      console.log("...waited 200ms, exiting.");
      process.exit(err ? 1 : 0);
    }, 200).unref();
  };
}
