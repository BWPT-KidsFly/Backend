const router = require(`express`).Router();
const bcrypt = require(`bcryptjs`);
const jwt = require (`jsonwebtoken`);
const secrets = require (`../config/secrets`);

const Admins = require (`../admins/admin-model`);

//CREATE

router.post(`/register/admin`, (req, res) => {
    let admin = req.body;
    // console.log(req)
    const hash = bcrypt.hashSync(admin.password, 10);
    admin.password = hash;
    

    Admins.add(admin)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
});

router.post(`/login/admin`, (req, res) => {
    let{username, password } = req.body;

    Admins.findBy({ username })
    .first()
    .then(admin => {
        if (admin && bcrypt.compareSync(password, admin.password)) {

            let token = genToken(admin);
            res.status(200).json({ message: `Welcome ${admin.username}!`,
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

function genToken(admin) {
    const payload = {
        adminid: admin.id,
        username:admin.username,
        roles: "admin"
    };
    const options = {
        expiresIn: `1d`
    };

    const token = jwt.sign(payload, secrets.jwtSecrets, options);
    return token;
}

module.exports = router;