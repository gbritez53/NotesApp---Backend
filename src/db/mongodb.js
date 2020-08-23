const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("db is connected"));

const dbConnect = async ({ host, port, dbName }) => {
  const uri = `mongodb://${host}:${port}/${dbName}`;
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = dbConnect;
