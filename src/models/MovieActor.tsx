import { Sequelize, Model, DataTypes, BelongsToMany } from "sequelize";
import { sequelize } from "./db";

export class MovieActor extends Model {
  public id!: number;
}

MovieActor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "MovieActor",
    tableName: "movieactors",
  }
);
