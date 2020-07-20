const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/index')
const seederService = require('./services/seeder.service')


const app = express()

//Load config
dotenv.config({ path: './config/config.env' })

//DB connect
mongoose.connect(config.dbConnection, { useNewUrlParser: true })

//Use bodyparser
app.use(bodyParser.json())

//CORS configuration
const corsConfiguration = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
}
app.use(corsConfiguration)


//Laod Routes
const apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)

//Allow seeding only if seeding is set to true
if (config.seedData) {
    seederService.seedData()
}




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))