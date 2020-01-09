const router = require(`express`).Router();
const bcrypt = require(`bcryptjs`);
const jwt = require (`jsonwebtoken`);
const secrets = require (`../config/secrets`);

const Users = require (`../users/user-model`);


//CREATE

router.post(`/register/user`, (req, res) => {
    let user = req.body;
    console.log(user)
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
});

router.post(`/login/user`, (req, res) => {
    let{username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {

            let token = genToken(user);
            res.status(200).json({ message: `Welcome ${user.username}!`,
        token: token
    });
        } else {
            res.status(401).json({ message: `Invalid Credentials`});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

function genToken(user) {
    const payload = {
        userid: user.id,
        username:user.username,
        roles: "user"
    };
    const options = {
        expiresIn: `1d`
    };

    const token = jwt.sign(payload, secrets.jwtSecrets, options);
    return token;
}

module.exports = router;