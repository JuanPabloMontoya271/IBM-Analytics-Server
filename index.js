const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())



app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hi There')
  });


app.listen('3001', () => { 
    console.log("Listen on port 3001")
})