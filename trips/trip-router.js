const router = require('express').Router();

const trips = require(`./trip-model`);

const db = require(`../database/dbConfig`);

const restricted = require(`../auth/auth-restricted-middleware`);

//GET ALL TRIPS
router.get('/', restricted, (req, res) => {
    trips.find()
    .then(trips => {
      res.json(trips);
    })
    .catch (err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get your list of trips' });
    });
  });


//CREATING A NEW TRIP
router.post('/trip', (req, res) => {
  const tripData = req.body;

  db('trips').insert(tripData)
      .then(accountId => {
          res.status(201).json({ message: 'Congratulations, you successfully created a new trip!', accountID: accountId });
      })
      .catch(err => {
          res.status(500).json({ message: 'Whoops! Something went wrong :( ' });
      });
});


  // router.post(`/`, (req, res) => {
  //   const tripData = req.body;

  //   trips.add(tripData)
  //   .then(trip => {
  //     res.status(201).json(trip);
  //   })
  //   .catch (err => {
  //     res.status(500).json ({ message: `Sorry, failed to create a new trip at this time`});
  //   });
  // });



  //UPDATE
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    trips.update(changes, id)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: 'Could not find trip with given id' });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to update trip' });
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
        res.status(404).json({ message: 'Could not find trip with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete trip' });
    });
  });

  module.exports = router;