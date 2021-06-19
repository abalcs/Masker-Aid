const { Places } = require('../models');

const placesData = [
    {
        place_id: "ChIJFZO7GFyy44kRtV5GBgGNxyA",
        business_address: "11 Tracy Ln, Hudson, NH 03051, USA",
    },
]

const seedPlaces = () => Places.bulkCreate(placesData);

module.exports = seedPlaces;