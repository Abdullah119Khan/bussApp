const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const MongoUrl = process.env.mongoUrl;

mongoose
  .connect(MongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection success with mongoDB`);
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
