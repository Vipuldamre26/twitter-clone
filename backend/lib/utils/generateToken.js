import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000,  // miliseconds
        httpOnly: true,    // prevent XSS attacts cross-site scripting attacts
        sameSite: "strict",  // CSRF attacts cross-site request forgery attacts
        secure: process.env.NODE_ENV !== "development",
    });
};