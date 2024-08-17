const Log = require("../models/Log");

exports.getAllLogs = async (req, res, next) => {
  try {
    const logs = await Log.find().populate("user", "username");
    if (!logs) {
      return res.status(404).json({ error: "Logs not stored" });
    }
    res.status(200).json({ success: true, data: logs });
  } catch (err) {
    next(err);
  }
};

exports.addLogs = async (req, res, next) => {
  try {
    const { tripName, description, location, date } = req.body;
    if (!tripName || !description || !location || !date) {
      return res.status(400).json({
        success: false,
        message: "please enter all field!",
      });
    }

    const logImage = req.file ? req.file.originalname : null;
    console.log("data", logImage);

    const log = await Log.create({
      tripName,
      description,
      location,
      date,
      logImage: logImage,
    });
    res.status(201).json({
      success: true,
      message: "Log added successFully!",
      data: log,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMyLogs = async (req, res, next) => {
  try {
    const logs = await Log.find({ postedBy: req.username }).populate(
      "postedBy",
      "username"
    );
    res.json(logs);
  } catch (err) {
    next(err);
  }
};

exports.updateLog = async (req, res, next) => {
  try {
    const { logimage, tripName, description, startDate, endDate } = req.body;
    const logId = req.params.id;

    const updatedLog = await Log.findByIdAndUpdate(logId, {
      logimage,
      tripName,
      description,
      startDate,
      endDate,
    });

    if (!updatedLog) {
      return res.status(404).json({ message: "Unable To Update The Log" });
    }

    res.status(200).json({ log: updatedLog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.getSingleLog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const log = await Log.findById(id);

    if (!log) {
      return res.status(404).json({ message: "No Log Found" });
    }

    res.status(200).json({ log });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteLog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedLog = await Log.findByIdAndRemove(id);

    if (!deletedLog) {
      return res.status(404).json({ message: "Unable To Delete" });
    }

    res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
