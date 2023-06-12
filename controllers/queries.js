const axios = require("axios");
const { client } = require("../cache.js");

exports.get = async (req, res) => {
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
};
