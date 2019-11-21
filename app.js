//declaration
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))
app.use(morgan('short'))

const router = require('./router/user.js')
app.use(router)

//server port
app.listen(3003, () => {
    console.log("server is up and listening on 3003....")
});