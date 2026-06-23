// configure schema
const mongoose = require('mongoose')

const corporateSchema = mongoose.Schema({
    "corporate":{type:String,require:true,unique:true},
    "role":{type:String,require:true},
    "date":{type:String,require:true},
    "package":{type:Number,require:true},
    "count":{type:Number,require:true},
})

// convert schema into collection
const corporate = mongoose.model('corporates',corporateSchema)

module.exports=corporate;