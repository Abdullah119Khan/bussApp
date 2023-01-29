const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    seats: {
      type: String,
    },
    dailyPrice: {
      type: String,
    },
    weeklyPrice: {
      type: String,
    },
    driverFuel: {
      type: String,
    },
    selectedFile: {
      type: String,
    },
  },
  { timestamps: true }
);

const BusModel = mongoose.model("Bus", busSchema);

module.exports = BusModel;
