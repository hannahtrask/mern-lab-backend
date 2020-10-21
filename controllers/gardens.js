const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')
const Garden = require('../models/gardens')
const Plant = require('../models/plants')
const db = mongoose.connection


//SEED ROUTE — GET 
const gardenSeed = require('../db/gardenseedData.json')
router.get('/seed', async (req, res) => {
    try{
        await Garden.deleteMany({})
        const gardens = await Garden.insertMany(gardenSeed)
        res.json( {status: 200, data: gardens})
        // db.close()
    }
    catch(err) {
        res.status(400).json({err})
    }
})

//INDEX — GET --works in dev
//returns all gardens, populated with fruit
router.get('/', async (req, res) => {
    const allGardens = await Garden.find({}).populate('plants')
    res.json({
        status:200,
        data: allGardens
    })
})

//FIND BY ID — GET --works in dev
router.get('/:id', async (req, res) => {
    const garden = await Garden.findById(req.params.id)
    res.json({ status:200, data:garden })
})

//CREATE — POST --works in dev
router.post('/', async (req, res) => {
    const garden = await Garden.create(req.body)
    res.json({ status: 200, data: garden })
})

//UPDATE — PUT --works in dev
//with plants pushed to gardens
router.put('/:gardenId/addPlants/:plantId', async (req, res) => {
    const plant = await Plant.findById(req.params.plantId)
    const garden = await Garden.findByIdAndUpdate(
        req.params.gardenId, 
        { $push: { plants: plant.id }, new: true }
        )
    res.json({ status: 200, data: garden })
})


//REMOVE ONE — DELETE --works in dev
router.delete('/:id', async (req, res) => {
    const garden = await Garden.findByIdAndDelete(req.params.id)
    res.json({
        status:200,
        message: 'you have successfully deleted ', garden
    })
})

module.exports = router