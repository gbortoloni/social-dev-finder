const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect(
      process.env.DB_CONNECTION,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => console.log("Connectado ao MongoDB..."))
    .catch(err =>
      console.error("Não foi possível connectar ao MongoDB", err.mesage)
    );
};
