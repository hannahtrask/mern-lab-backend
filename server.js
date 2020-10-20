//EXPRESS
const express = require('express')
const app = express()
//DOTENV
require('dotenv').config();
//PORT and DEVELOPMENT
const { PORT = 4000, NODE_ENV = 'development' } = process.env;
//MONGO CONNECTION
const mongoose = ('./db/connection.js')
//CORS
const cors = require('cors')
const corsOptions = require('./configs/cors.js');
//MORGAN
const morgan = require('morgan')


//MIDDLEWARE
NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))

//ROUTES
//default route test
app.get('/', (req, res) => {
    res.json({message:"this is the default route, express up and running"})
})


//LISTENER
app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
})