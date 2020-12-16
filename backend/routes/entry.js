const router = require('express').Router();
let Exercise = require('../models/Entry');

router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(users))
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
    .then(() => res.json('Search saved!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Entry.findByIdandDelete(req.params.id)
    .then(entry => res.json('Search deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Entry.findById(req.params.id)
    .then(entry => {
    entry.username = req.body.username;
    entry.entry = req.body.entry;
    entry.date = Date.parse(req.body.date);

    Entry.save()
    .then(() => res.json('Search saved!'))
    .catch(err => res.status(400).json('Error: ' + err));
})
.catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;