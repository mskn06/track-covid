const Service = require("./baseService");
const model = require("../models/user");

class UserService extends Service {
  constructor() {
    super(model);
    this.login = this.login.bind(this);
  }
  async insert(req) {
    try {
      let user = req.body;
      let existingItem = await this.model.find(user);
      if (existingItem.length)
        return {
          error: true,
          statusCode: 409,
          item: existingItem,
        };

      let item = await this.model.create(user);
      console.log("item", item);
      if (item)
        return {
          error: false,
          item,
        };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create item",
        errors: error.errors,
      };
    }
  }

  async login(req) {
    try {
      let user = req.body;
      console.log(user);
      let item = await this.model.findOne(user);

      console.log("item", item);
      if (item)
        return {
          error: false,
          statusCode: 200,
          item,
        };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to login: User does noe exist!",
        errors: error.errors,
      };
    }
  }
}

module.exports = new UserService();
