const BusModel = require("../model/bus.model");

exports.getBuss = async (req, res) => {
  try {
    const getAllBuss = await BusModel.find().sort({ _id: -1 }).limit(5);
    return res.status(200).json(getAllBuss);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getByIdBus = async (req, res) => {
  try {
    const getOneBus = await BusModel.findById(req.params.id);
    return res.status(200).json(getOneBus);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.createBus = async (req, res) => {
  const busData = req.body;
  const newBus = new BusModel(busData);

  try {
    const savedBus = await newBus.save();
    return res.status(201).json(savedBus);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.updateBus = async (req, res) => {
  try {
    const updateBus = await BusModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(201).json(updateBus);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.deleteBus = async (req, res) => {
  try {
    const deleteBus = await BusModel.findByIdAndDelete(req.params.id);
    return res.status(200).json(deleteBus);
  } catch (err) {
    return res.status(500).json(err);
  }
};
