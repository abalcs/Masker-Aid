const router = require('express').Router();
const Place  = require("../../models/place")

//GET api/places/:id
// router.get('/:id', async (req, res) => {
//     const place = await Place.findByPk(req.params.id)
    
//     if (place) {
//         res.json(place)
//     } else {
//         res.json(new Place().toJSON())
//     }
// });



router.post('/mask', (req, res) => {

    console.log("STEP 2")
    console.log("You Found me")
    console.log(req.body)
    console.log("End of req")

    

    Place.create(req.body)
    .then(addedPlace => {
        console.log("STEP 3")
        res.json(addedPlace);
      });
    
  });


  module.exports = router;