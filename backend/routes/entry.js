const router = require('express').Router();
let Entry = require('../models/Entry');

router.route('/').get((req, res) => {
  Entry.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const entry = req.body.entry;
  const date = Date.parse(req.body.date);

  const newEntry = new Entry({
    username,
    entry,
    date,
  });

  newEntry.save()
  .then(() => res.json('Entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Entry.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/update/:id').post((req, res) => {
//   Entry.findById(req.params.id)
//     .then(exercise => {
//       entry.username = req.body.username;
//       entry.entry = req.body.entry;
//       entry.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Entry updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;