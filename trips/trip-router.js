const router = require('express').Router();

const trips = require(`./trip-model`);

router.get('/', restricted, (req, res) => {
    trips.find()
    .then(trips => {
      res.json(trips);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get users' });
    });
  });



  //UPDATE
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    trips.update(changes, id)
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
  
    trips.remove(id)
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
