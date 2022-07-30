import express from 'express';

const router = express.router();

router.get('/',(req, res) => {
    const{year,month,date,name} = req.query;
    const age = new Date() - new Date(`${year}-${month}-${date}`);
    const currentAge = Math.floor(age/1000/60/60/24/365);
    //res.render("HomePage", {name, age: currentAge})
    let response = `Hello ${name} You are ${currentAge} Year's Old`;
    res.send(response);
});

export default router;