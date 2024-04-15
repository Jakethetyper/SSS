const mongoose = require("mongoose");

// Replace "process.env.MONGODB_URI" with the actual environment variable name you used on Heroku
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected");
});
