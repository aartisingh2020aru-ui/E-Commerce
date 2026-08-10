const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protected Routes Token Base
const requireSignIn = async (req,res, next)=>{
    try{
        const decode = jwt.verify(
            req.headers.authorization, 
            process.env.JWT_SECRET
        );
        req.user = decode;
        next();
    }catch(error){
        console.log(error);
    }
};

// Admin access
const isAdmin = async (req, res, next)=>{
    try{
        const user = await User.findById(req.user.id);

        if(user.role !== "admin"){
            return res.status(401).send({
                success: false,
                message: "UnAuthorized",
            });
        }
        next();
    }catch(error){
        console.log(error);
        res.status(401).send({
            success: false,
            error,
            message: "Error in admin middleware",
        });
    }
};

module.exports = {
    requireSignIn,
    isAdmin
};