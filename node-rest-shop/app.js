const express = require("express");
const app = express();
const mongoose = require("mongoose");

const productsRoutes = require("./api/routes/products");
app.use("/products", productsRoutes);

mongoose.connect(
  "mongodb+srv://tienguyenngocphuc: " +
    process.env.MONGO_ATLAS_PW +
    "@nnptien.z7olp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useMongoClient: true,
  }
);

module.exports = app;
