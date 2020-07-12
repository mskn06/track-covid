const Controller = require("./baseController");
const service = require("../services/user");

class UserController extends Controller {
  constructor() {
    super(service);
    this.login = this.login.bind(this);
  }

  async login(req, res) {
    let response = await this.service.login(req);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(response.statusCode).send(response);
  }
}

module.exports = new UserController();
