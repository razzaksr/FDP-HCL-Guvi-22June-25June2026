const router = require('express').Router()
const dao = require('./CampusFileDAO')
// Routers for FILE operations

router.get('/all',async(req,res)=>{
    const fetched = dao.viewCampus()
    res.json(fetched)
})

router.post('/book',async(req,res)=>{
    const record = req.body
    const out = dao.scheduleCampus(record)
    res.json(out)
})

router.patch('/edit/:company',async(req,res)=>{
    const org = req.params.company
    const replacement = req.body
    const result = dao.editCampus(org,replacement)
    if(result) res.json(result)
    else res.status(404).json({message:`no campus ${org}`})
})

router.delete('/del/:company',async(req,res)=>{
    const company = req.params.company
    const result = dao.removeCampus(company)
    if(result) res.json(result)
    else res.status(404).json({message:`No ${company} available`})
})

module.exports=router