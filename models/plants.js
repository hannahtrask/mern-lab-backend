const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const plantSchema = new Schema ({
    name: { type:String, required: true },
    flower: Boolean,
    vegetable: Boolean,
    edible: Boolean
})

const Plant = mongoose.model('Plant', plantSchema)
module.exports = Plant