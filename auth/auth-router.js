const router = require(`express`).Router();
const bcrypt = require(`bcryptjs`);
const jwt = require (`jsonwebtoken`);
const secrets = require (`../config/secrets`);

const Users = require (`../users/user-model`);
const Admin = require (`../admin/admin-model`);

//CREATE

router.post(`./register`, (req, res)=> {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.post(`./apply`, (req, res)=> {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.post(`./login`, (req, res) => {
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

router.post(`./admin`, (req, res) => {
    let{username, password } = req.body;

    Admin.findBy({ username })
    .first()
    .then(admin => {
        if (admin && bcrypt.compareSync(password, admin.password)) {

            let token = genToken(admin);
            res.status(200).json({ message: `Welcome KidsConnection Staff Member!`,
        token: token
    });
        } else {
            res.status(401).json({ message: `You must be an admin to sign into this site`});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});





function genToken(user) {
    const payload = {
        userid: user.id,
        username:user.username
    };
    const options = {
        expiresIn: `1d`
    };

    const token = jwt.sign(payload, secrets.jwtSecrets, options);
    return token;
}