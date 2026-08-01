const bcrypt = require("bcrypt");
const User = require("../models/User");

//Register User
const register = async (req, res)=>{
    try{
        const {username, email, password, phone, address, role} = req.body;

        //validation
        if(!username){
            return res.status(400).json({
                success: false,
                message: "Username is Required.",
            });
        }


        if(username.length < 3){
            return res.status(400).json({
                success: false,
                message: "Username must be at least 3 characters long.",
            });
        }


        if(!email){
            return res.status(400).json({
                success: false,
                message: "Email is Required.",
            });
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address.",
            });
        }

        if(!password){
            return res.status(400).json({
                success: false,
                message: "Password is required",
            });
        }

        if(password.length < 6){
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long.",
            });
        }


        const phoneRegex = /^[6-9]\d{9}$/;
        if(!phoneRegex.test(phone)){
            return res.status(400).json({
                success: false,
                message: "Please enter a valid 10-digit phone number.",
            });
        }


        if(!address){
            return res.status(400).json({
                success: false,
                message: "Address is required",
            });
        }


        if(address.length < 5){
            return res.status(400).json({
                success: false,
                message: "Address must be at least 5 characters long.",
            });
        }


        //check existing user
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "Email already exist",
            });
        }


        //Hash Password
        const  hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const user = await User.create({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            role,
        });
        res.status(201).json({
            success: true,
            message: "User registerd successfully.",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

};

module.exports = {
    register
};