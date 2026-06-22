// configure express/ back end server

// object for express/ backend server
const express = require('express')
const parser = require('body-parser')
const app = express()
app.use(parser.json())

const professors = ["Suman","Venkatash","Prabhakaran","Richard","Mallesh","Prakash","Krish"]

// end points
app.get('/staffs',async(req,res)=>{
    return res.send(`<i>${professors}</i>`)
})
// passed data as parameters
app.get('/by/:index',async(req,res)=>{
    const position = req.params.index
    return res.send(`<h3>${professors[position-1]}</h3>`)
})
// pass data to backend via request body
app.get('/secure',async(req,res)=>{
    const begin = req.body.orgin
    const result = professors.filter((professor)=>{
        return professor.startsWith(begin)
    })
    res.status(200).json(result)
})



// configure port for back end server
const port = 1235
app.listen(port,async(req,res,error)=>{
    try{
        console.log(`The server is running ${port}`)
    }catch(error){console.error(error)}
})
