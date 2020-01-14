const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const app = express();

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

app.use(express.json());
app.use(routes);

app.listen(3333);
