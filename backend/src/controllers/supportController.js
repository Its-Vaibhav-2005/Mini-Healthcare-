const supportService = require("../services/supportService");


exports.submitSupportRequest = (req, res) => {
  try {
    supportService.validateRequest(req.body);
    const result = supportService.createRequest(req.body);
    res.status(201).json({ message: "Support request submitted", data: result });
  } catch (err) {
    res.status(400).json({ errorController: err.message });
  }
};


exports.getAllSupportRequests = (req, res) => {
  const data = supportService.getAllRequests();
  res.json(data);
};
