const router = require('express').Router();
const userRoutes = require('./userRoutes');
const placesRoutes = require('./placesRoutes');
const homeRoutes = require('../homeRoutes')

router.use('/users', userRoutes);
router.use('/place', placesRoutes);
router.use('/', homeRoutes);

module.exports = router;