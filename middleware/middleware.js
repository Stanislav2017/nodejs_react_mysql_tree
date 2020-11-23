const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization || null;
    try {
        const token = authHeader.split(' ')[1];
        const user = jwt.verify(token, config.get('token_secret'));
        req.user = user;
        return next();
    } catch (error) {
        return res.sendStatus(401);
    }
}


module.exports = { auth };