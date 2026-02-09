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
      createdAt: new Date(),
      priority: this.determinePriority(reqData.message)
    };

    return supportRepo.save(payload);
  }

  getAllRequests() {
    return supportRepo.findAll();
  }

  determinePriority(message) {
    if (message.toLowerCase().includes("urgent") || message.toLowerCase().includes("immediately")) {
      return "high";
    }
    return "normal";
  }

  validateRequest({name, email, message}) {
    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }
  }
}


module.exports = new SupportService();
