require("dotenv").config();
const app = require("./app");
const dbConnect = require("./db/mongodb");
const { appConfig, dbConfig } = require("./config");

const initApp = async (appConfig, dbConfig) => {
  try {
    await dbConnect(dbConfig);
    app.listen(
      appConfig.port,
      console.log(
        `Server listen on: http://${appConfig.host}:${appConfig.port}`
      )
    );
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
};

initApp(appConfig, dbConfig);
