const router = require('express').Router();

router.get('/results', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('results');
        return;
    }
    res.render('results');
})


module.exports = router;