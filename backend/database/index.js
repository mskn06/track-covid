const mongoose = require("mongoose");

class Connection {
  constructor() {
    const url =
      process.env.MONGODB_URI ||
      `mongodb+srv://${"MuskaanJ"}:${"h5386I1gkkrPlKz8"}@project-ppgo7.mongodb.net/${"trackCovid"}?retryWrites=true&w=majority`;
    console.log("Established new db connection");
    mongoose.Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(url);
  }
}

exports.Connection = new Connection();
