const mongoose = require('mongoose')
require('dotenv').config() // lookup .env file in the folders
const establish = async() => {
    try{
        // local community server
        // await mongoose.connect("mongodb://localhost:27017/jain")
        // atlas cluster
        // mongodb+srv://<db_username>:<db_password>@zealous.nvt0c.mongodb.net/<db_name>?appName=Zealous")
        await mongoose.connect(process.env.db_url)
        console.log(`Connection established`)
    }catch(error){console.error(error)}
}
module.exports=establish