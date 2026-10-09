const app = require("./src/app");
const connectDb = require("./src/config/db");

require("dotenv").config();

const PORT = process.env.PORT;
const startServer = async () => {
  await connectDb();

  app.listen(PORT, () => {
    console.log(`server is ruuning on ${PORT}`);
  });
};

startServer();
