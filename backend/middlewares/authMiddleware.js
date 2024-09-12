const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const asynchandler = require('./asyncHandler.js')
const asyncHandler = require('./asyncHandler.js')

//check if the user is authenticated or not

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    //read Jwt cookie from the jwt cookie
    token = req.cookies.jwt
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password');
            //next is used to pass control to the next middleware in Express
            next();
            //meaning if admin proceed to the next middleware
        } catch (error) {
            res.status(401).json({error: "not authorized , token failed"})
        }
    }
    else{
        res.status(401).json({error: "not authorized , no token"})
    }
})

//check if the user is admin or not
const authorizeAdmin = async(req, res, next)=>{
    if(req.user && req.user.isAdmin ){
        next()
    }
    else
    {
        res.status(403).json({error: "not authorized , you are not an admin"})
    }
}

const middewares = {
    authenticate,
    authorizeAdmin
}
module.exports  = middewares;

