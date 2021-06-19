const router = require('express').Router();
const { User } = require('../../models');

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
    console.log("You Found me")
    console.log(req.body)
    console.log("End of req")
    // User.create({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password,
    // })
    // .then(userData => {
    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.username = userData.username;
    //     req.session.loggedIn = true;
    
    //     res.json(userData);
    //   });
    // });
  });


  module.exports = router;