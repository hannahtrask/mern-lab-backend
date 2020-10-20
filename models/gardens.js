const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const gardenSchema = new Schema({
    name: { type: String, required: true },
    plants: [
        {
            ref: 'Plant',
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const Garden = mongoose.model('Garden', gardenSchema)
module.exports = Garden