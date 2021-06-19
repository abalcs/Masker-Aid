const router = require('express').Router();
const userRoutes = require('./userRoutes');
const placesRoutes = require('./placesRoutes');


router.use('/users', userRoutes);
router.use('/places', placesRoutes);

module.exports = router;