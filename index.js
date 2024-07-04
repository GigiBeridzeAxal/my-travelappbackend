const express = require('express')
const app  = express()
const cors = require('cors')
const env = require('dotenv')
const ConnectDB = require('./models/ConnectDB')

env.config()

app.use(cors({
    origin:'*'
}
))

ConnectDB()


app.use('/', require('./routes/ServerRoute'))




app.listen(4000,console.log("server Succesfully Hosted"))