require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const qrDataRouter = require("./Routes/qrDataRouter")
// const cors = require('cors')

const app = express();
app.use(express.json());
// app.use(cors())

// local server connection
const port = process.env.port || 5000


// mongodb connection
const URI = process.env.MONGO_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} ,(err) => {
    if(err) throw err;
    console.log("::: Successfully connected to mongoDb server :::");
})

app.use('/api', qrDataRouter)

app.listen(port , () => console.log(`::: Your app runs with the port ${port}:::`));