const express = require("express");
const models = require('../models')
const addPage = require('../views/addPage')
const router = express.Router();



router.get('/', async (req, res) => {
    await res.send('wiki add')
})

router.post('/', async (req, res, next) => {
    

    const page = new models.Page({
        title: req.body.title,
        content: req.body.content,
        
    })

    try {
        await page.save();
        res.redirect('/')

    } catch (error) {
        next(error)
    }
})

router.get('/add', async (req, res) => {
    await res.send(addPage())
})

module.exports = router 