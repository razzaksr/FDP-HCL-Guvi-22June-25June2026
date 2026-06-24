const dao = require('./UserDAO')
// http://localhost:2222/api/all
// Authorization: Basic username:password
// next>>all
// http://localhost:2222/api/book
// next>> book
const validate = async(req,res,next) => {
    const head = req.headers.authorization
    if(!head) return res.status(401).json({"error":"Unauthorized"})
    const encryptedCredential = head.split(" ")[1]
    const credential = Buffer.from(encryptedCredential,'base64').toString()
    const logged = credential.split(":")
    const logs = {"username":logged[0],"password":logged[1]}
    const result = await dao.signin(logs)
    if(!result)
        return res.status(401).json({"error":"Invalid Credentials"})
    else{
        req.user = result // useful for durther role based access control
        next()// authorize
    }
}

const rbac = (allowed) => {
    return (req,res,next)=>{
        if(!allowed.includes(req.user.role)) 
            return res.status(403).json({error:"Not authorized to access"})
        next();// authorize
    }
}

module.exports={validate,rbac}