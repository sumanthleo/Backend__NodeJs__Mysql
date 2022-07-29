const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const path = require("path");
const router = require("./routers/router");

// const db = require("./models");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is connected ${port}`);
});
