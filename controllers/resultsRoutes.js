const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('results', {
        loggedIn: req.session.loggedIn,
        user_id: req.session.user_id
    })
})

// router.get('/', (req, res) => {
//     res.render('about', {
//         loggedIn: req.session.loggedIn
//     })
// })

// router.get('/', (req, res) => {
//     res.render('dashboard', {
//         loggedIn: req.session.loggedIn,
//     })
// });

module.exports = router;