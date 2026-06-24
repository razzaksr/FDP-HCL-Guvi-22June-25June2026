const router = require('express').Router()
const dao = require('./UserDAO')

router.post('/register',async(req,res)=>{
    const collect = req.body
    const created = await dao.signup(collect)
    if(!created) res.status(400).json({"message":"User already exists"})
    res.json(created)
})

module.exports=router