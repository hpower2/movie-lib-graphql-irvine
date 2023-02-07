import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  "postgres://pguhcrwrwmrrrb:5adce79c164b4d87a3e63dc89709e504efb6a1fccc5d5d369b528a1217f11b41@ec2-52-21-136-176.compute-1.amazonaws.com:5432/d9374l2j1jod17",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
