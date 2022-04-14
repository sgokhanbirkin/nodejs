const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    //console.log(req.body);
    const { name } = req.body;
    if(name){
        res.status(200).json({ success: true, message: `Welcome ${name}` });
    }
    else{
        res.status(404).json({ success: false, message: 'Please enter your name' });
    }
})

module.exports = router;