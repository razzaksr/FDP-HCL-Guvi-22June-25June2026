const router = require('express').Router()
const dao = require('./CorporateDbDAO')
// Routers for DB operations

router.get('/all',async(req,res)=>{
    const fetched = await dao.viewCampus()
    res.json(fetched)
})

router.post('/book',async(req,res)=>{
    const record = req.body
    const out = await dao.scheduleCampus(record)
    res.json(out)
})

router.patch('/edit/:company',async(req,res)=>{
    const org = req.params.company
    const replacement = req.body
    const result = await dao.editCampus(org,replacement)
    if(result) res.json(result)
    else res.status(404).json({message:`campus ${org} hasn't visited yet`})
})

router.delete('/del/:company',async(req,res)=>{
    const company = req.params.company
    const result = await dao.removeCampus(company)
    if(result) res.json(result)
    else res.status(404).json({message:`No ${company} available`})
})

module.exports=router