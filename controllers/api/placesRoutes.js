const router = require('express').Router();
const { User } = require('../../models');

//GET api/places/:id
router.get('/:id', async (req, res) => {
    const place = await Place.findByPk(req.params.id)
    
    if (place) {
        res.json(place)
    } else {
        res.json(new Place().toJSON())
    }
});
