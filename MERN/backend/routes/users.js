const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    // Performing a conflicting change 2
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error 22222:' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    console.log(`adding new user`);

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;