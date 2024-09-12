const mongoose = require('mongoose');
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const asyncHandler = require('../middlewares/asyncHandler');
const createToken = require('../utils/createToken');


const createUsers = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        // Save user to the database
        const savedUser = await newUser.save();

        // Generate token and send it as a cookie
        createToken(res, savedUser._id);

        // Send response
        return res.status(201).json({ success: true, message: "Successfully created user", savedUser });
    } catch (error) {
        return res.status(400).json({ success: false, message: "Failed creating user", error });
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = createToken(res, user._id);
                res.status(201).json({
                    success: true,
                    message: "Logged in succesfully",
                    username: user.username,
                    email: user.email,
                    isAdmin: user.isAdmin
                })
            }
            else {
                return res.status(400).json({ success: false, message: "Invalid password" });
            }
        }
        else {
            return res.status(400).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        return res.status(400).json({ success: false, message: "Failed to login", error });
    }
})

const logoutCurrentUser = asyncHandler(async(req, res)=>{
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0),
        })
    res.status(200).json({success: true, message: 'Logged Out successfully'})
})

const getAllUsers = asyncHandler(async(req, res)=>{
    try {
        const users = await User.find({});
        res.json(users)

        
    } catch (error) {
        
    }
})


module.exports = {
    createUsers,
    loginUser,
    logoutCurrentUser,
    getAllUsers,
};