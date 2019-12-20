const router = require('express').Router();

const Users = require('./users-model');

//GET THE LIST
router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
      res.json(users);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get users' });
    });
  });

//UPDATE
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    users.update(changes, id)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update user' });
    });
  });

  
  //DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    users.remove(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
  });


// router.get (`/`, restricted, (req, res) => {
//     Users.find()
//     .then(users => {
//         res.json(users);
//     })
//     .catch(err => res.send(err));
// });

module.exports = router;