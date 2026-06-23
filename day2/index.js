const app = require('express')()
const parser = require('body-parser')
const db = require('./connection')
const dbApi = require('./CorporateDbController')
const fsApi = require('./CampusFileController')
db()
app.use(parser.json())
// http://localhost:2222/file
// http://localhost:2222/db
app.get('/:source',async(req,res)=>{
    const storage = req.params.source
    if (storage==="file")
        app.use('/api',fsApi)
    else
        app.use('/api',dbApi)
    res.json({"Message":`Source decided ${storage}`})
})


const PORT=2222
app.listen(PORT,()=>{
    console.log(`API Running @ ${PORT}`)
})