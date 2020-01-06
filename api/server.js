const express = require(`express`);
const morgan = require (`morgan`);
const helmet = require(`helmet`);
const cors = require(`cors`);
const apiRouter = require (`../api/api-router`);
const db = require (`../database/dbConfig`)

const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(`/api`, apiRouter);

server.get('/', (req, res) => {
  console.log(req.body)
    // get all users from the database
    db('users')
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });


  module.exports = server;