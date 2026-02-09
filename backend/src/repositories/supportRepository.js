const supportRequests = [];

class SupportRepository {
  save(data) {
    supportRequests.push(data);
    return data;
  }

  findAll() {
    return supportRequests;
  }
}

module.exports = new SupportRepository();
