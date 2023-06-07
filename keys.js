// require("dotenv").config();
module.exports = {
    database: {
        host: process.env.HOST || 'db',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.PASSWORD || 'pw1234',
        database: process.env.DATABASE || 'db'
    }
}