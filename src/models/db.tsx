import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DATABASE!;

export const sequelize = new Sequelize(
  url,
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
// export const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
