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
        return res.status(201).json({ success: true, message: "Successfully created user"});
    } catch (error) {
        return res.status(400).json({ success: false, message: "Failed creating user", error });
    }
});

const UserController = {
    createUsers,
};

module.exports = UserController;
