const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

class User {
  static initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        picture: {
          type: String,
          data: Buffer,
        },
      },
      { timestamps: true }
    );

    schema.plugin(uniqueValidator);
    mongoose.model("User", schema);
  }

  static getInstance() {
    this.initSchema();
    return mongoose.model("User");
  }
}

module.exports = User.getInstance();
