const fs = require('fs')
const path = require('path')
const storage = path.join(__dirname,'campus.json')

// CRUD with FILE
/*
add new campus: 
    read exists 
    append new one 
    modify in the file
View exists campus:
    read file
Update exists:
    read
    Update
    modify in the file
Delete:
    read
    delete
    modify in the file
*/

const read = () => {
    const records = fs.readFileSync(storage,'utf-8')
    return JSON.parse(records)
}
const modify = (record) => {
    fs.writeFileSync(storage,JSON.stringify(record,null,2,'utf-8'))
}

// DAO for Read all campus
const viewCampus = () => {
    return read()
}

// DAO for new campus(JSON format)
const scheduleCampus = (record) => {
    let exists = read() // keep old
    exists.push(record) // append new with old one
    modify(exists) // write updated records to file
    return record
}

const editCampus = (userarg, updatedRecord) =>{
    const exists = read()
    const index = exists.findIndex(each=>each.corporate === userarg);
    console.log(index)
    if(index!==-1){
        exists[index] = {...exists[index],...updatedRecord}
        modify(exists)
        return exists[index]
    }
    return null
}

const removeCampus = (userarg) => {
    const exists = read()
    const index = exists.findIndex(each=>each.corporate===userarg)
    if(index!==-1){
        const deletedOne = exists.splice(index,1)
        modify(exists)
        return deletedOne
    }
    return null
}

module.exports = {viewCampus, scheduleCampus, editCampus, removeCampus}