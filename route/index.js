const express = require('express');
const router = express.Router();
const weatherController = require('../controller/weather');

router.get('/',(req,res)=>{
    res.send('hello');
})
router.get('/location', weatherController.location);

module.exports = router;
