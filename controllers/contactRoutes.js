const router = require('express').Router();


// Home page route.
router.get('/', function (req, res) {
    res.send('contact page');
  })

// About page route.
router.get('/contact', function (req, res) {
    res.send('About us');
  })
  







module.exports = router;