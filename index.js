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
app.use(express.json())

ConnectDB()


app.use('/', require('./routes/ServerRoute'))




app.listen(4000,console.log("server Succesfully Hosted"))