const router = require('express').Router();
const Place  = require("../../models/place")

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

router.get('/mask', (req, res) => {
    Place.findAll({
        limit: 20,
    })
    .then(Places => {
        res.json(Places)
    })
})
  module.exports = router;