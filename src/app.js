const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const dbConnection = require('./utilities/dbConnection')
const router = require('./router')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`server is running in port ${process.env.PORT}`)
})


dbConnection.conect(process.env.BD_URL)