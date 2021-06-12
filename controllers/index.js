const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const resultRoutes = require('./resultRoutes')

router.use('/api', apiRoutes);
router.use('/results', resultRoutes);
// router.use('/', homeRoutes);

router.get('/', (req, res) => {
  res.render('dashboard');
});

router.get('/results', (req, res) => {
    res.render('results');
  });

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;