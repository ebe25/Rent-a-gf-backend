import Express from "express";
import PORT from "./config/serverConfig";
const startUpServer = () => {
  const app = Express();
  app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
  });
};

startUpServer();
