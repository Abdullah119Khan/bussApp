const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const busRoutes = require("./routes/bus.routes");

dotenv.config({ path: "./config/config.env" });
require("./dbConn/dbConn");

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);
app.use("/api", busRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
