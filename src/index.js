// require("dotenv").config({ path: "/.env" });
import dotenv from "dotenv";
import DBConnection from "./Database/index.js";
import { app } from "./app.js";
import chalk from "chalk";
dotenv.config({ path: "/.env" });

DBConnection()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        chalk.bgGreenBright(`Server Running on Port ${process.env.PORT}`)
      );
    });
  })
  .catch((err) => {
    console.log(`MONGODB CONNECTION  ERROR !!! ${err}`);
  });
