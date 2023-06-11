const axios = require("axios");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const router = require("./routes");
// const redis = require("redis");
const { client } = require("./cache.js");

const app = express();
app.use(router);
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const client = redis.createClient({
//   url: "redis://default:MDNcVb924a@redis:6379/1",
// });
client.connect();
client.on("error", (err) => console.log("Redis Client Error", err));

client.on("connect", async function () {
  console.log("connected");
});

app.post("/query", async (req, res) => {
  let prompt = req.body.prompt.toLowerCase();
  const cache = await client.get(prompt);
  if (cache != null) {
    let data = JSON.parse(cache);
    data.cached = true;
    res.status(200).json(JSON.parse(cache));
  } else {
    axios.post("http://ai:5000/query", { prompt: prompt }).then((response) => {
      client.set(prompt, JSON.stringify(response.data));
      response.data.cached = false;
      res.status(200).json(response.data);
    });
  }
});

app.listen("3001", () => {
  console.log("Listen on port 3001");
});
