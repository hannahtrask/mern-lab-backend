//importing environmental variables
require('dotenv').config();
const mongoose = require('mongoose');
const mongoDBURI = 'mongodb://localhost:27017/' + 'gardenapi'
const config = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify:false }
mongoose.connect(mongoDBURI, config);


const db = mongoose.connection

db.on('connected', () => console.log('mongo connected: ', mongoDBURI));
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));


module.exports = mongoose