const express = require('express')

const router = express.Router()

const sch = require('../model/modelalien')

router.get('/', async(req, res) => {
    try {
        const a = await sch.find()
        res.json(a)

    } catch (err) {
        res.send("Error" + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const a = await sch.findById(req.params.id)
        res.json(a)

    } catch (err) {
        res.send("Error" + err)
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const a = await sch.findById(req.params.id)
        a.technology = req.body.technology
        const a1 = a.save()
        res.json(a1)

    } catch (err) {
        res.send("Error" + err)
    }
})

router.post('/', async(req, res) => {
    const x = new sch({
        name: req.body.name,
        technology: req.body.technology,
        sub1: req.body.sub1
    })
    try {
        const x1 = await x.save()
        res.json(x1)
    } catch (err) {
        res.send("Error" + err)
    }

})

module.exports = router