const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('dashboard');
        return;
    }
    res.render('login');
})

router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;