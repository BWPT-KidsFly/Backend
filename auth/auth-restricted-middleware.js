
const jwt = require(`jsonwebtoken`);
const secrets = require(`../config/secrets`);


module.exports = (req, res, next) => {
//   const { username, password } = req.headers;

const token = req.headers.authorization;
if(token) {
    jwt.verify(token, secrets.jwtSecrets, (err, decodedToken) => {
        if(err) {
            res.status(401).json({you: `shall not pass!`});
        }else {
            req.decodedJwt = decodedToken;
            next()
        }
    })
} else {
    res.status(401).json({you: "cant touch that."});
}
};