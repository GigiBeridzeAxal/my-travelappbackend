const express = require('express')
const app  = express()
const cors = require('cors')
const env = require('dotenv')
const ConnectDB = require('./models/ConnectDB')
const bodyParser = require('body-parser')
env.config()
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors({
    origin:'*'
}
))
app.use(express.json())

ConnectDB()


app.use('/', require('./routes/ServerRoute'))




app.listen(4000,console.log("server Succesfully Hosted"))