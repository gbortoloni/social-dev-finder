const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect(
      "mongodb+srv://giuliano:giuliano123456@cluster0-r5w9o.mongodb.net/week10?retryWrites=true&w=majority",
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
