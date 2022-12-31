const app = require("express")();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./helpers/error-handler");
require("dotenv/config");
const Parser = require("body-parser");
const PORT = process.env.PORT || 8000;
const api = process.env.AP;
//routes && jwt is placed the routes to be protected
const secret = process.env.SECRET;
const authJwt = require("./helpers/jwt");
app.use(authJwt({ secret: secret }));
const productRouter = require("./routes/product");
const usersRouter = require("./routes/user");
const categoriesRouter = require("./routes/category");
const ordersRouter = require("./routes/orders");

//using  middlewares
app.use(cors());
app.options("*", cors());
app.use(Parser.json());
app.use(morgan("tiny"));
app.use(errorHandler);
app.use(`/public/uploads`, express.static(__dirname + `/public/uploads`));
app.use(`/products`, productRouter);
app.use(`/users`, usersRouter);
app.use(`/categories`, categoriesRouter);
app.use(`/orders`, ordersRouter);

app.use((req, res, next) => {
  console.log("hello from middleware");
  next();
});

//connection to db
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connection to db sucessfully...");
  })
  .catch((err) => {
    console.log("connection failed");
  });

//port listening
app.listen(PORT, () => {
  console.log("listening..");
});
