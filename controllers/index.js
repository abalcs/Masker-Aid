const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const resultsRoutes = require('./resultsRoutes');
const aboutRoutes = require('./aboutRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/results', resultsRoutes);
router.use('/about', aboutRoutes);

module.exports = router;