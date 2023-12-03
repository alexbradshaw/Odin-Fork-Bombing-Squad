const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || "Secret";
const expiration = 1000 * 60 * 60 * 4;

const generateToken = (user) => {
    return jwt.sign({ data: user }, secret, { expiresIn: expiration  });
}

const verifyToken = (req) => {
    const token = req.session.jwt;
    const userProvidedToken = req.headers.authorization;

    if (token != userProvidedToken) {
        return false;
    }

    try {
        jwt.verify(token, secret, { maxAge: expiration });
    } catch (e) {
        return false;
    }

    return true;
    
}

module.exports = { generateToken, verifyToken}