const jwt = require('jsonwebtoken');
const generateToken = async (res, userId) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    //set JWT as an http only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
    })

    return token;
}

module.exports = generateToken;

    /*when using the jwt , the first one is a payload , 
    meaning that the token will carry the userId as part of its payload
    Purpose: This is the information that will be encoded and made available 
    in the JWT payload, which can be decoded later when verifying the token. 
    The payload can include any user-specific data or claims you want to pass
    securely between the client and the server.
    */
