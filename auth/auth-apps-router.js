const router = require(`express`).Router();
const bcrypt = require(`bcryptjs`);

const Apps = require (`../applications/applications_model`);


//CREATE

router.post(`/`, (req, res) => {
    let app = req.body;
    console.log(req.body)
    const hash = bcrypt.hashSync(app.password, 10);
    app.password = hash;
    

    Apps.add(app)
    .then(saved => {
        res.status(201).json({ message: `You have now applied to be a KidsFlyConnection Staff Member!`});
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);

        
    });
});

// router.post(`/login/user`, (req, res) => {
//     let{username, password } = req.body;

//     Apps.findBy({ username })
//     .first()
//     .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {

//             let token = genToken(user);
//             res.status(200).json({ message: `Welcome ${user.username}!`,
//         token: token
//     });
//         } else {
//             res.status(401).json({ message: `Invalid Credentials`});
//         }
//     })
//     .catch(error => {
//         res.status(500).json(error);
//     });
// });

// function genToken(user) {
//     const payload = {
//         userid: user.id,
//         username:user.username,
//         roles: "user"
//     };
//     const options = {
//         expiresIn: `1d`
//     };

//     const token = jwt.sign(payload, secrets.jwtSecrets, options);
//     return token;
// }

module.exports = router;