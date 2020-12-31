const express = require('express');
const router = express.Router();

const Transfer = require('../models/transferModel');

router.get('/', async (req, res) => {
    const transfer = await Transfer.find();
    res.json("transferView");
});

router.post('/', async(req, res) => {
    const {sender,receiver,date,type,description} = req.body;
    const transfer = new Transfer({sender,receiver,date,type,description});
    await transfer.save();
});

module.exports = router;