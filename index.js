const express = require('express')

const mongoose = require('mongoose')

const url = 'mongodb://localhost/cbit'

mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection

const index = express();

index.use(express.json())

const r = require('./router/routeralien')

index.use('./student', r)

con.on('open', function() {
    console.log("welcome")
})

index.listen(9000, () => {
    console.log("server connected")
})