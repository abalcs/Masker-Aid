const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes')
const contactRoutes = require('./contactRoutes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/contact', contactRoutes)

module.exports = router;