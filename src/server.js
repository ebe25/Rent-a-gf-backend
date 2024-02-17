const express = require("express");
const PORT = require("./config/serverConfig");
const authenticate = require("../src/config/db");
const startUpServer = () => {
  const app = express();
  app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
  });
  authenticate();
};

startUpServer();
