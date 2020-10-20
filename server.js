//EXPRESS
const express = require('express')
const app = express()
//DOTENV
require('dotenv').config();

const { PORT = 3000, NODE_ENV = 'development' } = process.env;

//CORS
const cors = require('cors')
// //configure this later
// const corsOptions = require('./configs/cors.js');

//MORGAN
const morgan = require('morgan')

//MIDDLEWARE
NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json())
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