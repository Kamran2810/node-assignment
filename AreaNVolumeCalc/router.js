const express = require('express');

const router = express.Router()

router.get('/',(req,res)=>{
    const {object,metric,radius} = req.query;

    if(object==='circle' && metric==='area'){
        res.send(`Area of Circle is ${3.14*radius*radius}`)
    }
    else if(object==='sphere' && metric==='volume'){
        res.send(`Volume of Sphere is ${(4/3*3.14*radius*radius*radius).toFixed(2)}`);
    }
    else if(object==='sphere' && metric==='surfaceArea'){
        res.send(`Surface-Area of Sphere is ${(4*3.14*radius*radius).toFixed(2)}`);
    }else{
        res.send("Please Provide Correct Inputs")
    }
})

module.exports = router