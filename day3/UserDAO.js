const {user} = require('./model')
const bcrypt = require('bcryptjs')

const signup = async(newone) => {
    const exists = await user.findOne({username:newone.username})
    if(exists) return null
    else{
        const newUser = user(newone)
        await newUser.save()
        return newUser
    }
}

const signin = async(logged) => {
    // decompose
    const {username,password} = logged
    const exists = await user.findOne({username})
    if(!exists) return null
    else{
        if(!await bcrypt.compare(password,exists.password))
            return null
        else return exists
    }
}

module.exports={signup,signin}