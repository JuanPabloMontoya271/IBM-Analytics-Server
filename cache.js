const redis = require("redis");
const USER = process.env.REDIS_USER || "default";
const PASSWORD = process.env.REDIS_PASSWORD || "";
const client = redis.createClient({
  url: `redis://${USER}:${PASSWORD}@redis:6379/1`,
});

module.exports = { client: client };
