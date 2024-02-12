import Express from "express";

const startUpServer = () => {
  const app = Express();
  app.listen(8000, () => {
    console.log("Server is running", 8000);
  });
};

startUpServer();
