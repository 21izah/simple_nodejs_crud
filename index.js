const express = require("express");
// Using Node.js `require()`
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/products.route");
const app = express();

//middleware
app.use(express.json()); // allows you to pass json from client to server
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("Hello World  feree");
  1;
});

mongoose
  .connect(
    "mongodb+srv://21izahmichael:KnbOFtvegR5ptQQj@cluster0.8raknai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database Connected!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connected failed");
  });
