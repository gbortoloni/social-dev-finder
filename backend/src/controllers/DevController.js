const axios = require("axios");

const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
const sendMessage = require("../utils/sendMessage");

//index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    try {
      const devs = await Dev.find();
      return res.json(devs);
    } catch (ex) {
      return res.status(400).json(sendMessage(ex.message));
    }
  },

  async show(req, res) {
    try {
      const { _id } = req.params;
      const dev = await Dev.findOne({ _id });
      return res.json(dev);
    } catch (ex) {
      return res.status(400).json(sendMessage(ex.message));
    }
  },

  async store(req, res) {
    try {
      const { github_userName, techs, latitude, longitude } = req.body;

      let dev = await Dev.findOne({ github_userName });

      if (!dev) {
        const response = await axios.get(
          `https://api.github.com/users/${github_userName}`
        );
        const { name = login, avatar_url, bio } = response.data;

        const techsArray = parseStringAsArray(techs);

        const location = {
          type: "Point",
          coordinates: [longitude, latitude]
        };

        dev = await Dev.create({
          github_userName,
          name,
          avatar_url,
          bio,
          techs: techsArray,
          location
        });
      }

      return res.json(dev);
    } catch (ex) {
      return res.status(400).json(sendMessage(ex.message));
    }
  },

  async update(req, res) {
    try {
      const { _id } = req.params;
      const { bio, techs, latitude, longitude } = req.body;

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      const dev = await Dev.findOne({ _id });

      if (!dev) {
        return res.status(400).json(sendMessage("Dev não existe"));
      }

      await Dev.updateOne(
        { _id },
        {
          bio,
          techs,
          location
        }
      );

      return res.json(sendMessage("Dev atualizado com sucesso!!"));
    } catch (ex) {
      return res.status(400).json(sendMessage(ex.message));
    }
  },

  async destroy(req, res) {
    try {
      const { _id } = req.params;
      const dev = await Dev.deleteOne({ _id });
      return res.json(sendMessage("Dev deletado com sucesso!!"));
    } catch (ex) {
      return res.status(400).json(sendMessage(ex.message));
    }
  }
};
