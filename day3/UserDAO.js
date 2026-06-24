const {user} = require('./model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

const secret_key = "amFpbmZkcA=="

const generateToken = async(logged) => {
    // decompose
    const {username,password} = logged
    const exists = await user.findOne({username})
    if(!exists) return null
    else{
        if(!await bcrypt.compare(password,exists.password)) return null
        else{
            const token = jwt.sign({"username":username},secret_key,{expiresIn:'1h'})
            return token
        }
    }
}

const validateToken = async(token) => {
    try{
        const result = await jwt.verify(token,secret_key)
        const found = await user.findOne({username:result.username})
        return found
    }catch(err){
        return null
    }
}

module.exports={signup,signin,generateToken,validateToken}