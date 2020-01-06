const router = require('express').Router();

const Application = require(`../applications/applications_model`);

const restricted = require(`../auth/auth-restricted-middleware`);

//GET THE LIST
router.get('/', restricted,(req, res) => {
    Application.find()
    .then(apps=> {
      res.json(apps);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get applicants' });
    });
  });

  
  //DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    admins.remove(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: 'Could not find applicant with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to deny applicant' });
    });
  });


module.exports = router;