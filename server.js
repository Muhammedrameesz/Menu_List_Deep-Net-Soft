const express = require("express");
const app = new express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const roter = require("./router/routes");



app.use(cors({ origin: "menu-list-deep-net-soft-frontend.vercel.app" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", roter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
