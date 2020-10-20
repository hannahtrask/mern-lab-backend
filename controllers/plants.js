const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')
const Plant = require('../models/plants.js')
const db = mongoose.connection


//SEED route
const plantSeed = require('../db/seedData.json')
router.get('/seed', async (req, res) => {
    try{
        await Plant.deleteMany({})
        const plants = await Plant.insertMany(plantSeed)
        res.json( {status: 200, data: plants})
        db.close()
    }
    catch(err) {
        res.status(400).json({err})
    }
})


//INDEX — GET --works in dev
router.get('/', async (req, res) => {
    const allPlants = await Plant.find({})
    res.json( {status: 200, data: allPlants} )
})

//SHOW SINGLE ITEM — GET --works in dev
router.get('/:id', async (req, res) =>{
    const plant = await Plant.findById(req.params.id)
    res.json( {status: 200, data: plant} )
})

//CREATE — POST --works in dev
router.post('/', async (req, res) => {
    const plant = await Plant.create(req.body)
    res.json( {status:200, data: plant} )
})

//UPDATE — PUT --works in dev
router.put('/:id', async (req, res) => {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ status:200, data: plant })
})

//REMOVE — DELETE --works in dev
router.delete('/:id', async (req, res) => {
    const plant = await Plant.findByIdAndDelete(req.params.id)
    res.json( {status: 200, message: "item successfully deleted: ", plant} )
})

module.exports = router