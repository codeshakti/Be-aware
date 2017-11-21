require ('dotenv').config()

require('./mongoose')

const express = require('express')
const app = express()

app.use(express.static('public'))
console.log(`Starting web on port ${process.env.PORT}`)
	app.listen(process.env.PORT)