//declaration
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

//controller
app.get('/', (req, res) => {
    console.log("anythiibfwwc")
    res.send("cfggbj ")
})

//server port
app.listen(3005, () => {
    console.log("gdhshshshhshssh")
})