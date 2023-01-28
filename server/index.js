const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
require("./dbConn/dbConn");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
