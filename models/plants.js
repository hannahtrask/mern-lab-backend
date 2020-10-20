const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const plantSchema = new Schema ({
    name: { type:String, required: true },
    flower: { type:Boolean, required: true },
    vegetable: { type:Boolean, required: true },
    edible: { type:Boolean, required:true }
})

const Plant = mongoose.model('Plant', plantSchema)
module.exports = Plant