const express = require(`express`);
const morgan = require (`morgan`);
const helmet = require(`helmet`);
const cors = require(`cors`);

const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
    // get all users from the database
    db('users')
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

//CREATING A NEW TRIP
  server.post('/trip', (req, res) => {
    const accountData = req.body;

    db('accounts').insert(accountData)
        .then(accountId => {
            res.status(201).json({ message: 'Congratulations, you successfully created a new trip!', accountID: accountId });
        })
        .catch(err => {
            res.status(500).json({ message: 'Whoops! Something went wrong :( ' });
        });
});

  module.exports = server;