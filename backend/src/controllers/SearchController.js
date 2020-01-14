const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
const sendMessage = require("../utils/sendMessage");

module.exports = {
  async index(req, res) {
    try {
      const { latitude, longitude, techs } = req.query;

      const techsArray = parseStringAsArray(techs);

      const devs = await Dev.find({
        techs: {
          $in: techsArray
        },
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [longitude, latitude]
            },
            $maxDistance: 10000
          }
        }
      });

      return res.json(devs);
    } catch (ex) {
      return res.status(400).json(sendMessage(ex.message));
    }
  }
};
