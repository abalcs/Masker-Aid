const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const resultRoutes = require('./resultRoutes')

// router.use('/api', apiRoutes);
// router.use('/results', resultRoutes);
router.use('/signup', homeRoutes)
// router.use('/', homeRoutes);

// router.get('/', (req, res) => {
//   res.render('dashboard');
// });

router.get('/signup', (req, res) => {
    res.render('signup');
  });

// router.use((req, res) => {
//   res.status(404).end();
// });

module.exports = router;