const redis = require("redis");
const USER = process.env.REDIS_USER || "default";
const PASSWORD = process.env.REDIS_PASSWORD || "";
const client = redis.createClient({
  url: `redis://${USER}:${PASSWORD}@redis:6379/1`,
});

client.connect();
client.on("error", (err) => console.log("Redis Client Error", err));

client.on("connect", async function () {
  console.log("connected");
});

module.exports = { client: client };
