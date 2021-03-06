const router = require('express').Router();
const { User } = require('../../models');

//GET api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//GET single user

router.get('/:username', (req, res) => {
    User.findOne({
        where: {
            username: req.params.username
        },
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({ message: 'No user found with this username' })
            return;
        }
        res.json(userData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// LOGIN

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!userData) {
            res.status(400).json({ message: 'No user with that e-mail address' })
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword)
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' })
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json({ user: userData, message: 'You are now logged in!' })
        });
    } catch (err) {
        console.log(err)
        res.send()
    }
});

// LOGOUT

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      })
    }
    else {
      res.status(404).end();
    }
  });

// POST /api/users
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    .then(userData => {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
    
        res.json(userData);
      });
    });
  });

  router.post('/mask', (req, res) => {
    console.log("You Found me")
    // console.log(req.body)
    console.log("End of req")
    var place = JSON.parse(req.body)
    console.log(place)
  });

module.exports = router;