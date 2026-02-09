const supportRepo = require("../repositories/supportRepository");

class SupportService {
  createRequest(reqData) {
    if (!reqData || typeof reqData !== 'object') {
      throw new Error("Request body is required");
    }

    if (!reqData.name || !reqData.email || !reqData.message) {
      throw new Error("Invalid request data: name, email, and message are required");
    }
    const payload = {
      id: Date.now(),
      name: reqData.name,
      email: reqData.email,
      message: reqData.message,
      createdAt: new Date()
    };

    return supportRepo.save(payload);
  }

  getAllRequests() {
    return supportRepo.findAll();
  }
}


module.exports = new SupportService();
