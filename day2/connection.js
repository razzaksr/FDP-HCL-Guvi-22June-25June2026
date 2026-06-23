const mongoose = require('mongoose')
const establish = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/jain")
        console.log(`Connection established`)
    }catch(error){console.error(error)}
}
module.exports=establish